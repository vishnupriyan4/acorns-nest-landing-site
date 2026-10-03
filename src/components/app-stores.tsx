import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { APP_STORES } from "@/lib/content";

export function AppStores() {
  return (
    <section id="get-the-app" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {APP_STORES.kicker}
            </p>
            <h2 className="mt-3 font-brand text-3xl tracking-tight text-ink sm:text-4xl">
              {APP_STORES.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{APP_STORES.body}</p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {APP_STORES.listings.map((store, index) => (
            <Reveal key={store.id} delayMs={index * 80}>
              <article className="flex h-full flex-col items-center rounded-2xl border border-border bg-background p-6 text-center shadow-md sm:p-8">
                <a
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={store.qrAlt}
                  className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-border outline-none transition hover:ring-primary/35 focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Image
                    src={store.qrSrc}
                    alt=""
                    width={176}
                    height={176}
                    className="size-40 sm:size-44"
                  />
                </a>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {store.platform}
                </p>
                <h3 className="mt-2 font-brand text-2xl tracking-tight text-ink">
                  {store.name}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
                  Scan the code with your camera, or tap the badge.
                </p>
                <a
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 rounded-lg outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Image
                    src={store.badgeSrc}
                    alt={store.badgeAlt}
                    width={store.badgeWidth}
                    height={store.badgeHeight}
                    unoptimized={store.badgeSrc.endsWith(".svg")}
                    style={{ width: store.badgeWidth, height: store.badgeHeight }}
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
