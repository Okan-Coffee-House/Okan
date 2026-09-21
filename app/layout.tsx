import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Instrument_Sans, Newsreader } from "next/font/google";
import { headers } from "next/headers";
import type { ReactNode } from "react";
import { OKAN_COLORS } from "@/constants/colors";
import { LOCALE_HEADER } from "@/constants/locales";
import { OKAN } from "@/constants/okan";
import { env } from "@/lib/env";
import { getDirection, getLocale } from "@/lib/locale";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-newsreader",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-instrument",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  applicationName: OKAN.shortName,
  authors: [{ name: OKAN.name }],
  icons: {
    icon: [
      { url: "/icon.svg?v=okan-mark", type: "image/svg+xml" },
      { url: "/favicon.ico?v=okan-mark", sizes: "16x16 32x32 48x48" },
    ],
    shortcut: "/favicon.ico?v=okan-mark",
    apple: [{ url: "/apple-icon.png?v=okan-mark", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: OKAN_COLORS.cream,
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headerList = await headers();
  const locale = getLocale(headerList.get(LOCALE_HEADER) || undefined);

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${instrument.variable} ${arabic.variable} h-full antialiased`}
    >
      <body
        className="min-h-full bg-okan-cream font-sans text-okan-ink"
        suppressHydrationWarning
      >
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
