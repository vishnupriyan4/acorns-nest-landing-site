"use client";

import {
  BarChart3,
  ClipboardCheck,
  MapPin,
  MessageSquare,
  Timer,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/ui/reveal";
import { FEATURES } from "@/lib/content";

const ICONS: Record<(typeof FEATURES)[number]["id"], LucideIcon> = {
  attendance: ClipboardCheck,
  naps: Timer,
  meals: UtensilsCrossed,
  comms: MessageSquare,
  outing: MapPin,
  reports: BarChart3,
};

const ACCENT: Record<string, string> = {
  primary: "bg-primary-muted text-primary",
  info: "bg-info-soft text-info",
  warning: "bg-warning-soft text-warning",
  success: "bg-success-soft text-success-text",
};

export function Features() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section id="features" className="scroll-mt-24 bg-background/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Features
          </p>
          <h2 className="mt-3 max-w-xl font-brand text-3xl tracking-tight text-ink sm:text-4xl">
            Everything the room already does — captured once.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.id];
            const lit = hover === feature.id;
            return (
              <Reveal key={feature.id} delayMs={i * 60}>
                <article
                  onMouseEnter={() => setHover(feature.id)}
                  onMouseLeave={() => setHover(null)}
                  className={`h-full rounded-xl border bg-background p-6 shadow-sm transition duration-300 ${
                    lit
                      ? "border-primary/35 shadow-md -translate-y-1"
                      : "border-border"
                  }`}
                >
                  <span
                    className={`inline-flex size-10 items-center justify-center rounded-lg ${ACCENT[feature.accent]}`}
                  >
                    <Icon className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
