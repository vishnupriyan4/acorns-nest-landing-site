"use client";

import { useState } from "react";

import { ProductMock } from "@/components/mocks/product-mocks";
import { Reveal } from "@/components/ui/reveal";
import { BrowserFrame, PhoneFrame } from "@/components/ui/device-frames";
import { ScreenshotSlot } from "@/components/ui/screenshot-slot";
import { PRODUCT_VIEWS } from "@/lib/content";

export function ProductShowcase() {
  const [active, setActive] = useState<(typeof PRODUCT_VIEWS)[number]["id"]>(
    "director",
  );
  const view = PRODUCT_VIEWS.find((item) => item.id === active) ?? PRODUCT_VIEWS[0];
  const isMobile = view.screenshot.kind === "mobile";

  return (
    <section id="product" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Product
          </p>
          <h2 className="mt-3 max-w-2xl font-brand text-3xl tracking-tight text-ink sm:text-4xl">
            Two surfaces. One source of truth.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            Directors work a wide admin canvas. Teachers and parents live in a
            mobile-first nest. Swap a screenshot in{" "}
            <code className="rounded bg-primary-muted px-1.5 py-0.5 text-sm text-primary">
              /public/screenshots
            </code>{" "}
            and the frame updates.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {PRODUCT_VIEWS.map((item) => {
            const selected = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-background text-muted hover:border-primary/30 hover:text-primary"
                }`}
                aria-pressed={selected}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {view.eyebrow}
            </p>
            <h3 className="mt-2 font-brand text-2xl tracking-tight text-ink">
              {view.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">{view.body}</p>
            <ul className="mt-6 space-y-3">
              {view.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 text-sm text-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={80} className="min-h-[320px]">
            {isMobile ? (
              <PhoneFrame tilt>
                <ScreenshotSlot
                  src={view.screenshot.src}
                  alt={view.screenshot.caption}
                  label={`${view.screenshot.id}.png`}
                  fallback={<ProductMock kind={view.screenshot.mock} />}
                />
              </PhoneFrame>
            ) : (
              <BrowserFrame tilt>
                <ScreenshotSlot
                  src={view.screenshot.src}
                  alt={view.screenshot.caption}
                  label={`${view.screenshot.id}.png`}
                  fallback={<ProductMock kind={view.screenshot.mock} />}
                />
              </BrowserFrame>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
