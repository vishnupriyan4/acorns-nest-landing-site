import { MARQUEE_ITEMS } from "@/lib/content";

export function CapabilityMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section aria-label="Capabilities" className="border-y border-border/70 bg-background/50 py-4">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-3 pr-3">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-1.5 text-sm text-foreground"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
