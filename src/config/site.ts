import type { HomeSectionId } from "@/config/sections";

/**
 * AJILE Development — Barbershop Template
 * BUSINESS INFO ONLY: Edit this file for each client. Change business name, address,
 * hours, phone, and optional team. The rest of the site (copy, sections, navbar, footer)
 * is driven by messages and src/config/sections.ts.
 *
 * To override home section order: set homeSections to an array of section IDs (see sections.ts).
 * To change navbar or footer: edit headerVariant and footerVariant in src/config/sections.ts.
 */

export const siteConfig = {
  /**
   * Optional: override default home page sections. List section IDs in desired order.
   * Omit to use default order from src/config/sections.ts.
   */
  homeSections: undefined as readonly HomeSectionId[] | undefined,
  /** Business / shop name */
  businessName: "Fade Masters Barber Shop",
  /**
   * Logo for hero section. Path from public (e.g. "/logo.png") or full image URL.
   * Place your logo in public/ (e.g. logo.png or logo.svg) and set logoUrl accordingly.
   * Leave empty ("") to show business name as text instead of a logo.
   */
  logoUrl: "/Logo.png?v=2",
  /** Optional location name for hero and location block */
  locationName: "Miami Beach",
  /** Optional: Google-style rating (e.g. 4.7) and review count for trust badge in hero */
  rating: 4.7 as number | undefined,
  reviewCount: 191 as number | undefined,
  /** Short tagline (hero, meta) */
  tagline: "Barber shop in Miami Beach, Florida. Quality fades & classic cuts.",
  /** One line for "About" teaser or meta description */
  shortDescription:
    "Barber shop in Miami Beach, Florida. Quality fades, beard trims, and classic grooming. Walk-ins welcome.",
  /** Year founded (optional — shows "Since 20XX" on About if set) */
  foundedYear: undefined as number | undefined,
  /** Physical address */
  address: {
    line1: "6972 Bay Dr",
    city: "Miami Beach",
    state: "FL",
    zip: "33141",
  },
  /** Phone number (display + tel: link) */
  phone: "(305) 335-2973",
  /** Email for contact form / inquiries */
  email: "hello@fademasters.com",
  /** Optional parking info */
  parkingInfo: "",
  /** Hours (for display) — update with actual hours from client */
  hours: {
    monday: "11:00 AM – 7:00 PM",
    tuesday: "11:00 AM – 7:00 PM",
    wednesday: "11:00 AM – 7:00 PM",
    thursday: "11:00 AM – 7:00 PM",
    friday: "11:00 AM – 7:00 PM",
    saturday: "11:00 AM – 6:00 PM",
    sunday: "Closed",
  },
  /** Social links (leave empty to hide) */
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
  },
  /** Calendly/Cal.com/Google Booking URL. Empty = show "call us" / contact form. */
  bookingUrl: "",
  /** Optional: embed URL for calendar iframe */
  calendarEmbedUrl: "",
  /** Team — barbers from Fade Masters (update imageUrl when photos available) */
  team: [
    { name: "George", role: "Barber", imageUrl: "" },
    { name: "Marcel", role: "Barber", imageUrl: "" },
    { name: "Jumbo", role: "Barber", imageUrl: "" },
  ] as { name: string; role: string; imageUrl?: string }[],
} as const;

/** Service IDs — must match keys in messages > services. Reorder or add/remove as needed. */
export const serviceIds = [
  "mens-haircut",
  "beard-trim",
  "hot-towel-shave",
  "hair-and-beard",
  "kids-cut",
  "senior-cut",
  "fade",
  "classic-shave",
] as const;

export type ServiceId = (typeof serviceIds)[number];
export type SiteConfig = typeof siteConfig;
