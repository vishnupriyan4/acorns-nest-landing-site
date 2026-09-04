"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { BrowserFrame, PhoneFrame } from "@/components/ui/device-frames";
import { ProductScreenshot } from "@/components/ui/product-screenshot";
import { useCountUp } from "@/hooks/use-count-up";
import { useInView } from "@/hooks/use-in-view";
import { STATS, HERO, HERO_SHOTS } from "@/lib/content";

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
    <div className="text-center">
      <p className="font-brand text-3xl tracking-tight text-primary">
        {n}
        {suffix}
      </p>
      <p className="mt-1 text-sm font-semibold text-foreground">{label}</p>
      <p className="text-xs text-muted">{detail}</p>
    </div>
  );
}

type HeroProps = {
  classroomsSrc: string | null;
  parentHomeSrc: string | null;
};

export function Hero({ classroomsSrc, parentHomeSrc }: HeroProps) {
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
    <section ref={ref} className="relative overflow-hidden pt-20 sm:pt-32">
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
            {HERO.eyebrow}
          </p>
          <h1 className="mt-4 font-brand text-[32px] leading-[1.1] tracking-tight text-ink sm:mt-6 sm:text-6xl">
            {HERO.headlineBefore}
            <span className="hero-gradient-text">{HERO.headlineAfter}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:mt-5 sm:text-lg sm:leading-7">
            {HERO.subhead}
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-hover"
            >
              {HERO.primaryCta}
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#product"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-background px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-muted"
            >
              {HERO.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-8 max-w-5xl lg:mt-16 lg:pb-24">
          <div className="absolute -left-2 top-8 z-20 hidden float-y rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground shadow-md lg:block">
            <span className="relative mr-1.5 inline-flex size-2">
              <span className="pulse-ring absolute inset-0 rounded-full bg-tertiary" />
              <span className="relative size-2 rounded-full bg-tertiary" />
            </span>
            Outing Mode live
          </div>
          <div
            className="absolute -right-1 top-24 z-20 hidden float-y rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-primary shadow-md lg:block"
            style={{ animationDelay: "0.8s" }}
          >
            Powered by AI
          </div>
          <div
            className="absolute bottom-28 left-0 z-20 hidden float-y rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground shadow-md lg:block"
            style={{ animationDelay: "1.2s" }}
          >
            11 / 12 present
          </div>

          <div className="hidden lg:block">
            <BrowserFrame tilt>
              <ProductScreenshot
                src={classroomsSrc}
                alt="Director Classroom Management"
                hint={HERO_SHOTS.classrooms.hint}
                capture={HERO_SHOTS.classrooms.capture}
              />
            </BrowserFrame>
          </div>

          <div className="relative z-20 mx-auto w-fit lg:absolute lg:-bottom-10 lg:right-10 lg:mx-0">
            <PhoneFrame className="w-[210px] max-w-none shadow-glow lg:w-[230px]" tilt={false}>
              <ProductScreenshot
                src={parentHomeSrc}
                alt="Parent home"
                hint={HERO_SHOTS.parentHome.hint}
                capture={HERO_SHOTS.parentHome.capture}
              />
            </PhoneFrame>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-6xl border-t border-border/70 px-5 py-8 sm:mt-12 sm:px-8 sm:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} active={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
