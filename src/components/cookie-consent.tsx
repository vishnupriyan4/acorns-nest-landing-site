"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";

import {
  OPEN_COOKIE_SETTINGS_EVENT,
  analyticsReleaseEnabled,
  readConsent,
  subscribeConsent,
  trackCurrentPage,
  withdrawAnalytics,
  writeConsent,
  type ConsentChoice,
} from "@/lib/analytics";

const choiceButtonClass =
  "inline-flex h-11 w-full items-center justify-center rounded-lg border border-ink bg-background px-4 text-sm font-semibold text-ink transition hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

function PageViewTracker() {
  const pathname = usePathname();
  const query = useSearchParams().toString();

  useEffect(() => {
    trackCurrentPage();
  }, [pathname, query]);

  return null;
}

export function CookieConsent() {
  if (!analyticsReleaseEnabled()) return null;
  return (
    <>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      <CookieBanner />
    </>
  );
}

function CookieBanner() {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const choice = useSyncExternalStore(subscribeConsent, readConsent, serverConsent);
  const [forcedOpen, setForcedOpen] = useState(false);
  const visible = forcedOpen || choice === null;

  useEffect(() => {
    const open = () => {
      document.documentElement.removeAttribute("data-analytics-consent");
      setForcedOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const alreadyChose = document.documentElement.getAttribute("data-analytics-consent") === "chosen";
    if (choice === null && alreadyChose) return;
    dialogRef.current?.focus({ preventScroll: true });
  }, [visible, choice]);

  useEffect(() => {
    if (!visible || choice === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setForcedOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, choice]);

  if (!visible) return null;

  function choose(next: ConsentChoice) {
    const previous = readConsent();
    writeConsent(next);
    setForcedOpen(false);
    if (next === "accepted") {
      trackCurrentPage();
      return;
    }
    withdrawAnalytics();
    if (previous === "accepted") {
      window.location.reload();
    }
  }

  return (
    <div
      ref={dialogRef}
      id="cookie-consent-banner"
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      tabIndex={-1}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background shadow-lg outline-none print:hidden"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8 sm:py-5 md:flex-row md:items-center md:justify-between">
        <p id={titleId} className="text-sm leading-6 text-ink">
          We use Google Analytics to see how people find and use our website. It only turns on if
          you say yes.{" "}
          <Link
            href="/privacy"
            className="font-semibold text-primary underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="grid shrink-0 grid-cols-2 gap-2 sm:w-72">
          <button type="button" className={choiceButtonClass} onClick={() => choose("accepted")}>
            Accept
          </button>
          <button type="button" className={choiceButtonClass} onClick={() => choose("declined")}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

function serverConsent(): ConsentChoice | null {
  return null;
}
