"use client";

import { Reveal } from "@/components/ui/reveal";
import { HOW_IT_WORKS_INTRO, STEPS } from "@/lib/content";

export function HowItWorks() {
  return (
    <section className="bg-background/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {HOW_IT_WORKS_INTRO.kicker}
          </p>
          <h2 className="mt-3 max-w-xl font-brand text-3xl tracking-tight text-ink sm:text-4xl">
            {HOW_IT_WORKS_INTRO.title}
          </h2>
        </Reveal>

        <ol className="relative mt-12 max-w-2xl">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-primary/25 via-primary/45 to-primary/15"
          />

          {STEPS.map((step, i) => {
            const last = i === STEPS.length - 1;
            return (
              <Reveal key={step.title} delayMs={i * 90}>
                <li className={`relative flex gap-5 ${last ? "" : "pb-10"}`}>
                  <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-brand text-sm text-primary-foreground shadow-md">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1 pt-1.5">
                    <h3 className="font-semibold text-foreground sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
