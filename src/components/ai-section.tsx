"use client";

import { Brain } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { AI_SECTION, AI_SIGNALS } from "@/lib/content";

export function AiSection() {
  return (
    <section id="ai" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-ink px-6 py-12 text-white shadow-glow sm:px-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 left-10 size-56 rounded-full bg-cream-deep/20 blur-3xl"
        />

        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cream">
            <Brain className="size-3.5" />
            Powered by AI
          </span>
          <h2 className="mt-5 max-w-xl font-brand text-3xl tracking-tight sm:text-4xl">
            {AI_SECTION.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            {AI_SECTION.body}
          </p>
        </Reveal>

        <div className="relative mt-10 grid gap-4 md:grid-cols-3">
          {AI_SIGNALS.map((signal, i) => (
            <Reveal key={signal.title} delayMs={i * 80}>
              <article className="h-full rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <h3 className="font-semibold">{signal.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{signal.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
