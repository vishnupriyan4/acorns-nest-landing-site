import { Clock, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { StoreBadges } from "@/components/store-badges";
import { SupportForm } from "@/components/support/support-form";
import { Reveal } from "@/components/ui/reveal";
import { SUPPORT } from "@/lib/content";

const description =
  "Get help with Acorns Nest: invitations and sign-in, notifications, care records, privacy requests, and account deletion. Contact support@acornsnest.com.";

export const metadata: Metadata = {
  title: "Support",
  description,
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support | Acorns Nest",
    description,
    url: "/support",
    type: "website",
  },
};

export default function SupportPage() {
  const { contact, start, faqs } = SUPPORT;

  return (
    <main className="pt-14 sm:pt-[72px]">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {SUPPORT.kicker}
          </p>
          <h1 className="mt-3 max-w-2xl font-brand text-[32px] leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {SUPPORT.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            {SUPPORT.intro}
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Install the app
          </p>
          <StoreBadges className="mt-3" />
        </Reveal>

        <Reveal delayMs={60}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <Mail className="size-5 text-primary" />
              <h2 className="mt-3 text-sm font-semibold text-ink">Email us</h2>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1 block break-words text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                {contact.email}
              </a>
              <p className="mt-2 text-sm leading-6 text-muted">{contact.reply}</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <Clock className="size-5 text-primary" />
              <h2 className="mt-3 text-sm font-semibold text-ink">Support hours</h2>
              <p className="mt-1 text-sm leading-6 text-muted">{contact.hours}</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <MapPin className="size-5 text-primary" />
              <h2 className="mt-3 text-sm font-semibold text-ink">Mailing address</h2>
              <address className="mt-1 text-sm not-italic leading-6 text-muted">
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <section className="mt-16">
            <h2 className="font-brand text-2xl tracking-tight text-ink sm:text-3xl">
              {start.title}
            </h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-3">
              {start.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                >
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary-muted text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal delayMs={80}>
          <section className="mt-16">
            <h2 className="font-brand text-2xl tracking-tight text-ink sm:text-3xl">
              Common questions
            </h2>
            <dl className="mt-6 divide-y divide-border rounded-2xl border border-border bg-background px-6 shadow-sm sm:px-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <dt className="text-base font-semibold text-ink">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-7 text-muted">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>

        <Reveal delayMs={80}>
          <section className="mt-16 max-w-2xl">
            <SupportForm />
          </section>
        </Reveal>

        <Reveal delayMs={80}>
          <p className="mt-12 text-sm leading-7 text-muted">
            For how we handle personal information, see our{" "}
            <Link
              href="/privacy"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Terms of Use
            </Link>
            . Centres looking for a product tour can{" "}
            <Link
              href="/#walkthrough"
              scroll={false}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              book a walkthrough
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </main>
  );
}
