import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { locales } from "./lib/i18n";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const languages = new Negotiator({
    headers: {
      "accept-language": request.headers.get("accept-language") as
        | string
        | undefined,
    },
  }).languages();
  const defaultLocale = "en-US";

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next)(?!.*\\.(?:ico|png|svg|jpg|jpeg|xml|txt)$)(?!/api).*)"],
};
