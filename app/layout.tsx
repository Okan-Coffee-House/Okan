import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Instrument_Sans } from "next/font/google";
import { headers } from "next/headers";
import type { ReactNode } from "react";
import { OKAN_COLORS } from "@/constants/colors";
import { LOCALE_HEADER } from "@/constants/locales";
import { OKAN } from "@/constants/okan";
import { env } from "@/lib/env";
import { getDirection, getLocale } from "@/lib/locale";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
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
      className={`${instrument.variable} ${arabic.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-okan-cream font-sans text-okan-ink">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
