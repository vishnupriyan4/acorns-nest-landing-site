import { BrowserFrame, PhoneFrame } from "@/components/ui/device-frames";
import { ProductScreenshot } from "@/components/ui/product-screenshot";
import { Reveal } from "@/components/ui/reveal";
import { STORY_SECTIONS } from "@/lib/content";

type StorySectionsProps = {
  shots: Record<string, string | null>;
};

export function StorySections({ shots }: StorySectionsProps) {
  return (
    <div id="product" className="scroll-mt-24">
      {STORY_SECTIONS.map((section, index) => {
        const src = shots[section.screenshot.stem] ?? null;
        const mobile = section.screenshot.kind === "mobile";
        const flip = index % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 py-16 sm:py-24 ${
              flip ? "bg-background/40" : ""
            }`}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
              <Reveal className={flip ? "lg:order-2" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {section.kicker}
                </p>
                <p className="mt-2 text-sm font-medium text-muted">{section.topic}</p>
                <h2 className="mt-2 font-brand text-3xl tracking-tight text-ink sm:text-[2rem]">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                  {section.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delayMs={80} className={flip ? "lg:order-1" : ""}>
                {mobile ? (
                  <div className="flex justify-center">
                    <PhoneFrame tilt>
                      <ProductScreenshot
                        src={src}
                        alt={section.title}
                        hint={section.screenshot.hint}
                        capture={section.screenshot.capture}
                      />
                    </PhoneFrame>
                  </div>
                ) : (
                  <BrowserFrame tilt>
                    <ProductScreenshot
                      src={src}
                      alt={section.title}
                      hint={section.screenshot.hint}
                      capture={section.screenshot.capture}
                    />
                  </BrowserFrame>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}
    </div>
  );
}
