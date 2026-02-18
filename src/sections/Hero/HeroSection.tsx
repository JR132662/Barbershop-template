import Link from "next/link";
import Image from "next/image";
import { interpolate } from "@/lib/i18n";
import { HeroLogo } from "@/components/HeroLogo";
import type { HomeSectionContext } from "../types";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1400&q=85";

export function HeroSection({ locale: _locale, t, siteConfig, base }: HomeSectionContext) {
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
    <section className="relative min-h-[85vh] overflow-hidden md:min-h-screen">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/55 to-gray-950/35"
          aria-hidden
        />
      </div>
      <div className="relative mx-auto flex min-h-[85vh] max-w-4xl flex-col justify-end px-4 pb-20 pt-24 text-center md:min-h-screen md:justify-center md:pb-24 md:pt-32">
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
            {showRating && rating !== null && reviewCount !== null && (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                <span className="text-vice-pink" aria-hidden>★</span>
                <span>{rating}</span>
                <span className="text-gray-400">·</span>
                <span>{reviewCount} reviews</span>
              </p>
            )}
            <p className="mt-4 max-w-xl mx-auto text-base text-gray-300 sm:text-lg md:text-xl">
              {t.home.heroSubtitle}
            </p>
            {t.home.heroTagline && (
              <p className="mt-2 max-w-lg mx-auto text-sm text-gray-400">
                {t.home.heroTagline}
              </p>
            )}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href={`${base}/book`}
                className="inline-flex items-center justify-center rounded-xl bg-vice-pink px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-vice-pink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vice-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                {t.home.ctaBook}
              </Link>
              <Link
                href={`${base}/services`}
                className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)] bg-white/5 px-8 py-3.5 font-semibold text-[var(--gold)] backdrop-blur-sm transition hover:bg-[var(--gold)]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                {t.home.ctaServices}
              </Link>
            </div>
          </>
        ) : (
          <>
            {showLocationName && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-vice-pink md:text-sm">
                {locationName}
              </p>
            )}
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {showLocationName ? siteConfig.businessName : pageTitle}
            </h1>
            {showRating && rating !== null && reviewCount !== null && (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                <span className="text-vice-pink" aria-hidden>★</span>
                <span>{rating}</span>
                <span className="text-gray-400">·</span>
                <span>{reviewCount} reviews</span>
              </p>
            )}
            <p className="mt-5 max-w-xl mx-auto text-base text-gray-300 sm:text-lg md:text-xl">
              {t.home.heroSubtitle}
            </p>
            {t.home.heroTagline && (
              <p className="mt-2 max-w-lg mx-auto text-sm text-gray-400">
                {t.home.heroTagline}
              </p>
            )}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href={`${base}/book`}
                className="inline-flex items-center justify-center rounded-xl bg-vice-pink px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-vice-pink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vice-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                {t.home.ctaBook}
              </Link>
              <Link
                href={`${base}/services`}
                className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)] bg-white/5 px-8 py-3.5 font-semibold text-[var(--gold)] backdrop-blur-sm transition hover:bg-[var(--gold)]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                {t.home.ctaServices}
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
