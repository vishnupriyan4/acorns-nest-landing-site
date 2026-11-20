import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { FOOTER, PRICING } from "@/lib/content";

const description =
  "One flat plan per centre, sized by how many children you care for, with unlimited staff and family logins. Book a walkthrough and we'll send pricing by email.";

export const metadata: Metadata = {
  title: {
    absolute: "Daycare management software pricing: one plan for your centre | Acorns Nest",
  },
  description,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Daycare management software pricing: one plan for your centre | Acorns Nest",
    description,
    url: "/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <main className="pt-14 sm:pt-[72px]">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {PRICING.kicker}
          </p>
          <h1 className="mt-3 font-brand text-[32px] leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {PRICING.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{PRICING.intro}</p>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{PRICING.detail}</p>
          <p className="mt-4 text-sm leading-7 text-foreground sm:text-base">
            {PRICING.homeOfferBefore}
            <Link
              href={PRICING.homeOfferHref}
              className="font-medium text-primary underline underline-offset-4"
            >
              {PRICING.homeOfferLink}
            </Link>
            {/* {PRICING.homeOfferAfter} */}
          </p>
        </Reveal>

        <Reveal delayMs={60}>
          <Link
            href={PRICING.walkthroughHref}
            scroll={false}
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-hover"
          >
            {PRICING.walkthroughCta}
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <Reveal delayMs={80}>
          <p className="mt-12 text-sm leading-7 text-muted">
            {PRICING.existingCentresBefore}
            <a
              href={`mailto:${FOOTER.company.email}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {FOOTER.company.email}
            </a>
            {PRICING.existingCentresAfter}
          </p>
        </Reveal>
      </div>
    </main>
  );
}
