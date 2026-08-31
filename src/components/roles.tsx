"use client";

import { ChefHat, GraduationCap, HeartHandshake, LayoutDashboard } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/ui/reveal";
import { ROLES } from "@/lib/content";

const ICONS = {
  director: LayoutDashboard,
  staff: GraduationCap,
  parent: HeartHandshake,
  cook: ChefHat,
} as const;

export function Roles() {
  const [open, setOpen] = useState<(typeof ROLES)[number]["id"]>("director");

  return (
    <section id="roles" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Who it&apos;s for
          </p>
          <h2 className="mt-3 max-w-xl font-brand text-3xl tracking-tight text-ink sm:text-4xl">
            Four roles. The same nest.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            Role-based access keeps the director dashboard, staff floor tools,
            kitchen menus, and parent feed apart — without splitting the data.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-4">
          {ROLES.map((role, i) => {
            const Icon = ICONS[role.id];
            const selected = open === role.id;
            return (
              <Reveal key={role.id} delayMs={i * 50}>
                <button
                  type="button"
                  onClick={() => setOpen(role.id)}
                  className={`flex h-full w-full flex-col rounded-xl border p-5 text-left shadow-sm transition ${
                    selected
                      ? "border-primary/40 bg-primary-muted"
                      : "border-border bg-background hover:border-primary/25"
                  }`}
                  aria-pressed={selected}
                >
                  <Icon
                    className={`size-5 ${selected ? "text-primary" : "text-muted"}`}
                    strokeWidth={1.75}
                  />
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-primary">
                    {role.kicker}
                  </p>
                  <h3 className="mt-1 font-brand text-xl tracking-tight text-ink">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{role.summary}</p>
                  <ul
                    className={`mt-4 space-y-2 text-sm text-foreground transition ${
                      selected ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
