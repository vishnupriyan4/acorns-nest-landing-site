"use server";

import { Resend } from "resend";

export type WalkthroughState =
  | { ok: true }
  | { ok: false; error: string };

const ROLES = new Set(["Director", "Teacher", "Parent", "Kitchen", "Other"]);

function asText(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitWalkthrough(
  _prev: WalkthroughState | null,
  formData: FormData,
): Promise<WalkthroughState> {
  const name = asText(formData.get("name"));
  const centre = asText(formData.get("centre"));
  const email = asText(formData.get("email"));
  const role = asText(formData.get("role"));

  if (!name || !centre || !email || !ROLES.has(role)) {
    return { ok: false, error: "Please fill in every field." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid work email." };
  }

  const to = process.env.WALKTHROUGH_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!to || !apiKey) {
    return {
      ok: false,
      error:
        "Walkthrough mail isn’t set up yet. Add WALKTHROUGH_TO_EMAIL and RESEND_API_KEY to .env.local.",
    };
  }

  const from =
    process.env.RESEND_FROM_EMAIL ?? "Acorns Nest <beth.t@example.com>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Walkthrough request — ${centre}`,
    text: [
      "A walkthrough request came in from the Acorns Nest site.",
      "",
      `Name: ${name}`,
      `Centre: ${centre}`,
      `Email: ${email}`,
      `Role: ${role}`,
    ].join("\n"),
  });

  if (error) {
    return {
      ok: false,
      error: error.message || "Could not send the request. Try again shortly.",
    };
  }

  return { ok: true };
}
