import { ArrowRight, X } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Testimonial } from "@/components/news/testimonial";
import { Reveal } from "@/components/ui/reveal";
import { APP_STORES } from "@/lib/content";
import {
  PP_ANNOUNCEMENT_LIVE,
  PP_ARTICLE,
  PP_FAQ,
  PP_META,
  PP_ORG,
  PP_PATH,
  PP_PUBLISHED_ISO,
  PP_PUBLISHED_LABEL,
  PP_QUOTES,
} from "@/lib/news/point-pleasant";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://acornsnest.com";
const pageUrl = `${siteUrl}${PP_PATH}`;
const imageUrl = `${pageUrl}/opengraph-image`;

export const metadata: Metadata = {
  title: { absolute: PP_META.title },
  description: PP_META.description,
  alternates: { canonical: PP_PATH },
  robots: PP_ANNOUNCEMENT_LIVE
    ? { index: true, follow: true }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    type: "article",
    siteName: "Acorns Nest",
    locale: "en_CA",
    url: PP_PATH,
    title: PP_META.title,
    description: PP_META.description,
    publishedTime: PP_PUBLISHED_ISO,
    modifiedTime: PP_PUBLISHED_ISO,
  },
  twitter: {
    card: "summary_large_image",
    title: PP_META.title,
    description: PP_META.description,
    images: [{ url: imageUrl, alt: PP_META.imageAlt }],
  },
};

const appStore = APP_STORES.listings.find((store) => store.id === "app-store")!;
const googlePlay = APP_STORES.listings.find((store) => store.id === "google-play")!;

const linkClass =
  "font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const h2Class = "font-brand text-2xl tracking-tight text-ink sm:text-3xl";
const pClass = "mt-4 text-sm leading-7 text-muted sm:text-base";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-12 first:mt-0">
      <h2 id={id} className={h2Class}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function PartnerLogo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className="mx-auto aspect-square w-full max-w-44 overflow-hidden rounded-full bg-background shadow-lg ring-4 ring-background">
      <Image
        src={src}
        alt={alt}
        width={352}
        height={352}
        sizes="(min-width: 640px) 176px, 30vw"
        preload
        className={`size-full object-cover ${className}`}
      />
    </div>
  );
}

/** Coded banner: both partner logos on the site's cream card with the hero's soft glows. */
function LogoCard() {
  return (
    <div className="relative mt-8 overflow-hidden rounded-2xl bg-cream px-5 py-10 shadow-md ring-1 ring-border sm:px-10 sm:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-primary-muted blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-20 size-80 rounded-full bg-cream-deep blur-2xl"
      />
      <div className="grain" />

      <div className="relative flex flex-col items-center">
        <p className="inline-flex whitespace-nowrap rounded-full border border-primary/15 bg-background/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur sm:text-xs sm:tracking-[0.18em]">
          Founding Advisory Committee
        </p>

        <div className="mt-8 grid w-full max-w-lg grid-cols-[1fr_auto_1fr] items-center gap-x-3 sm:gap-x-6">
          <PartnerLogo src="/AcornsNest_circular_logo.png" alt="Acorns Nest logo" />
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-full bg-primary-muted text-primary shadow-sm ring-1 ring-primary/15 sm:size-12"
          >
            <X className="size-5 sm:size-6" strokeWidth={2.5} />
          </span>
          <PartnerLogo
            src="/PPCCC_circular_logo.png"
            alt={`${PP_ORG} logo`}
            className="scale-[1.08]"
          />
        </div>
      </div>
    </div>
  );
}

function JsonLd() {
  const orgId = `${siteUrl}/#org`;
  const ppId = `${pageUrl}#point-pleasant`;

  const graph = [
    {
      "@type": "NewsArticle",
      "@id": `${pageUrl}#article`,
      headline: PP_ARTICLE.h1,
      description: PP_META.description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      image: [imageUrl],
      datePublished: PP_PUBLISHED_ISO,
      dateModified: PP_PUBLISHED_ISO,
      inLanguage: "en-CA",
      author: { "@type": "Organization", "@id": orgId, name: "Acorns Nest Inc." },
      publisher: {
        "@type": "Organization",
        "@id": orgId,
        name: "Acorns Nest Inc.",
        logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
      },
      about: [{ "@id": ppId }, { "@id": orgId }],
      mentions: [{ "@id": ppId }],
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
    // This page does not render the homepage graph, so define the nodes it references.
    {
      "@type": "Organization",
      "@id": orgId,
      name: "Acorns Nest Inc.",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Acorns Nest",
      url: `${siteUrl}/`,
      publisher: { "@id": orgId },
    },
    {
      "@type": "ChildCare",
      "@id": ppId,
      name: PP_ORG,
      address: { "@type": "PostalAddress", addressLocality: "Halifax", addressRegion: "NS" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "News" },
        { "@type": "ListItem", position: 3, name: PP_ARTICLE.h1, item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: PP_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject here.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

export default function PointPleasantAnnouncementPage() {
  const a = PP_ARTICLE;

  return (
    <main className="pt-14 sm:pt-[72px]">
      <JsonLd />
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-20">
        <header>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-foreground sm:text-sm">
              <li>
                <Link href="/" className={`${linkClass} ${focusRing}`}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>News</li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">
                {a.h1}
              </li>
            </ol>
          </nav>

          <h1 className="mt-5 font-brand text-[32px] leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {a.h1}
          </h1>
          <p className="mt-4 text-base font-semibold leading-7 text-ink sm:text-lg">
            {a.subhead}
          </p>
          <p className="mt-2 text-sm text-foreground">
            <time dateTime={PP_PUBLISHED_ISO}>{PP_PUBLISHED_LABEL}</time>
          </p>
        </header>

        <LogoCard />

        <div className="mt-8 rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-10">
          <p className="text-sm leading-7 text-foreground sm:text-base">
            {a.leadBefore}
            <time dateTime={PP_PUBLISHED_ISO}>{PP_PUBLISHED_LABEL}</time>
            {a.leadAfter}
          </p>
          <p className={pClass}>
            <Link href="/about" className={`${linkClass} ${focusRing}`}>
              Acorns Nest
            </Link>{" "}
            is a childcare management app for daycare directors, available on the{" "}
            <a
              href={appStore.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} ${focusRing}`}
            >
              App Store
            </a>{" "}
            and{" "}
            <a
              href={googlePlay.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} ${focusRing}`}
            >
              Google Play
            </a>
            .
          </p>
          {a.intro.map((paragraph) => (
            <p key={paragraph} className={pClass}>
              {paragraph}
            </p>
          ))}

          <div className="mt-12">
            <Section id="committee" title={a.committee.title}>
              {a.committee.body.map((paragraph) => (
                <p key={paragraph} className={pClass}>
                  {paragraph}
                </p>
              ))}
            </Section>

            <Section id="both-sides" title={a.bothSides.title}>
              <p className={pClass}>{a.bothSides.intro}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {a.bothSides.cards.map((card) => (
                  <p
                    key={card.lead}
                    className="rounded-2xl border border-border bg-background p-5 text-sm leading-7 text-muted shadow-sm sm:text-base"
                  >
                    <strong className="font-semibold text-ink">{card.lead}</strong>{" "}
                    {card.body}
                  </p>
                ))}
              </div>
              <p className={`${pClass} mt-6`}>{a.bothSides.outro}</p>
            </Section>

            <Section id="why-it-matters" title={a.why.title}>
              <p className={pClass}>{a.why.intro}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted marker:text-primary sm:text-base">
                {a.why.bullets.map((bullet) => (
                  <li key={bullet} className="pl-1">
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className={pClass}>{a.why.outro}</p>
              <div className="mt-6">
                <Testimonial quote={PP_QUOTES.director} role="Director" organization={PP_ORG} />
              </div>
            </Section>

            <Section id="why-point-pleasant" title={a.whyPp.title}>
              <p className={pClass}>{a.whyPp.body}</p>
              <div className="mt-6">
                <Testimonial quote={PP_QUOTES.educator} role="Educator" organization={PP_ORG} />
              </div>
            </Section>

            <Section id="directors-everywhere" title={a.everywhere.title}>
              <p className={pClass}>{a.everywhere.body}</p>
            </Section>

            <Section id="made-in-halifax" title={a.halifax.title}>
              <p className={pClass}>
                {a.halifax.before}
                <Link href={a.halifax.linkHref} className={`${linkClass} ${focusRing}`}>
                  {a.halifax.linkText}
                </Link>
                {a.halifax.after}
              </p>
            </Section>
          </div>
        </div>

        <Reveal>
          <section
            aria-labelledby="become-a-pilot-centre"
            className="mt-10 rounded-2xl bg-primary-muted p-6 sm:p-10"
          >
            <h2 id="become-a-pilot-centre" className={h2Class}>
              {a.pilot.title}
            </h2>
            {a.pilot.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm leading-7 text-ink sm:text-base">
                {paragraph}
              </p>
            ))}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={a.pilot.primaryCta.href}
                scroll={false}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-hover sm:w-auto ${focusRing}`}
              >
                {a.pilot.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href={a.pilot.secondaryCta.href}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-background px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-muted sm:w-auto ${focusRing}`}
              >
                {a.pilot.secondaryCta.label}
              </Link>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            aria-labelledby="faq"
            className="mt-10 rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-10"
          >
            <h2 id="faq" className={h2Class}>
              Frequently asked questions
            </h2>
            <div className="mt-4 divide-y divide-border">
              {PP_FAQ.map((item) => (
                <div key={item.question} className="py-5 last:pb-0">
                  <h3 className="text-base font-semibold text-ink">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted sm:text-base">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <hr className="mt-12 border-border" />
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-brand text-xl tracking-tight text-ink">{a.closing.line}</p>
          <Link
            href={a.closing.cta.href}
            scroll={false}
            className={`inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline ${focusRing}`}
          >
            {a.closing.cta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </main>
  );
}
