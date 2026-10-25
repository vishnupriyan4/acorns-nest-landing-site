import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { ABOUT, FOOTER } from "@/lib/content";

const description =
  "Acorns Nest Inc. builds daycare management software in Halifax, Nova Scotia. Meet the team and how we work with licensed childcare centres in Atlantic Canada.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Acorns Nest",
    description,
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  const c = FOOTER.company;

  return (
    <main className="pt-14 sm:pt-[72px]">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {ABOUT.kicker}
          </p>
          <h1 className="mt-3 font-brand text-[32px] leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {ABOUT.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{ABOUT.intro}</p>
          {ABOUT.story.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-sm leading-7 text-muted sm:text-base">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delayMs={40}>
          <section className="mt-12">
            <h2 className="font-brand text-2xl tracking-tight text-ink sm:text-3xl">
              {ABOUT.loadTitle}
            </h2>
            {ABOUT.load.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
            <p className="mt-4 text-sm leading-7 text-muted">
              How we use AI is in the{" "}
              <Link
                href="/privacy"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <Link
              href={ABOUT.aiHref}
              scroll={false}
              className="mt-4 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {ABOUT.aiCta}
            </Link>
          </section>
        </Reveal>

        <Reveal delayMs={60}>
          <section className="mt-14">
            <h2 className="font-brand text-2xl tracking-tight text-ink sm:text-3xl">
              {ABOUT.foundersTitle}
            </h2>
            <ul className="mt-6 space-y-6">
              {ABOUT.founders.map((person) => (
                <li
                  key={person.name}
                  className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                >
                  <p className="text-base font-semibold text-ink">{person.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {person.role}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted">{person.bio}</p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delayMs={80}>
          <section className="mt-14">
            <h2 className="font-brand text-2xl tracking-tight text-ink sm:text-3xl">
              {ABOUT.contactTitle}
            </h2>
            <address className="mt-4 text-sm not-italic leading-7 text-muted">
              <span className="font-semibold text-ink">{c.name}</span>
              <br />
              {c.streetAddress}
              <br />
              {c.locality}, {c.region} {c.postalCode}
              <br />
              {c.country}
              <br />
              <a
                href={`mailto:${c.email}`}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {c.email}
              </a>
            </address>
          </section>
        </Reveal>

        <Reveal delayMs={100}>
          <Link
            href={ABOUT.walkthroughHref}
            scroll={false}
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-hover"
          >
            {ABOUT.walkthroughCta}
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
