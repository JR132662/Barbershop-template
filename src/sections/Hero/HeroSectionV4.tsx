import Link from "next/link";
import { interpolate } from "@/lib/i18n";
import type { HomeSectionContext } from "../types";

/**
 * Hero variant 4: Minimal — light background, large typography, large decorative quote mark (matches other V4 sections). No image. Use section ID "hero-v4" in homeSections.
 */
export function HeroSectionV4({ locale: _locale, t, siteConfig, base }: HomeSectionContext) {
  const locationName = siteConfig.locationName;
  const showLocationName =
    typeof locationName === "string" && locationName.length > 0;
  const pageTitle = showLocationName
    ? `${siteConfig.businessName} — ${locationName}`
    : interpolate(t.home.heroTitle, { businessName: siteConfig.businessName });

  const showRating =
    typeof (siteConfig as { rating?: number }).rating === "number" &&
    typeof (siteConfig as { reviewCount?: number }).reviewCount === "number";
  const rating = showRating ? (siteConfig as { rating: number }).rating : null;
  const reviewCount = showRating ? (siteConfig as { reviewCount: number }).reviewCount : null;

  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex gap-6 md:gap-10">
          <span
            className="font-heading text-6xl font-bold leading-none text-gold/30 md:text-7xl"
            aria-hidden
          >
            "
          </span>
          <div className="flex-1">
            {showLocationName && (
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold md:text-sm">
                {locationName}
              </p>
            )}
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              {showLocationName ? siteConfig.businessName : pageTitle}
            </h1>
            {showRating && rating !== null && reviewCount !== null && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm font-medium text-gray-700">
                <span className="text-gold" aria-hidden>★</span>
                <span>{rating}</span>
                <span className="text-gray-400">·</span>
                <span>{reviewCount} reviews</span>
              </p>
            )}
            <p className="mt-6 text-lg text-gray-600">
              {t.home.heroSubtitle}
            </p>
            {t.home.heroTagline && (
              <p className="mt-2 text-sm text-gray-500">
                {t.home.heroTagline}
              </p>
            )}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
              <Link
                href={`${base}/book`}
                className="inline-flex items-center justify-center rounded-xl bg-gray-950 px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
              >
                {t.home.ctaBook}
              </Link>
              <Link
                href={`${base}/services`}
                className="inline-flex items-center justify-center rounded-xl border-2 border-gold bg-transparent px-8 py-3.5 font-semibold text-gray-950 transition hover:bg-gold hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                {t.home.ctaServices}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
