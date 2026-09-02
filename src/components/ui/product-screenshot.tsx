"use client";

import { ImageOff } from "lucide-react";

type ProductScreenshotProps = {
  src: string | null;
  alt: string;
  hint: string;
  capture?: string;
};

export function ProductScreenshot({ src, alt, hint, capture }: ProductScreenshotProps) {
  if (!src) {
    return (
      <div className="flex min-h-[160px] flex-col items-center justify-center gap-2 bg-cream px-4 py-10 text-center">
        <ImageOff className="size-5 text-muted" strokeWidth={1.75} />
        <p className="text-sm font-medium text-foreground">{hint}</p>
        <p className="max-w-xs text-xs leading-5 text-muted">
          Drop a PNG, JPG, or WebP into{" "}
          <code className="rounded bg-primary-muted px-1 py-0.5 text-primary">
            public/screenshots
          </code>
          {capture ? <> — {capture}</> : null}. Any size is fine.
        </p>
      </div>
    );
  }

  return (
    // Native img keeps the file's own aspect ratio (no crop, no forced frame).
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="block h-auto w-full" />
  );
}
