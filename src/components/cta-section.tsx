"use client";

import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

const ROLES = ["Director", "Teacher", "Parent", "Kitchen", "Other"] as const;

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-border-focus focus:bg-primary-muted";

export function CtaSection() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [centre, setCentre] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<(typeof ROLES)[number]>("Director");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="demo" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Get a walkthrough
          </p>
          <h2 className="mt-3 font-brand text-3xl tracking-tight text-ink sm:text-4xl">
            Bring the nest to your centre.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Tell us who you are and we&apos;ll show the director dashboard, staff
            log, and parent feed against a day that looks like yours. This form
            stays on-page for now — wire it to your inbox when you&apos;re ready.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-foreground">
            <li>Live classroom, reports, and AI Insights tour</li>
            <li>Staff and parent mobile walkthrough</li>
            <li>No obligation — just a look at the nest</li>
          </ul>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="size-10 text-tertiary" />
                <p className="mt-4 font-brand text-2xl tracking-tight text-ink">
                  You&apos;re on the list.
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                  Thanks, {name || "there"}. We&apos;ll reach out at {email} about{" "}
                  {centre || "your centre"}.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <Field label="Your name">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClass}
                    placeholder="Director Chen"
                  />
                </Field>
                <Field label="Centre name">
                  <input
                    required
                    value={centre}
                    onChange={(e) => setCentre(e.target.value)}
                    className={fieldClass}
                    placeholder="Maple Grove Daycare"
                  />
                </Field>
                <Field label="Work email">
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClass}
                    placeholder="you@centre.com"
                  />
                </Field>
                <Field label="I am a">
                  <select
                    value={role}
                    onChange={(e) =>
                      setRole(e.target.value as (typeof ROLES)[number])
                    }
                    className={fieldClass}
                  >
                    {ROLES.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </Field>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
                >
                  Request a demo
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
