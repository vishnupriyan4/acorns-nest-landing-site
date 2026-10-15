"use server";

import { cookies } from "next/headers";

const SESSION_COOKIE = "an_invite_session";
const MIN_PASSWORD = 6;

export type AcceptInviteState =
  | { ok: true }
  | { ok: false; error: string; step: "code" | "password" };

type VerifyResult =
  | { ok: true; accessToken: string }
  | { ok: false; error: string };

function supabaseEnv(): { url: string; key: string } | null {
  const url = process.env.SUPABASE_URL?.trim().replace(/\/$/, "");
  const key = process.env.SUPABASE_ANON_KEY?.trim();
  if (!url || !key) return null;
  return { url, key };
}

function asText(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

function readAuthError(data: Record<string, unknown>, fallback: string): string {
  const raw = data.msg ?? data.error_description ?? data.message ?? data.error;
  if (typeof raw !== "string" || !raw.trim()) return fallback;
  const lower = raw.toLowerCase();
  if (
    lower.includes("expired") ||
    lower.includes("invalid") ||
    lower.includes("otp") ||
    lower.includes("token")
  ) {
    return "That code is invalid or has expired. Ask your centre to resend the invitation.";
  }
  return raw;
}

async function verifyInviteOtp(email: string, token: string): Promise<VerifyResult> {
  const env = supabaseEnv();
  if (!env) {
    return { ok: false, error: "Invite acceptance is not configured yet." };
  }

  const response = await fetch(`${env.url}/auth/v1/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: env.key,
      Authorization: `Bearer ${env.key}`,
    },
    body: JSON.stringify({ type: "invite", email, token }),
    cache: "no-store",
  });
  const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  if (!response.ok) {
    return {
      ok: false,
      error: readAuthError(
        data,
        "That code is invalid or has expired. Ask your centre to resend the invitation.",
      ),
    };
  }

  const session = data.session as { access_token?: string } | undefined;
  const accessToken =
    (typeof data.access_token === "string" && data.access_token) ||
    session?.access_token ||
    "";
  if (!accessToken) {
    return {
      ok: false,
      error:
        "The code was accepted, but the session could not be started. Ask your centre to resend the invitation.",
    };
  }
  return { ok: true, accessToken };
}

async function updatePassword(
  accessToken: string,
  password: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const env = supabaseEnv();
  if (!env) {
    return { ok: false, error: "Invite acceptance is not configured yet." };
  }

  const response = await fetch(`${env.url}/auth/v1/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      apikey: env.key,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ password }),
    cache: "no-store",
  });
  const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  if (!response.ok) {
    const raw = data.msg ?? data.message ?? data.error_description;
    return {
      ok: false,
      error:
        typeof raw === "string" && raw.trim()
          ? raw
          : "Unable to save that password. Try a different one.",
    };
  }
  return { ok: true };
}

async function rememberSession(accessToken: string) {
  const jar = await cookies();
  jar.set(SESSION_COOKIE, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/accept-invite",
    maxAge: 60 * 15,
  });
}

async function clearSession() {
  const jar = await cookies();
  jar.set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/accept-invite",
    maxAge: 0,
  });
}

function passwordError(password: string, confirm: string): string | null {
  if (password.length < MIN_PASSWORD) {
    return "Choose a password of at least 6 characters. You'll use it to sign in on the app.";
  }
  if (password !== confirm) {
    return "Password and confirmation do not match.";
  }
  return null;
}

export async function acceptInvite(
  _prev: AcceptInviteState | null,
  formData: FormData,
): Promise<AcceptInviteState> {
  const email = asText(formData.get("email")).trim().toLowerCase();
  const code = asText(formData.get("code")).replace(/\s+/g, "");
  const password = asText(formData.get("password"));
  const confirm = asText(formData.get("confirm"));

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      ok: false,
      step: "code",
      error: "Open the Accept invite button in your invitation email, then enter the code.",
    };
  }
  if (!/^\d{6}$/.test(code) && !/^\d{8}$/.test(code)) {
    return { ok: false, step: "code", error: "Enter the 6-digit or 8-digit code from the invitation email." };
  }
  const invalidPassword = passwordError(password, confirm);
  if (invalidPassword) {
    return { ok: false, step: "code", error: invalidPassword };
  }

  const verified = await verifyInviteOtp(email, code);
  if (!verified.ok) {
    return { ok: false, step: "code", error: verified.error };
  }

  const saved = await updatePassword(verified.accessToken, password);
  if (!saved.ok) {
    await rememberSession(verified.accessToken);
    return { ok: false, step: "password", error: saved.error };
  }

  await clearSession();
  return { ok: true };
}

export async function finishInvitePassword(
  _prev: AcceptInviteState | null,
  formData: FormData,
): Promise<AcceptInviteState> {
  const password = asText(formData.get("password"));
  const confirm = asText(formData.get("confirm"));
  const invalidPassword = passwordError(password, confirm);
  if (invalidPassword) {
    return { ok: false, step: "password", error: invalidPassword };
  }

  const jar = await cookies();
  const accessToken = jar.get(SESSION_COOKIE)?.value;
  if (!accessToken) {
    return {
      ok: false,
      step: "code",
      error: "That invite session expired. Enter the code again, or ask your centre to resend it.",
    };
  }

  const saved = await updatePassword(accessToken, password);
  if (!saved.ok) {
    return { ok: false, step: "password", error: saved.error };
  }

  await clearSession();
  return { ok: true };
}
