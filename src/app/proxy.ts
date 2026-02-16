import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = request.cookies.get("locale")?.value ?? "en";
    const safeLocale = locales.includes(locale) ? locale : "en";
    return NextResponse.redirect(new URL(`/${safeLocale}${pathname || ""}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
