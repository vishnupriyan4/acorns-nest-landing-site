import { ExternalLink } from "lucide-react";

import { BOOKING } from "@/lib/content";

/**
 * Google appointment schedule embed. Slots come live from the owner's Google
 * Calendar, and bookings land there too. Google's page can't be restyled, so
 * it sits in a white card that matches the rest of the site.
 */
export function BookingCalendar({ height = 720 }: { height?: number }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
      <iframe
        src={BOOKING.embedUrl}
        title="Book an Acorns Nest walkthrough"
        loading="lazy"
        style={{ height }}
        className="block w-full border-0"
      />
      <div className="flex items-center justify-between gap-3 border-t border-border bg-background px-4 py-2.5 text-xs text-muted">
        <span>Times shown in your local time zone.</span>
        <a
          href={BOOKING.shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
        >
          Open in new tab <ExternalLink className="size-3" />
        </a>
      </div>
    </div>
  );
}
