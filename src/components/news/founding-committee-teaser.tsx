import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Testimonial } from "@/components/news/testimonial";
import { Reveal } from "@/components/ui/reveal";
import { PP_HOME, PP_ORG, PP_PATH, PP_QUOTES } from "@/lib/news/point-pleasant";

/**
 * Homepage teaser, placed directly above #walkthrough.
 * Desktop: text and button left, quote right. Mobile: text, quote, button.
 */
export function FoundingCommitteeTeaser() {
  return (
    <section
      id="founding-advisory-committee"
      aria-labelledby="founding-advisory-committee-heading"
      className="scroll-mt-24 py-16 sm:py-24"
    >
      <Reveal className="mx-auto grid max-w-6xl items-start gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-x-12">
        <div>
          <h2
            id="founding-advisory-committee-heading"
            className="font-brand text-3xl tracking-tight text-ink sm:text-[2rem]"
          >
            {PP_HOME.teaserTitle}
          </h2>
          <p className="mt-3 text-sm leading-6 text-foreground sm:text-base sm:leading-7">
            {PP_HOME.teaserBody}
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Testimonial
            variant="compact"
            quote={PP_QUOTES.director}
            role="Director"
            organization={PP_ORG}
          />
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <Link
            href={PP_PATH}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {PP_HOME.readLink}
            <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
