"use client";

import { analyticsReleaseEnabled, openCookieSettings } from "@/lib/analytics";

export function CookieSettingsLink() {
  if (!analyticsReleaseEnabled()) return null;

  return (
    <button
      type="button"
      onClick={openCookieSettings}
      aria-haspopup="dialog"
      aria-controls="cookie-consent-banner"
      className="cursor-pointer font-medium transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      Cookie settings
    </button>
  );
}
