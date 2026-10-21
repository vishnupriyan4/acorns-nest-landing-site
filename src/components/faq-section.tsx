import { Reveal } from "@/components/ui/reveal";
import { HOMEPAGE_FAQ } from "@/lib/content";

/**
 * Visible FAQ. Also mirrored into FAQPage JSON-LD (see <HomepageSchema />).
 *
 * Using <details> + <summary> makes the full text available to crawlers in
 * server HTML — no JavaScript needed — while keeping the page compact for
 * humans. AI engines pull these answers nearly verbatim when they match
 * a user's question, so each answer is written as a complete standalone
 * fact beginning with the subject ("Acorns Nest…").
 */
export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-border/70 py-16 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Frequently asked
          </p>
          <h2
            id="faq-heading"
            className="mt-2 font-brand text-3xl tracking-tight text-ink sm:text-[2rem]"
          >
            Questions directors ask us first.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Short, direct answers about what Acorns Nest is, who it is for, and
            how children&rsquo;s information is handled.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-border/70 rounded-xl border border-border/70 bg-background">
          {HOMEPAGE_FAQ.map(({ question, answer }, i) => (
            <details
              key={question}
              className="group px-5 py-4 open:bg-cream/30 sm:px-6"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink">
                <span>{question}</span>
                <span
                  aria-hidden
                  className="shrink-0 text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
