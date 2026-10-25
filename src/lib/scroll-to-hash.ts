/** Fixed header (~72px) plus breathing room below it. */
export const HASH_SCROLL_OFFSET_PX = 88;

const HASH_ALIASES: Record<string, string> = {
  demo: "walkthrough",
};

export function resolveHashId(hash: string): string | null {
  const raw = hash.replace(/^#/, "").trim();
  if (!raw) return null;
  return HASH_ALIASES[raw] ?? raw;
}

export function scrollToHashElement(
  hash: string,
  behavior: ScrollBehavior = "smooth",
): boolean {
  const id = resolveHashId(hash);
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  const top =
    el.getBoundingClientRect().top + window.scrollY - HASH_SCROLL_OFFSET_PX;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

/** Walkthrough form sits late on the page; lazy media can shift layout after first scroll. */
export function scrollToHashWithRetries(
  hash: string,
  delaysMs = [0, 80, 200, 450, 900, 1600],
) {
  const run = () => scrollToHashElement(hash, "smooth");
  run();
  const timers = delaysMs.slice(1).map((ms) => window.setTimeout(run, ms));
  return () => timers.forEach(clearTimeout);
}

export function hashFromAnchorHref(href: string): string | null {
  if (href.startsWith("#")) return href;
  const idx = href.indexOf("#");
  if (idx === -1) return null;
  const path = href.slice(0, idx) || "/";
  if (path !== "/" && path !== "") return null;
  return href.slice(idx);
}
