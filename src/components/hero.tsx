"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { ProductMock } from "@/components/mocks/product-mocks";
import { BrowserFrame, PhoneFrame } from "@/components/ui/device-frames";
import { ScreenshotSlot } from "@/components/ui/screenshot-slot";
import { useCountUp } from "@/hooks/use-count-up";
import { useInView } from "@/hooks/use-in-view";
import { STATS } from "@/lib/content";

function Stat({
  value,
  suffix,
  label,
  detail,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  detail: string;
  active: boolean;
}) {
  const n = useCountUp(value, active);
  return (
    <div>
      <p className="font-brand text-3xl tracking-tight text-primary">
        {n}
        {suffix}
      </p>
      <p className="mt-1 text-sm font-semibold text-foreground">{label}</p>
      <p className="text-xs text-muted">{detail}</p>
    </div>
  );
}

export function Hero() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 });
  const [orb, setOrb] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 18;
      setOrb({ x, y });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16"
        style={{ transform: `translate(${orb.x}px, ${orb.y}px)` }}
      >
        <div className="size-72 rounded-full bg-primary-muted blur-2xl float-slow" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-40"
        style={{ transform: `translate(${-orb.x}px, ${-orb.y}px)` }}
      >
        <div
          className="size-80 rounded-full bg-cream-deep blur-2xl float-slow"
          style={{ animationDelay: "1.4s" }}
        />
      </div>
      <div className="grain" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/70 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
            <Sparkles className="size-3.5" />
            Childcare operations, in one nest
          </p>
          <h1 className="mt-6 font-brand text-[40px] leading-[1.05] tracking-tight text-ink sm:text-6xl">
            The operating system
            <span className="hero-gradient-text"> for modern childcare.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Acorns Nest keeps directors, teachers, kitchen teams, and parents on
            the same day — attendance, naps, meals, menus, and live
            communication, with AI insights for the people running the centre.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-hover"
            >
              Request a demo
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#product"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-background px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-muted"
            >
              See the product
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl pb-8 sm:pb-16">
          <div className="absolute -left-2 top-8 z-20 hidden float-y rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground shadow-md sm:block">
            <span className="relative mr-1.5 inline-flex size-2">
              <span className="pulse-ring absolute inset-0 rounded-full bg-tertiary" />
              <span className="relative size-2 rounded-full bg-tertiary" />
            </span>
            Outing Mode live
          </div>
          <div
            className="absolute -right-1 top-24 z-20 hidden float-y rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-primary shadow-md sm:block"
            style={{ animationDelay: "0.8s" }}
          >
            Powered by AI
          </div>
          <div
            className="absolute bottom-16 left-0 z-20 hidden float-y rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground shadow-md md:block"
            style={{ animationDelay: "1.2s" }}
          >
            11 / 12 present
          </div>

          <BrowserFrame tilt>
            <ScreenshotSlot
              src="/screenshots/admin-classrooms.png"
              alt="Director classrooms dashboard placeholder"
              label="admin-classrooms.png"
              fallback={<ProductMock kind="classrooms" />}
            />
          </BrowserFrame>

          <div className="absolute -bottom-10 right-4 z-20 hidden sm:block md:right-10">
            <PhoneFrame tilt className="w-[200px] shadow-glow md:w-[230px]">
              <ScreenshotSlot
                src="/screenshots/mobile-parent-home.png"
                alt="Parent mobile home placeholder"
                label="mobile-parent-home.png"
                fallback={<ProductMock kind="parent" />}
              />
            </PhoneFrame>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-6xl border-t border-border/70 px-5 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} active={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
