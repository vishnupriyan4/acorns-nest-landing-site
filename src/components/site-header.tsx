"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { HERO, NAV_LINKS } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border/70 bg-cream/90 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-primary transition-transform"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
        <a href="#top" className="relative z-10" onClick={() => setOpen(false)}>
          <BrandMark size="sm" />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#demo"
            className="inline-flex rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
          >
            {HERO.primaryCta}
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex size-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className="md:hidden">
        <div
          className={`fixed inset-0 top-14 bg-ink/30 transition-opacity sm:top-[72px] ${
            open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-full border-t border-border bg-cream px-5 pb-6 pt-4 shadow-lg transition-all ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-3 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-primary-muted hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              {HERO.primaryCta}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
