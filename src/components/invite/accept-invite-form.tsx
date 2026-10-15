"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { StoreBadges } from "@/components/store-badges";
import { encryptInvitePassword } from "@/lib/invite-password";

const GET_THE_APP_URL = "https://acornsnest.com/#get-the-app";
const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/$/, "");

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-border-focus focus:bg-primary-muted";

function inviteEmailFromLocation(): string {
  const query = window.location.search.replace(/^\?/, "");
  for (const part of query.split("&")) {
    if (!part) continue;
    const separator = part.indexOf("=");
    const rawKey = separator === -1 ? part : part.slice(0, separator);
    const rawValue = separator === -1 ? "" : part.slice(separator + 1);
    if (decodeURIComponent(rawKey) !== "email") continue;
    return decodeURIComponent(rawValue.replace(/\+/g, "%2B")).trim().toLowerCase();
  }
  return "";
}

function errorDetail(body: unknown): string {
  if (!body || typeof body !== "object" || !("detail" in body)) {
    return "The invite could not be completed. Try again.";
  }
  const detail = (body as { detail?: unknown }).detail;
  if (typeof detail === "string" && detail.trim()) return detail;
  return "The invite could not be completed. Try again.";
}

export function AcceptInviteForm() {
  const [email, setEmail] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setEmail(inviteEmailFromLocation());
  }, []);

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-background p-6 text-center shadow-lg sm:p-8">
        <CheckCircle2 className="mx-auto size-10 text-tertiary" />
        <h2 className="mt-4 font-brand text-2xl tracking-tight text-ink">You're in.</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">
          Install Acorns Nest, then sign in with the email on this invitation and the password you
          chose. Staff and parents use the same app.
        </p>
        <a
          href={GET_THE_APP_URL}
          referrerPolicy="no-referrer"
          className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
        >
          Get the app
        </a>
        <StoreBadges className="mt-5 justify-center" />
      </div>
    );
  }

  if (email === null) {
    return null;
  }

  if (!email) {
    return (
      <div className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8">
        <h2 className="font-brand text-xl tracking-tight text-ink sm:text-2xl">Open your invitation</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Use the Accept invite button in the email from your centre. That link already knows who
          was invited, so this page does not ask for an email address.
        </p>
      </div>
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    if (!/^\d{6}$/.test(code) && !/^\d{8}$/.test(code)) {
      setError("Enter the 6-digit or 8-digit code from the invitation email.");
      return;
    }
    if (password.length < 6) {
      setError("Choose a password of at least 6 characters. You'll use it to sign in on the app.");
      return;
    }
    if (password !== confirm) {
      setError("Password and confirmation do not match.");
      return;
    }
    if (!API_BASE) {
      setError("Invite acceptance is not configured yet.");
      return;
    }

    setPending(true);
    try {
      const keyResponse = await fetch(`${API_BASE}/auth/invite-password-key`);
      const keyBody = (await keyResponse.json().catch(() => ({}))) as { public_key?: string };
      if (!keyResponse.ok || !keyBody.public_key) {
        setError(errorDetail(keyBody));
        return;
      }
      const encryptedPassword = await encryptInvitePassword(keyBody.public_key, password);
      const encryptedConfirm = await encryptInvitePassword(keyBody.public_key, confirm);
      const response = await fetch(`${API_BASE}/auth/accept-invite`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          code,
          password: encryptedPassword,
          confirm: encryptedConfirm,
        }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(errorDetail(body));
        return;
      }
      setDone(true);
    } catch {
      setError("The invite could not be completed. Check your connection and try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8"
    >
      <h2 className="font-brand text-xl tracking-tight text-ink sm:text-2xl">Enter your code</h2>
      <p className="mt-3 text-sm leading-6 text-muted">
        This invite is for <span className="font-medium text-ink">{email}</span>. Enter the 6-digit
        or 8-digit code from that email. Staff and parents use the same page. The code is not a
        link, so it stays valid if your email provider scans the message.
      </p>
      <div className="mt-6 space-y-4">
        <label className="block">
          <FieldLabel>Invitation code</FieldLabel>
          <input
            required
            name="code"
            inputMode="numeric"
            autoComplete="one-time-code"
            autoCapitalize="none"
            spellCheck={false}
            minLength={6}
            maxLength={8}
            pattern="[0-9]{6}|[0-9]{8}"
            className={`${fieldClass} tracking-[0.28em]`}
            placeholder="12345678"
            value={code}
            onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 8))}
          />
        </label>
        <PasswordFields
          password={password}
          confirm={confirm}
          onPassword={setPassword}
          onConfirm={setConfirm}
        />
        {error ? <ErrorText>{error}</ErrorText> : null}
        <button
          type="submit"
          disabled={pending}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover disabled:opacity-70"
        >
          {pending ? <Loader2 className="size-4 animate-spin" /> : null}
          {pending ? "Checking code…" : "Accept invite"}
        </button>
      </div>
    </form>
  );
}

function PasswordFields({
  password,
  confirm,
  onPassword,
  onConfirm,
}: {
  password: string;
  confirm: string;
  onPassword: (value: string) => void;
  onConfirm: (value: string) => void;
}) {
  return (
    <>
      <label className="block">
        <FieldLabel>Password</FieldLabel>
        <input
          required
          type="password"
          name="password"
          autoComplete="new-password"
          minLength={6}
          className={fieldClass}
          placeholder="At least 6 characters"
          value={password}
          onChange={(event) => onPassword(event.target.value)}
        />
      </label>
      <label className="block">
        <FieldLabel>Confirm password</FieldLabel>
        <input
          required
          type="password"
          name="confirm"
          autoComplete="new-password"
          minLength={6}
          className={fieldClass}
          placeholder="Re-enter password"
          value={confirm}
          onChange={(event) => onConfirm(event.target.value)}
        />
      </label>
    </>
  );
}

function FieldLabel({ children }: { children: string }) {
  return (
    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
      {children}
    </span>
  );
}

function ErrorText({ children }: { children: string }) {
  return (
    <p className="text-sm text-danger-text" role="alert">
      {children}
    </p>
  );
}
