import type { Metadata } from "next";
import Link from "next/link";

import { BookingCalendar } from "@/components/booking-calendar";
import { Reveal } from "@/components/ui/reveal";
import { BOOKING } from "@/lib/content";

const description =
  "Book a live walkthrough of Acorns Nest. Pick an open time on our calendar and we'll show you the director dashboard, Bulk Log and parent app using a day like yours.";

export const metadata: Metadata = {
  title: "Book a walkthrough",
  description,
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book a walkthrough | Acorns Nest",
    description,
    url: "/book",
    type: "website",
  },
};

export default function BookPage() {
  return (
    <main className="pt-14 sm:pt-[72px]">
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {BOOKING.pageKicker}
          </p>
          <h1 className="mt-3 max-w-2xl font-brand text-[32px] leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {BOOKING.pageTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            {BOOKING.pageBody}
          </p>
        </Reveal>

        <Reveal delayMs={60}>
          <div className="mt-10">
            <BookingCalendar height={800} />
          </div>
          <p className="mt-4 text-center text-sm text-muted">
            {BOOKING.fallbackPrompt}{" "}
            <Link href="/#walkthrough" className="font-semibold text-primary hover:underline">
              {BOOKING.fallbackCta}
            </Link>
          </p>
        </Reveal>
      </div>
    </main>
  );
}
