"use client";

import { Reveal } from "@/components/ui/reveal";
import { STEPS } from "@/lib/content";

export function HowItWorks() {
  return (
    <section className="bg-background/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            A day in the nest
          </p>
          <h2 className="mt-3 max-w-xl font-brand text-3xl tracking-tight text-ink sm:text-4xl">
            Log once. Everyone sees it.
          </h2>
        </Reveal>

        <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[16%] right-[16%] top-7 hidden h-px bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 md:block"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delayMs={i * 90}>
              <li className="relative rounded-xl border border-border bg-background p-6 shadow-sm">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-primary font-brand text-sm text-primary-foreground shadow-md">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
