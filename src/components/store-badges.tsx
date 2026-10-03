import Image from "next/image";

import { APP_STORES } from "@/lib/content";

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-1 ${className}`}>
      {APP_STORES.listings.map((store) => (
        <a
          key={store.id}
          href={store.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Image
            src={store.badgeSrc}
            alt={store.badgeAlt}
            width={store.badgeWidth}
            height={store.badgeHeight}
            unoptimized={store.badgeSrc.endsWith(".svg")}
            className="h-auto"
            style={{ width: store.badgeWidth, height: store.badgeHeight }}
          />
        </a>
      ))}
    </div>
  );
}
