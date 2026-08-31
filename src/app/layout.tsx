import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Acorns Nest — Childcare operations, in one nest",
    template: "%s | Acorns Nest",
  },
  description:
    "Acorns Nest is a childcare management platform for directors, teachers, kitchen teams, and parents — attendance, naps, meals, communication, and AI insights.",
  keywords: [
    "childcare management",
    "daycare software",
    "attendance tracking",
    "parent communication",
    "Acorns Nest",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-surface font-sans text-foreground">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
