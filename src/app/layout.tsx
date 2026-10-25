import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";

import { HashScroll } from "@/components/hash-scroll";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://acornsnest.com";

const defaultTitle =
  "Daycare Management Software, Built in Halifax | Acorns Nest";
const defaultDescription =
  "Acorns Nest is daycare management software for licensed childcare centres across Canada. Attendance, naps, meals, parent messages, weekly menus and staff timesheets in one app. Built in Halifax, Nova Scotia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Acorns Nest",
  },
  description: defaultDescription,
  applicationName: "Acorns Nest",
  authors: [{ name: "Acorns Nest Inc.", url: siteUrl }],
  creator: "Acorns Nest Inc.",
  publisher: "Acorns Nest Inc.",
  category: "Education",
  keywords: [
    "daycare management software",
    "childcare management software",
    "daycare app Canada",
    "childcare app Canada",
    "parent communication app",
    "attendance tracking",
    "nap tracking",
    "meal logging",
    "weekly menu planner",
    "staff timesheets",
    "Nova Scotia child care",
    "Halifax childcare software",
    "licensed daycare software",
    "Acorns Nest",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-CA": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Acorns Nest",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Acorns Nest: daycare management software built in Halifax, Nova Scotia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f3ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-surface font-sans text-foreground">
        <HashScroll />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
