"use client";

import { ProductMock } from "@/components/mocks/product-mocks";
import { BrowserFrame, PhoneFrame } from "@/components/ui/device-frames";
import { Reveal } from "@/components/ui/reveal";
import { ScreenshotSlot } from "@/components/ui/screenshot-slot";
import { SCREENSHOTS } from "@/lib/content";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-background/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Screens
          </p>
          <h2 className="mt-3 max-w-xl font-brand text-3xl tracking-tight text-ink sm:text-4xl">
            Drop real captures when you&apos;re ready.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            Each frame looks for a PNG in{" "}
            <code className="rounded bg-primary-muted px-1.5 py-0.5 text-primary">
              public/screenshots
            </code>
            . Until then, branded placeholders stand in for the admin UI and
            mobile app.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {SCREENSHOTS.map((shot, i) => (
            <Reveal key={shot.id} delayMs={i * 70}>
              <figure>
                {shot.kind === "mobile" ? (
                  <div className="flex justify-center rounded-xl border border-border bg-cream px-6 py-8">
                    <PhoneFrame>
                      <ScreenshotSlot
                        src={shot.src}
                        alt={shot.caption}
                        label={`${shot.id}.png`}
                        fallback={<ProductMock kind={shot.mock} />}
                      />
                    </PhoneFrame>
                  </div>
                ) : (
                  <BrowserFrame>
                    <ScreenshotSlot
                      src={shot.src}
                      alt={shot.caption}
                      label={`${shot.id}.png`}
                      fallback={<ProductMock kind={shot.mock} />}
                    />
                  </BrowserFrame>
                )}
                <figcaption className="mt-3 px-1">
                  <p className="text-sm font-semibold text-foreground">{shot.label}</p>
                  <p className="text-sm text-muted">{shot.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
