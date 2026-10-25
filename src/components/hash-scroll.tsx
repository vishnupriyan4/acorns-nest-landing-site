"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import {
  hashFromAnchorHref,
  scrollToHashWithRetries,
} from "@/lib/scroll-to-hash";

/**
 * Keeps in-page and cross-page hash links working with Next.js App Router.
 * Same-route <Link href="/#walkthrough"> often skips hashchange; we catch
 * clicks on the homepage and re-scroll after layout (lazy videos shift targets).
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash;
    if (!hash) return;

    return scrollToHashWithRetries(hash);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const onHashChange = () => scrollToHashWithRetries(window.location.hash);

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (pathname !== "/") return;

      const anchor = (event.target as HTMLElement | null)?.closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const hash = hashFromAnchorHref(href);
      if (!hash) return;

      if (!href.startsWith("#") && !href.startsWith("/#")) return;

      event.preventDefault();
      window.history.pushState(null, "", href.startsWith("/#") ? href : hash);
      scrollToHashWithRetries(hash);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return null;
}
