/**
 * GA4 for the public marketing site.
 *
 * Consent mode is "basic": the Google tag is not loaded, and no hit is sent,
 * until the visitor clicks Accept. Decline and "no choice yet" send nothing.
 *
 * The release stays off until both env vars below are set, so this can ship
 * before Privacy Policy v2 is published.
 *
 * /accept-invite is never measured. That URL can contain an email address.
 */

export const CONSENT_COOKIE = "an_consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "acornsnest:open-cookie-settings";
export const CONSENT_CHANGE_EVENT = "acornsnest:consent-change";

const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;
const MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/;
const GA_SCRIPT_ID = "acornsnest-ga";

/** Query keys kept on page_view. Everything else (email, invite codes) is dropped. */
const CAMPAIGN_QUERY_KEYS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "utm_source_platform",
]);

export type ConsentChoice = "accepted" | "declined";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let originalPushState: History["pushState"] | null = null;
let originalReplaceState: History["replaceState"] | null = null;
let gaConfigured = false;
let popstateGuardInstalled = false;
let lastPageViewKey = "";
let lastPageViewAt = 0;
let lastLeadAt = 0;

export function measurementId(): string | null {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
  return MEASUREMENT_ID_PATTERN.test(id) ? id : null;
}

/** True only when Vishnu has turned the release on and supplied a Measurement ID. */
export function analyticsReleaseEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true" && measurementId() !== null;
}

export function isUntrackedPath(pathname: string): boolean {
  return pathname === "/accept-invite" || pathname.startsWith("/accept-invite/");
}

/** Full URL safe to send to GA4, or null when this page must not be measured. */
export function analyticsPageLocation(href: string): string | null {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  if (isUntrackedPath(url.pathname)) return null;

  const kept = new URLSearchParams();
  for (const [key, value] of url.searchParams) {
    if (CAMPAIGN_QUERY_KEYS.has(key.toLowerCase())) {
      kept.append(key, value);
    }
  }
  const search = kept.toString();
  return `${url.origin}${url.pathname}${search ? `?${search}` : ""}`;
}

export function readConsent(): ConsentChoice | null {
  if (typeof document === "undefined") return null;
  const prefix = `${CONSENT_COOKIE}=`;
  for (const part of document.cookie.split("; ")) {
    if (!part.startsWith(prefix)) continue;
    const value = part.slice(prefix.length);
    if (value === "accepted" || value === "declined") return value;
  }
  return null;
}

export function writeConsent(choice: ConsentChoice): void {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${choice}; Max-Age=${CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function subscribeConsent(onChange: () => void): () => void {
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
}

/** Runs before paint so a saved choice can hide the banner in static HTML. */
export function consentBootstrapScript(): string {
  return `(function(){try{var p=document.cookie.split("; ");for(var i=0;i<p.length;i++){if(p[i]==="${CONSENT_COOKIE}=accepted"||p[i]==="${CONSENT_COOKIE}=declined"){document.documentElement.setAttribute("data-analytics-consent","chosen");break;}}}catch(e){}})();`;
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}

function debugEnabled(): boolean {
  return process.env.NEXT_PUBLIC_GA_DEBUG === "true";
}

function setGaDisabled(id: string, disabled: boolean): void {
  (window as unknown as Record<string, boolean>)[`ga-disable-${id}`] = disabled;
}

function ensureGtagStub(): void {
  window.dataLayer = window.dataLayer ?? [];
  if (window.gtag) return;
  window.gtag = function gtag() {
    // gtag.js replays an `arguments` object. A rest array is not replayed.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
}

function rememberHistoryMethods(): void {
  if (!originalPushState) originalPushState = history.pushState.bind(history);
  if (!originalReplaceState) originalReplaceState = history.replaceState.bind(history);
}

function pathFromHistoryUrl(url: string | URL | null | undefined): string {
  if (url == null || url === "") return window.location.pathname;
  try {
    return new URL(String(url), window.location.origin).pathname;
  } catch {
    return window.location.pathname;
  }
}

/**
 * gtag.js patches pushState/replaceState and listens for popstate so it can
 * send its own page views (including raw query strings). Keep our guard
 * outside that patch, and block hits for /accept-invite.
 */
function installHistoryGuard(id: string): void {
  if (!originalPushState || !originalReplaceState) return;

  const guardPush: History["pushState"] = (data, unused, url) => {
    setGaDisabled(id, isUntrackedPath(pathFromHistoryUrl(url)));
    originalPushState!(data, unused, url);
  };
  const guardReplace: History["replaceState"] = (data, unused, url) => {
    setGaDisabled(id, isUntrackedPath(pathFromHistoryUrl(url)));
    originalReplaceState!(data, unused, url);
  };
  history.pushState = guardPush;
  history.replaceState = guardReplace;
}

function installPopstateGuard(id: string): void {
  if (popstateGuardInstalled) return;
  popstateGuardInstalled = true;
  window.addEventListener(
    "popstate",
    () => {
      setGaDisabled(id, isUntrackedPath(window.location.pathname));
    },
    true,
  );
}

function activateAnalytics(id: string): void {
  rememberHistoryMethods();
  installPopstateGuard(id);
  ensureGtagStub();
  if (gaConfigured) return;
  gaConfigured = true;

  // Default denied, then grant analytics only. The script is added after these
  // commands are queued, so nothing is sent before Accept. Ads stay denied.
  window.gtag!("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  window.gtag!("consent", "update", {
    analytics_storage: "granted",
  });
  window.gtag!("set", "allow_google_signals", false);
  window.gtag!("set", "allow_ad_personalization_signals", false);
  window.gtag!("js", new Date());
  window.gtag!("config", id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    // We send page_view ourselves so the URL can be stripped first.
    send_page_view: false,
  });

  const script = document.createElement("script");
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  script.addEventListener("load", () => installHistoryGuard(id));
  document.head.appendChild(script);
}

/** Record the current page after Accept. No-op without consent or on invite links. */
export function trackCurrentPage(): void {
  if (!analyticsReleaseEnabled()) return;
  if (readConsent() !== "accepted") return;
  const id = measurementId();
  if (!id) return;

  const pageLocation = analyticsPageLocation(window.location.href);
  if (!pageLocation) {
    setGaDisabled(id, true);
    return;
  }

  const now = Date.now();
  if (pageLocation === lastPageViewKey && now - lastPageViewAt < 800) return;
  lastPageViewKey = pageLocation;
  lastPageViewAt = now;

  setGaDisabled(id, false);
  activateAnalytics(id);

  const url = new URL(pageLocation);
  window.gtag!("event", "page_view", {
    page_location: pageLocation,
    page_path: `${url.pathname}${url.search}`,
    page_title: document.title,
    ...(debugEnabled() ? { debug_mode: true } : {}),
  });
}

/** Successful walkthrough booking. No form fields are attached. */
export function trackWalkthroughLead(): void {
  if (!analyticsReleaseEnabled()) return;
  if (readConsent() !== "accepted") return;
  const id = measurementId();
  if (!id || isUntrackedPath(window.location.pathname)) return;

  const now = Date.now();
  if (now - lastLeadAt < 1000) return;
  lastLeadAt = now;

  setGaDisabled(id, false);
  activateAnalytics(id);

  const pageLocation = analyticsPageLocation(window.location.href);
  window.gtag!("event", "generate_lead", {
    ...(pageLocation ? { page_location: pageLocation, page_path: new URL(pageLocation).pathname } : {}),
    ...(debugEnabled() ? { debug_mode: true } : {}),
  });
}

function gaCookieNames(): string[] {
  return document.cookie
    .split("; ")
    .map((part) => part.split("=")[0]?.trim() ?? "")
    .filter(
      (name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name.startsWith("_gat"),
    );
}

/** Drop GA cookies on this host and the parent domain. Leaves the consent cookie. */
export function clearGaCookies(): void {
  const names = gaCookieNames();
  if (names.length === 0) return;

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  const host = window.location.hostname;
  const domains = new Set<string>();
  const ip = /^\d+\.\d+\.\d+\.\d+$/.test(host);
  if (host && host !== "localhost" && !ip) {
    domains.add(host);
    domains.add(`.${host}`);
    const labels = host.split(".");
    if (labels.length >= 2) domains.add(`.${labels.slice(-2).join(".")}`);
  }

  for (const name of names) {
    const base = `${name}=; Max-Age=0; Path=/${secure}`;
    document.cookie = base;
    for (const domain of domains) {
      document.cookie = `${base}; Domain=${domain}`;
    }
  }
}

/** Stop any tag already on the page and erase GA cookies. */
export function withdrawAnalytics(): void {
  const id = measurementId();
  if (id) setGaDisabled(id, true);
  clearGaCookies();
}
