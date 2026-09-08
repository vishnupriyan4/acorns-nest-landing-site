"use server";

import { Resend } from "resend";

import { SUPPORT_TOPICS } from "@/lib/content";

export type SupportState =
  | { ok: true }
  | { ok: false; error: string };

const TOPICS = new Set<string>(SUPPORT_TOPICS);

const MESSAGE_MAX = 4000;

function asText(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitSupportRequest(
  _prev: SupportState | null,
  formData: FormData,
): Promise<SupportState> {
  const name = asText(formData.get("name"));
  const email = asText(formData.get("email"));
  const centre = asText(formData.get("centre"));
  const topic = asText(formData.get("topic"));
  const message = asText(formData.get("message"));

  if (!name || !email || !message || !TOPICS.has(topic)) {
    return { ok: false, error: "Please fill in your name, email, topic, and message." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (message.length > MESSAGE_MAX) {
    return { ok: false, error: "Please shorten your message and send it again." };
  }

  const to = process.env.SUPPORT_TO_EMAIL ?? process.env.WALKTHROUGH_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!to || !apiKey) {
    return {
      ok: false,
      error:
        "Support mail isn’t set up yet. Add SUPPORT_TO_EMAIL and RESEND_API_KEY to .env.local.",
    };
  }

  const from =
    process.env.RESEND_FROM_EMAIL ?? "Acorns Nest Support <support@acornsnest.com>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Support — ${topic}${centre ? ` — ${centre}` : ""}`,
    text: [
      "A support request came in from the Acorns Nest site.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Centre: ${centre || "Not given"}`,
      `Topic: ${topic}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    return {
      ok: false,
      error: error.message || "Could not send your message. Try again shortly.",
    };
  }

  return { ok: true };
}
