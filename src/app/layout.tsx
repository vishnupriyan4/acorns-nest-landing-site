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
    default: "Acorns Nest | See every classroom while the day is in full swing",
    template: "%s | Acorns Nest",
  },
  description:
    "Acorns Nest is childcare software for directors, teachers, kitchens, and parents. Log attendance, naps, meals, and messages from the room, then publish the day on your own clock.",
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
