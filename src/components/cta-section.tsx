"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useActionState, type ReactNode } from "react";

import { submitWalkthrough } from "@/actions/walkthrough";
import { Reveal } from "@/components/ui/reveal";
import { CTA } from "@/lib/content";

const ROLES = ["Director", "Teacher", "Parent", "Kitchen", "Other"] as const;

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-border-focus focus:bg-primary-muted";

export function CtaSection() {
  const [state, action, pending] = useActionState(submitWalkthrough, null);

  return (
    <section id="demo" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {CTA.kicker}
          </p>
          <h2 className="mt-3 font-brand text-3xl tracking-tight text-ink sm:text-4xl">
            {CTA.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">{CTA.body}</p>
          <ul className="mt-6 space-y-2 text-sm text-foreground">
            {CTA.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8">
            {state?.ok ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="size-10 text-tertiary" />
                <p className="mt-4 font-brand text-2xl tracking-tight text-ink">
                  {CTA.successTitle}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                  Thanks — we&apos;ll reply to the email you left on the form.
                </p>
              </div>
            ) : (
              <form action={action} className="space-y-4">
                <Field label="Your name">
                  <input
                    required
                    name="name"
                    className={fieldClass}
                    placeholder="Director Chen"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Centre name">
                  <input
                    required
                    name="centre"
                    className={fieldClass}
                    placeholder="Maple Grove Daycare"
                    autoComplete="organization"
                  />
                </Field>
                <Field label="Work email">
                  <input
                    required
                    type="email"
                    name="email"
                    className={fieldClass}
                    placeholder="you@centre.com"
                    autoComplete="email"
                  />
                </Field>
                <Field label="I am a">
                  <select name="role" defaultValue="Director" className={fieldClass}>
                    {ROLES.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
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
                  {pending ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : null}
                  {pending ? "Sending…" : CTA.submit}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
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
