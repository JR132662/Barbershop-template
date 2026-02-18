import Link from "next/link";
import Image from "next/image";
import { interpolate } from "@/lib/i18n";
import type { HomeSectionContext } from "../types";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=85";

/**
 * Hero variant 3: Minimal / bold — light background, large typography, small accent image.
 * Use section ID "hero-v3" in homeSections for a clean, premium pitch style.
 */
export function HeroSectionV3({ locale: _locale, t, siteConfig, base }: HomeSectionContext) {
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
    <section className="relative border-b border-[var(--border)] bg-[var(--surface)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:py-32">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Copy block */}
          <div className="flex-1 text-center lg:text-left">
            {showLocationName && (
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold md:text-sm">
                {locationName}
              </p>
            )}
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl">
              {showLocationName ? siteConfig.businessName : pageTitle}
            </h1>
            {showRating && rating !== null && reviewCount !== null && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-1.5 text-sm font-medium text-gray-700">
                <span className="text-gold" aria-hidden>★</span>
                <span>{rating}</span>
                <span className="text-gray-400">·</span>
                <span>{reviewCount} reviews</span>
              </p>
            )}
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600">
              {t.home.heroSubtitle}
            </p>
            {t.home.heroTagline && (
              <p className="mt-2 max-w-lg mx-auto lg:mx-0 text-sm text-gray-500">
                {t.home.heroTagline}
              </p>
            )}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start sm:gap-4">
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
          {/* Accent image — smaller, editorial */}
          <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--border)] bg-gray-100 shadow-[var(--shadow-lg)] lg:max-w-sm">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
