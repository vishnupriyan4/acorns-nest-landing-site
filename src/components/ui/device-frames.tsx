"use client";

import type { ReactNode } from "react";

import { usePointerTilt } from "@/hooks/use-pointer-tilt";

type FrameProps = {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
};

export function BrowserFrame({ children, className = "", tilt = false }: FrameProps) {
  const pointer = usePointerTilt(6);
  const style = tilt
    ? {
        transform: `perspective(1200px) rotateX(${pointer.tilt.x}deg) rotateY(${pointer.tilt.y}deg)`,
      }
    : undefined;

  return (
    <div
      ref={tilt ? pointer.ref : undefined}
      onPointerMove={tilt ? pointer.onPointerMove : undefined}
      onPointerLeave={tilt ? pointer.onPointerLeave : undefined}
      style={style}
      className={`overflow-hidden rounded-xl border border-border bg-background shadow-lg transition-transform duration-200 ease-out ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 rounded-md bg-background px-3 py-1 text-[11px] text-muted ring-1 ring-border">
          director.acornsnest.app
        </div>
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ children, className = "", tilt = false }: FrameProps) {
  const pointer = usePointerTilt(7);
  const style = tilt
    ? {
        transform: `perspective(1000px) rotateX(${pointer.tilt.x}deg) rotateY(${pointer.tilt.y}deg)`,
      }
    : undefined;

  return (
    <div
      ref={tilt ? pointer.ref : undefined}
      onPointerMove={tilt ? pointer.onPointerMove : undefined}
      onPointerLeave={tilt ? pointer.onPointerLeave : undefined}
      style={style}
      className={`relative mx-auto w-full max-w-[280px] overflow-hidden rounded-[28px] border-[8px] border-ink bg-ink shadow-glow transition-transform duration-200 ease-out ${className}`}
    >
      <div className="overflow-hidden rounded-[20px] bg-cream">{children}</div>
    </div>
  );
}
