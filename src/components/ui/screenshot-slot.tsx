"use client";

import { Camera } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

type ScreenshotSlotProps = {
  src: string;
  alt: string;
  label: string;
  fallback: ReactNode;
  className?: string;
};

export function ScreenshotSlot({
  src,
  alt,
  label,
  fallback,
  className = "",
}: ScreenshotSlotProps) {
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const image = new window.Image();
    image.onload = () => {
      if (!cancelled) setHasImage(true);
    };
    image.onerror = () => {
      if (!cancelled) setHasImage(false);
    };
    image.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
      ) : (
        <>
          {fallback}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent px-3 pb-3 pt-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm">
              <Camera className="size-3 text-primary" strokeWidth={2} />
              Placeholder · {label}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
