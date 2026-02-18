/**
 * Home page section configuration for the barbershop template.
 * Swap sections per barbershop by reordering or omitting IDs from homeSectionIds,
 * or override via siteConfig.homeSections in site.ts.
 *
 * Layout (navbar & footer): set headerVariant and footerVariant below to choose which Header and Footer render.
 *
 * Hero options: use exactly one of "hero" | "hero-v2" | "hero-v3" | "hero-v4" in your
 * section list for different pitch styles (full-bleed, split, minimal, minimal V4 theme).
 * FAQ options: use "faq" (default) or "faq-v2" | "faq-v3" | "faq-v4" for alternate layouts.
 * Featured testimonial options: use "featured-testimonial" (default) or "featured-testimonial-v2" | "featured-testimonial-v3" | "featured-testimonial-v4".
 * From the shop options: use "from-the-shop" (default) or "from-the-shop-v2" | "from-the-shop-v3" | "from-the-shop-v4".
 * Gallery, pull-quote, services-preview, why-choose-us, what-to-expect, visit-us, short-testimonials: each has "section-id" (default) or "section-id-v2" | "section-id-v3" | "section-id-v4".
 */

// ——— Navbar & footer (layout) ———
/** Valid header variant IDs. Options: "default" (dark bar), "v2" (light/centered), "v3" (minimal/compact). */
export const HEADER_VARIANT_IDS = ["default", "v2", "v3"] as const;

export type HeaderVariantId = (typeof HEADER_VARIANT_IDS)[number];

/** Which navbar to use. Change this to swap the header. */
export const headerVariant: HeaderVariantId = "default";

/** Valid footer variant IDs. Options: "default" (dark), "v2" (light/centered), "v3" (minimal), "v4" (minimal V4 theme). */
export const FOOTER_VARIANT_IDS = ["default", "v2", "v3", "v4"] as const;

export type FooterVariantId = (typeof FOOTER_VARIANT_IDS)[number];

/** Which footer to use. Change this to swap the footer. */
export const footerVariant: FooterVariantId = "default";

export function getHeaderVariant(): HeaderVariantId {
  return headerVariant;
}

export function getFooterVariant(): FooterVariantId {
  return footerVariant;
}

// ——— Home page sections ———
/** All valid section IDs (including all section variants for pitching). */
export const ALL_HOME_SECTION_IDS = [
  "hero",
  "hero-v2",
  "hero-v3",
  "hero-v4",
  "gallery",
  "gallery-v2",
  "gallery-v3",
  "gallery-v4",
  "pull-quote",
  "pull-quote-v2",
  "pull-quote-v3",
  "pull-quote-v4",
  "services-preview",
  "services-preview-v2",
  "services-preview-v3",
  "services-preview-v4",
  "why-choose-us",
  "why-choose-us-v2",
  "why-choose-us-v3",
  "why-choose-us-v4",
  "what-to-expect",
  "what-to-expect-v2",
  "what-to-expect-v3",
  "what-to-expect-v4",
  "visit-us",
  "visit-us-v2",
  "visit-us-v3",
  "visit-us-v4",
  "faq",
  "faq-v2",
  "faq-v3",
  "faq-v4",
  "from-the-shop",
  "from-the-shop-v2",
  "from-the-shop-v3",
  "from-the-shop-v4",
  "featured-testimonial",
  "featured-testimonial-v2",
  "featured-testimonial-v3",
  "featured-testimonial-v4",
  "short-testimonials",
  "short-testimonials-v2",
  "short-testimonials-v3",
  "short-testimonials-v4",
] as const;

export type HomeSectionId = (typeof ALL_HOME_SECTION_IDS)[number];

/** Default section order (single hero). Use hero-v2 or hero-v3 in homeSections override for alternate heroes. */
export const HOME_SECTION_IDS: readonly HomeSectionId[] = [
  "hero",
  "gallery",
  "pull-quote",
  "services-preview",
  "why-choose-us",
  "what-to-expect",
  "visit-us",
  "faq",
  "from-the-shop",
  "featured-testimonial",
  "short-testimonials",
];

/** Default order of home sections. Use this or override in siteConfig.homeSections. */
export function getHomeSectionIds(override?: readonly HomeSectionId[]): readonly HomeSectionId[] {
  if (override && override.length > 0) return override;
  return HOME_SECTION_IDS;
}
