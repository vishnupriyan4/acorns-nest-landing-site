"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Count-up animation that is SSR-safe.
 *
 * Starts at `target` so the server-rendered HTML (and the first client paint)
 * contains the real number — not "0". This is important for SEO and for
 * AI crawlers (GPTBot, PerplexityBot, Google-Extended), which fetch HTML
 * without executing the IntersectionObserver that triggers the animation.
 *
 * On the client, when `active` first flips to true, we drop to 0 and animate
 * up to the target. Users who prefer reduced motion see the final value only.
 */
export function useCountUp(target: number, active: boolean, duration = 1100) {
  const [value, setValue] = useState(target);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!active || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || target === 0) {
      // Initial state is already `target`, so no animation and no re-render.
      return;
    }

    // The first rAF tick sets value to 0 (progress = 0 → value = 0), which
    // kicks off the count-up. We intentionally don't setState inside the
    // effect body — only inside the rAF callback — so hydration and the
    // first client paint keep the SSR value.
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, target]);

  return value;
}
