/**
 * AJILE Development — Barbershop Template
 * PLUG-AND-PLAY: Edit this file for each client. Change business name, address,
 * hours, phone, and optional team. The rest of the site (copy, sections) is
 * driven by messages (en.json / es.json) so one template works for every brand.
 */

export const siteConfig = {
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
  foundedYear: 2018 as number | undefined,
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
  parkingInfo: "Free street parking available on Bay Dr",
  /** Hours (for display) — update with actual hours from client */
  hours: {
    monday: "11:00 AM – 7:00 PM",
    tuesday: "11:00 AM – 7:00 PM",
    wednesday: "11:00 AM – 7:00 PM",
    thursday: "11:00 AM – 7:00 PM",
    friday: "11:00 AM – 7:00 PM",
    saturday: "6:00 AM – 6:00 PM",
    sunday: "Closed",
  },
  /** Social links (leave empty to hide) */
  social: {
    instagram: "https://instagram.com/fademasters",
    facebook: "https://facebook.com/fademasters",
    tiktok: "https://tiktok.com/@fademasters",
    yelp: "https://yelp.com/biz/fade-masters-miami-beach",
  },
  /** Calendly/Cal.com/Google Booking URL. Empty = show "call us" / contact form. */
  bookingUrl: "",
  /** Optional: embed URL for calendar iframe */
  calendarEmbedUrl: "",
  /** Announcement bar (leave message empty to hide) */
  announcement: {
    message: "New clients get 15% off their first visit!",
    linkText: "Book now",
  },
  /** Team — barbers from Fade Masters (update imageUrl when photos available) */
  team: [
    {
      name: "George",
      role: "Master Barber & Owner",
      bio: "15+ years behind the chair. Specializes in fades and precision razor work.",
      imageUrl: "",
    },
    {
      name: "Marcel",
      role: "Senior Barber",
      bio: "Expert in beard sculpting and classic styles. Known for his attention to detail.",
      imageUrl: "",
    },
    {
      name: "Jumbo",
      role: "Barber",
      bio: "Creative cuts and modern styles. Great with kids and first-timers.",
      imageUrl: "",
    },
  ] as { name: string; role: string; bio?: string; imageUrl?: string }[],
} as const;

/** Service definitions with prices — must match keys in messages > services. */
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

/** Prices for each service (in USD). Update per client. */
export const servicePrices: Record<string, number> = {
  "mens-haircut": 35,
  "beard-trim": 20,
  "hot-towel-shave": 30,
  "hair-and-beard": 50,
  "kids-cut": 25,
  "senior-cut": 25,
  "fade": 40,
  "classic-shave": 25,
};

export type ServiceId = (typeof serviceIds)[number];
