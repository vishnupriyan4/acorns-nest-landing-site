"use client";

import { ImageOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ProductScreenshotProps = {
  src: string | null;
  alt: string;
  hint: string;
  capture?: string;
  /**
   * When true, the browser is told this image/video is important (hero).
   * Everything else should default to lazy. There should be exactly ONE
   * priority asset above the fold.
   */
  priority?: boolean;
  /**
   * Optional natural dimensions. When set, we reserve space on the page
   * so the browser doesn't shift layout once the asset loads (CLS = 0).
   */
  width?: number;
  height?: number;
};

/**
 * Renders a product screenshot — either as a <video> (preferred) or <img>.
 *
 * When `src` points at a .mp4 or .webm, the component renders a lazy,
 * muted, looping <video>. It also probes for the sibling format and a
 * poster frame so the browser can pick the smallest file (WebM is ~30 %
 * smaller than MP4; Safari only speaks MP4).
 *
 * GIFs are no longer served from the site — they were the single biggest
 * mobile Core Web Vitals offender in the SEO audit (one of ours was 10.7
 * MB). The ffmpeg conversion script (scripts/convert-media.sh) replaces
 * them with .mp4 + .webm siblings.
 *
 * The player:
 *   - lazy-mounts below the fold via IntersectionObserver
 *   - respects prefers-reduced-motion (no autoplay, shows poster frame)
 *   - preloads nothing (preload="none") unless `priority` is set
 */
export function ProductScreenshot({
  src,
  alt,
  hint,
  capture,
  priority = false,
  width,
  height,
}: ProductScreenshotProps) {
  if (!src) {
    return (
      <div className="flex min-h-[160px] flex-col items-center justify-center gap-2 bg-cream px-4 py-10 text-center">
        <ImageOff className="size-5 text-muted" strokeWidth={1.75} />
        <p className="text-sm font-medium text-foreground">{hint}</p>
        <p className="max-w-xs text-xs leading-5 text-muted">
          Drop a PNG, JPG, WebP or MP4 into{" "}
          <code className="rounded bg-primary-muted px-1 py-0.5 text-primary">
            public/screenshots
          </code>
          {capture ? <> — {capture}</> : null}. Any size is fine.
        </p>
      </div>
    );
  }

  const lower = src.toLowerCase();
  const isVideo = lower.endsWith(".mp4") || lower.endsWith(".webm");

  if (isVideo) {
    return (
      <MediaPlayer
        videoSrc={src}
        alt={alt}
        priority={priority}
        width={width}
        height={height}
      />
    );
  }

  // Static image (PNG/JPG/WebP). Prefer lazy loading everywhere except
  // the explicit hero asset. Width/height prevent CLS when known.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="block h-auto w-full"
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      width={width}
      height={height}
    />
  );
}

/**
 * Lazy, muted, looping <video> for product recordings.
 *
 * resolveShot() already handed us a file that exists on disk, so we use
 * `videoSrc` as the primary <source>. We additionally probe (HEAD) for
 * the sibling format and the poster — if either is present we use them,
 * otherwise the browser just falls back to `videoSrc`.
 */
function MediaPlayer({
  videoSrc,
  alt,
  priority,
  width,
  height,
}: {
  videoSrc: string;
  alt: string;
  priority: boolean;
  width?: number;
  height?: number;
}) {
  const stem = videoSrc.replace(/\.(mp4|webm)$/i, "");
  const isWebmInput = videoSrc.toLowerCase().endsWith(".webm");
  const siblingSrc = isWebmInput ? `${stem}.mp4` : `${stem}.webm`;
  const siblingType = isWebmInput ? "video/mp4" : "video/webm";
  const primaryType = isWebmInput ? "video/webm" : "video/mp4";
  const posterSrc = `${stem}-poster.jpg`;

  const [extras, setExtras] = useState<{ sibling: boolean; poster: boolean }>({
    sibling: false,
    poster: false,
  });
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const [visible, setVisible] = useState(priority);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Probe for the sibling format + poster image. Both are nice-to-have —
  // the primary <source> is always `videoSrc` so the video works regardless.
  useEffect(() => {
    let cancelled = false;
    const check = async (url: string) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        return res.ok;
      } catch {
        return false;
      }
    };
    Promise.all([check(siblingSrc), check(posterSrc)]).then(
      ([sibling, poster]) => {
        if (!cancelled) setExtras({ sibling, poster });
      },
    );
    return () => {
      cancelled = true;
    };
  }, [siblingSrc, posterSrc]);

  // Subscribe to reduced-motion changes (initial value comes from the
  // lazy useState initializer above, so no setState inside the effect body).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lazy-mount for off-screen videos. Keeps the mobile data budget down.
  useEffect(() => {
    if (priority || visible) return;
    const node = containerRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [priority, visible]);

  // Reserve layout space so there's no CLS when the <video> or poster
  // arrives. If the caller didn't give us dimensions, we fall back to a
  // sensible 16:10 placeholder — screen recordings are usually close.
  const style = { aspectRatio: `${width ?? 16} / ${height ?? 10}` };
  const poster = extras.poster ? posterSrc : undefined;

  if (!visible) {
    // Off-screen placeholder: a cream block that holds its space. The
    // IntersectionObserver above will mount the real <video> as the
    // viewport approaches.
    return (
      <div
        ref={containerRef}
        className="block w-full bg-cream"
        style={style}
        aria-label={alt}
      />
    );
  }

  return (
    <div ref={containerRef} className="block w-full" style={style}>
      <video
        className="block h-auto w-full"
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload={priority ? "metadata" : "none"}
        poster={poster}
        aria-label={alt}
        width={width}
        height={height}
      >
        {/*
          Order: WebM first when supported (smaller), then MP4 (universal).
          The browser picks the first <source> it can decode.
        */}
        {isWebmInput ? (
          <>
            <source src={videoSrc} type={primaryType} />
            {extras.sibling && <source src={siblingSrc} type={siblingType} />}
          </>
        ) : (
          <>
            {extras.sibling && <source src={siblingSrc} type={siblingType} />}
            <source src={videoSrc} type={primaryType} />
          </>
        )}
      </video>
    </div>
  );
}
