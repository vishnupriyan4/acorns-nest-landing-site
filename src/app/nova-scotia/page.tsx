import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { NOVA_SCOTIA } from "@/lib/content";

const description =
  "Daycare management software for licensed childcare centres in Nova Scotia. Built in Halifax: attendance, daily logs, parent updates, menus, and reports.";

export const metadata: Metadata = {
  title: "Nova Scotia",
  description,
  alternates: { canonical: "/nova-scotia" },
  openGraph: {
    title: "Nova Scotia | Acorns Nest",
    description,
    url: "/nova-scotia",
    type: "website",
  },
};

export default function NovaScotiaPage() {
  return (
    <main className="pt-14 sm:pt-[72px]">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {NOVA_SCOTIA.kicker}
          </p>
          <h1 className="mt-3 font-brand text-[32px] leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {NOVA_SCOTIA.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{NOVA_SCOTIA.intro}</p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {NOVA_SCOTIA.sections.map((section, index) => (
            <Reveal key={section.title} delayMs={40 + index * 40}>
              <section>
                <h2 className="font-brand text-2xl tracking-tight text-ink sm:text-[1.65rem]">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{section.body}</p>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={200}>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={NOVA_SCOTIA.walkthroughHref}
              scroll={false}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-hover"
            >
              {NOVA_SCOTIA.walkthroughCta}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={NOVA_SCOTIA.pricingHref}
              className="inline-flex items-center justify-center rounded-lg border border-primary/25 bg-background px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-muted"
            >
              {NOVA_SCOTIA.pricingCta}
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
