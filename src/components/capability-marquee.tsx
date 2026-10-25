import Link from "next/link";

import { MARQUEE_ITEMS } from "@/lib/content";

export function CapabilityMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section aria-label="Capabilities" className="border-y border-border/70 bg-background/50 py-4">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-3 pr-3">
          {items.map((item, i) => {
            const chipClass =
              "inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-1.5 text-sm text-foreground";
            if (item === "AI Insights") {
              return (
                <Link
                  key={`${item}-${i}`}
                  href="/#ai"
                  scroll={false}
                  className={`${chipClass} font-medium text-primary hover:bg-primary-muted`}
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  {item}
                </Link>
              );
            }
            return (
              <span key={`${item}-${i}`} className={chipClass}>
                <span className="size-1.5 rounded-full bg-primary" />
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
