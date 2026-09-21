import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES, LOCALE_HEADER } from "@/constants/locales";
import { getLocale, isLocale } from "@/lib/locale";

const STATIC_PREFIXES = [
  "/_next",
  "/images",
  "/hero",
  "/icon",
  "/apple-icon",
  "/opengraph-image",
  "/twitter-image",
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
];

function isStaticPath(pathname: string): boolean {
  return STATIC_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isStaticPath(pathname) || pathname.includes(".")) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/")[1];
  const hasLocale = isLocale(firstSegment);

  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
    const response = NextResponse.redirect(url);
    response.headers.set(LOCALE_HEADER, DEFAULT_LOCALE);
    return response;
  }

  if (!LOCALES.includes(firstSegment)) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  response.headers.set(LOCALE_HEADER, getLocale(firstSegment));
  return response;
}

export const config = {
  matcher: ["/", "/((?!_next/static|_next/image).*)"],
};
