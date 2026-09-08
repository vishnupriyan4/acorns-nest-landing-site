"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useActionState, type ReactNode } from "react";

import { submitSupportRequest } from "@/actions/support";
import { SUPPORT, SUPPORT_TOPICS } from "@/lib/content";

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-border-focus focus:bg-primary-muted";

export function SupportForm() {
  const [state, action, pending] = useActionState(submitSupportRequest, null);

  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8">
      <h2 className="font-brand text-xl tracking-tight text-ink sm:text-2xl">
        {SUPPORT.form.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted">{SUPPORT.form.body}</p>

      {state?.ok ? (
        <div className="flex flex-col items-center py-10 text-center">
          <CheckCircle2 className="size-10 text-tertiary" />
          <p className="mt-4 font-brand text-2xl tracking-tight text-ink">
            {SUPPORT.form.successTitle}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
            {SUPPORT.form.successBody}
          </p>
        </div>
      ) : (
        <form action={action} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name">
              <input
                required
                name="name"
                className={fieldClass}
                placeholder="Priya Nair"
                autoComplete="name"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                name="email"
                className={fieldClass}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </Field>
          </div>
          <Field label="Centre name (optional)">
            <input
              name="centre"
              className={fieldClass}
              placeholder="Maple Grove Daycare"
              autoComplete="organization"
            />
          </Field>
          <Field label="What's this about">
            <select name="topic" defaultValue={SUPPORT_TOPICS[0]} className={fieldClass}>
              {SUPPORT_TOPICS.map((topic) => (
                <option key={topic}>{topic}</option>
              ))}
            </select>
          </Field>
          <Field label="Message">
            <textarea
              required
              name="message"
              rows={6}
              maxLength={4000}
              className={`${fieldClass} resize-y`}
              placeholder="What were you trying to do, and what happened instead?"
            />
          </Field>
          {state && !state.ok ? (
            <p className="text-sm text-danger-text" role="alert">
              {state.error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={pending}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover disabled:opacity-70"
          >
            {pending ? <Loader2 className="size-4 animate-spin" /> : null}
            {pending ? "Sending…" : SUPPORT.form.submit}
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
