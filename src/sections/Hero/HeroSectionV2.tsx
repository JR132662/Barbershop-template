import Link from "next/link";
import Image from "next/image";
import { interpolate } from "@/lib/i18n";
import { HeroLogo } from "@/components/HeroLogo";
import type { HomeSectionContext } from "../types";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1400&q=85";

/**
 * Hero variant 2: Split layout — copy + CTAs on left, full-height image on right.
 * Use section ID "hero-v2" in homeSections for this pitch style.
 */
export function HeroSectionV2({ locale: _locale, t, siteConfig, base }: HomeSectionContext) {
  const locationName = siteConfig.locationName;
  const showLocationName =
    typeof locationName === "string" && locationName.length > 0;
  const pageTitle = showLocationName
    ? `${siteConfig.businessName} — ${locationName}`
    : interpolate(t.home.heroTitle, { businessName: siteConfig.businessName });

  const showLogo =
    typeof siteConfig.logoUrl === "string" && siteConfig.logoUrl.length > 0;
  const showRating =
    typeof (siteConfig as { rating?: number }).rating === "number" &&
    typeof (siteConfig as { reviewCount?: number }).reviewCount === "number";
  const rating = showRating ? (siteConfig as { rating: number }).rating : null;
  const reviewCount = showRating ? (siteConfig as { reviewCount: number }).reviewCount : null;

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col md:flex-row">
      {/* Left: copy + CTAs — dark panel */}
      <div className="relative flex flex-1 flex-col justify-center px-6 py-20 md:px-12 md:py-24 lg:px-16 lg:max-w-[55%] bg-gray-950">
        <div className="mx-auto w-full max-w-xl">
          {showLogo ? (
            <>
              <HeroLogo
                logoUrl={siteConfig.logoUrl}
                businessName={siteConfig.businessName}
              />
              {showLocationName && (
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-vice-pink md:text-sm">
                  {locationName}
                </p>
              )}
            </>
          ) : (
            <>
              {showLocationName && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-vice-pink md:text-sm">
                  {locationName}
                </p>
              )}
              <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                {showLocationName ? siteConfig.businessName : pageTitle}
              </h1>
            </>
          )}
          {showRating && rating !== null && reviewCount !== null && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm w-fit">
              <span className="text-vice-pink" aria-hidden>★</span>
              <span>{rating}</span>
              <span className="text-gray-400">·</span>
              <span>{reviewCount} reviews</span>
            </p>
          )}
          <p className="mt-5 text-base text-gray-300 sm:text-lg">
            {t.home.heroSubtitle}
          </p>
          {t.home.heroTagline && (
            <p className="mt-2 text-sm text-gray-400">{t.home.heroTagline}</p>
          )}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
            <Link
              href={`${base}/book`}
              className="inline-flex items-center justify-center rounded-xl bg-vice-pink px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-vice-pink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vice-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              {t.home.ctaBook}
            </Link>
            <Link
              href={`${base}/services`}
              className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)] bg-white/5 px-8 py-3.5 font-semibold text-[var(--gold)] transition hover:bg-[var(--gold)]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              {t.home.ctaServices}
            </Link>
          </div>
        </div>
      </div>
      {/* Right: full-height image */}
      <div className="relative flex-1 min-h-[50vh] md:min-h-full md:min-w-[45%]">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-l from-gray-950/40 to-transparent md:from-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
}
