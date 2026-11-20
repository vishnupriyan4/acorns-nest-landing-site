import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";

const description =
  "Run a daycare from your home? Acorns Nest is free for the first 20 eligible home daycares: attendance, naps, meals, menus and messages, on phone and web.";

const faqs = [
  {
    question: "Who qualifies for the home daycare offer?",
    answer:
      "This offer is for people who run a daycare from their own home, where the law allows. We decide who's eligible. Tell us about your daycare and we'll let you know when your account is ready.",
  },
  {
    question: 'What does "free for the first 20" mean?',
    answer:
      "The offer is open to the first 20 eligible home daycares we set up after a walkthrough. We decide who's eligible and the order of sign-up. If you already have a free account, it stays free unless we give you 2 months' notice. After 20 accounts are set up, new home daycares may be offered a paid plan instead.",
  },
  {
    question: "What happens after I join?",
    answer:
      "We set up your daycare with you during the walkthrough. You add your children, invite families by email with a code, and choose when families see the day. If you need help, write to support@acornsnest.com and we'll reply within one business day.",
  },
  {
    question: "Can the offer change or end?",
    answer:
      "Yes, but not without warning. We'll give you at least 2 months' notice before we change or end this offer, or move you to a paid plan. If your free account ends, you can export your data.",
  },
  {
    question: "Does using Acorns Nest change my daycare's status?",
    answer:
      "No. You're still responsible for following the childcare rules that apply to you. Acorns Nest helps you keep records and talk with families; it doesn't license, approve, endorse or check your daycare.",
  },
] as const;

const included = [
  {
    title: "Check-in and check-out",
    body: "Mark children in and out, with Mid-day Exit and Return for appointments. Pick the time, or save on the current time. Parents never sign children in or out.",
  },
  {
    title: "Naps",
    body: "Start and end naps, more than one a day, or add one after the fact.",
  },
  {
    title: "Meals and milk feeds",
    body: "Log how much of breakfast, lunch and evening snack was eaten, and milk feeds in ounces or millilitres.",
  },
  {
    title: "Diaper checks",
    body: "Wet, dry or bowel, with a note if you need one.",
  },
  {
    title: "Fix a wrong save",
    body: "Undo it, or correct it later.",
  },
  {
    title: "Weekly menus",
    body: "Plan breakfast, lunch and evening snack for Monday to Friday, keep up to four saved weeks, and families see today's menu.",
  },
  {
    title: "Messages to families",
    body: "Write to every family at once, or privately to one family, with photos or PDFs.",
  },
  {
    title: "The day, when you choose",
    body: "Families see the day's care record as you log it, or all at once at a time you set (6 p.m. unless you change it).",
  },
  {
    title: "Outing alerts",
    body: "Heading to the park? Families of the children with you can be told where you went and when you're back. You choose whether that's on by default.",
  },
  {
    title: "You choose which photos families see",
    body: "If someone helps you, their posts with photos wait for your OK before families see them. You can turn that off. Your own posts go out when you send them.",
  },
  {
    title: "Planned absences",
    body: "Families can tell you ahead of time when their child will be away.",
  },
  {
    title: "Notes that stay with you",
    body: "Keep notes and photos about the day that families never see, unless you put them in a newsletter.",
  },
  {
    title: "A newsletter for families",
    body: "Build a newsletter from your notes and photos, review it, then share it with families.",
  },
  {
    title: "A nutrition summary for parents",
    body: "A short summary of their child's eating once enough meals are logged.",
  },
  {
    title: "Attendance reports",
    body: "Look back over any dates up to a year and download a spreadsheet.",
  },
  {
    title: "A director view on the web and on your phone",
    body: "Set up your daycare on the director website, and see the day, messages and menus on your phone. You can also switch into the room view to log.",
  },
  {
    title: "Billing",
    body: "Billing is part of your setup. You can keep your own payment records, or take card and bank payments through Stripe. Keeping your own payment records is free. If you choose to take card or bank payments through Stripe, Stripe's processing fees and any platform fee apply, and we'll tell you what they are before you turn it on.",
  },
] as const;

export const metadata: Metadata = {
  title: {
    absolute: "Home Daycare App, Free for the First 20 Eligible | Acorns Nest",
  },
  description,
  alternates: { canonical: "/home-daycare" },
  openGraph: {
    title: "Free for the first 20 eligible home daycares | Acorns Nest",
    description,
    url: "/home-daycare",
    type: "website",
  },
};

export default function HomeDaycarePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://acornsnest.com";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        url: `${siteUrl}/home-daycare`,
        name: "A home daycare app, free for the first 20.",
        description,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Home daycare",
            item: `${siteUrl}/home-daycare`,
          },
        ],
      },
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "CAD",
        url: `${siteUrl}/home-daycare`,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main className="pt-14 sm:pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <h1 className="font-brand text-[32px] leading-[1.1] tracking-tight text-ink sm:text-5xl">
            A home daycare app, free for the first 20.
          </h1>
          <p className="mt-4 text-base font-semibold leading-7 text-ink">
            For the first 20 eligible home daycares. Some features may differ. We give at least 2
            months&apos; notice before the offer changes.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Log attendance, meals, milk feeds, diapers and naps once. Families see the day when you
            choose, and your notes stay with you.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Acorns Nest Inc. makes a daycare app for people who care for children in Canada. If you
            run a daycare from your home, it&apos;s free for the first 20 eligible home daycares we
            set up after a walkthrough. Log the day once, keep families in the loop, and keep your
            records in one place.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#walkthrough"
              scroll={false}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-hover"
            >
              Book a walkthrough
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              See how pricing works
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={40}>
          <section className="mt-14">
            <h2 className="font-brand text-2xl tracking-tight text-ink sm:text-3xl">
              Who the home daycare offer is for
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              This offer is for people who run a daycare from their own home, where the law allows.
              We decide who&apos;s eligible.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              If you care for children in your own home and want one place for the day&apos;s
              records and your messages to families, tell us about your daycare.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground sm:text-base">
              You&apos;re still responsible for following the childcare rules that apply to you.
              Acorns Nest helps you keep records and talk with families; it doesn&apos;t license,
              approve, endorse or check your daycare.
            </p>
          </section>
        </Reveal>

        <Reveal delayMs={60}>
          <section className="mt-14">
            <h2 className="font-brand text-2xl tracking-tight text-ink sm:text-3xl">
              What&apos;s included
            </h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-ink sm:text-base">
              Some features may differ.
            </p>
            <ul className="mt-6 space-y-5">
              {included.map((item) => (
                <li key={item.title}>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted sm:text-base">{item.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delayMs={80}>
          <section className="mt-14">
            <h2 className="font-brand text-2xl tracking-tight text-ink sm:text-3xl">How to join</h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              There&apos;s no direct sign-up. Every home daycare starts with a walkthrough. Book
              one, and we&apos;ll set up your daycare with you.
            </p>
            <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm leading-7 text-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">Tell us about your daycare.</span> Pick a
                time on the Book a walkthrough calendar, or send a request with your name, your daycare&apos;s name and your email.
              </li>
              <li>
                <span className="font-semibold text-ink">We walk you through the app.</span>{" "}
                We&apos;ll show you the app using a day like yours, then set up your daycare. You
                don&apos;t need a code.
              </li>
              <li>
                <span className="font-semibold text-ink">Get the app.</span> We create your login
                with you during the walkthrough. Install the app from the App Store or Google Play
                and sign in.
              </li>
              <li>
                <span className="font-semibold text-ink">Invite your families.</span> Add your
                children, then invite each family by email. They get a code, enter it at
                acornsnest.com/accept-invite, and install the app.
              </li>
            </ol>
          </section>
        </Reveal>

        <Reveal delayMs={100}>
          <section className="mt-14">
            <h2 className="font-brand text-2xl tracking-tight text-ink sm:text-3xl">
              What happens after you join
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-muted sm:text-base">
              <li>Your account stays free unless we give you 2 months&apos; notice.</li>
              <li>
                We&apos;ll give you at least 2 months&apos; notice before we change or end this
                offer, or move you to a paid plan. If your free account ends, you can export your
                data.
              </li>
              <li>
                Write to support@acornsnest.com, Monday to Friday, 9 a.m. to 5 p.m. Atlantic Time.
                We reply within one business day.
              </li>
              <li>
                Acorns Nest is free for the first 20 eligible home daycares we set up after a
                walkthrough. After that, new home daycares may be offered a paid plan instead.
              </li>
            </ul>
            <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
              <Link href="/support" className="text-primary underline-offset-4 hover:underline">
                Support
              </Link>
              <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                Privacy
              </Link>
              <Link href="/pricing" className="text-primary underline-offset-4 hover:underline">
                Pricing
              </Link>
              <a
                href="https://apps.apple.com/ca/app/acorns-nest/id6806698503"
                className="text-primary underline-offset-4 hover:underline"
              >
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.acornsnest.app"
                className="text-primary underline-offset-4 hover:underline"
              >
                Google Play
              </a>
            </p>
          </section>
        </Reveal>

        <Reveal delayMs={120}>
          <section className="mt-14">
            <h2 className="font-brand text-2xl tracking-tight text-ink sm:text-3xl">
              Questions about the home daycare offer
            </h2>
            <div className="mt-6 divide-y divide-border/70 rounded-xl border border-border/70 bg-background">
              {faqs.map((item) => (
                <details key={item.question} className="group px-5 py-4 sm:px-6">
                  <summary className="cursor-pointer list-none text-base font-semibold text-ink">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
