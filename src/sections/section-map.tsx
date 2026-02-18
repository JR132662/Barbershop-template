import type { HomeSectionId } from "@/config/sections";
import type { HomeSectionContext } from "./types";
import { HeroSection } from "./Hero/HeroSection";
import { HeroSectionV2 } from "./Hero/HeroSectionV2";
import { HeroSectionV3 } from "./Hero/HeroSectionV3";
import { HeroSectionV4 } from "./Hero/HeroSectionV4";
import { GallerySection } from "./Gallery/GallerySection";
import { GallerySectionV2 } from "./Gallery/GallerySectionV2";
import { GallerySectionV3 } from "./Gallery/GallerySectionV3";
import { GallerySectionV4 } from "./Gallery/GallerySectionV4";
import { PullQuoteSection } from "./PullQuote/PullQuoteSection";
import { PullQuoteSectionV2 } from "./PullQuote/PullQuoteSectionV2";
import { PullQuoteSectionV3 } from "./PullQuote/PullQuoteSectionV3";
import { PullQuoteSectionV4 } from "./PullQuote/PullQuoteSectionV4";
import { ServicesPreviewSection } from "./ServicesPreview/ServicesPreviewSection";
import { ServicesPreviewSectionV2 } from "./ServicesPreview/ServicesPreviewSectionV2";
import { ServicesPreviewSectionV3 } from "./ServicesPreview/ServicesPreviewSectionV3";
import { ServicesPreviewSectionV4 } from "./ServicesPreview/ServicesPreviewSectionV4";
import { WhyChooseUsSection } from "./WhyChooseUs/WhyChooseUsSection";
import { WhyChooseUsSectionV2 } from "./WhyChooseUs/WhyChooseUsSectionV2";
import { WhyChooseUsSectionV3 } from "./WhyChooseUs/WhyChooseUsSectionV3";
import { WhyChooseUsSectionV4 } from "./WhyChooseUs/WhyChooseUsSectionV4";
import { WhatToExpectSection } from "./WhatToExpect/WhatToExpectSection";
import { WhatToExpectSectionV2 } from "./WhatToExpect/WhatToExpectSectionV2";
import { WhatToExpectSectionV3 } from "./WhatToExpect/WhatToExpectSectionV3";
import { WhatToExpectSectionV4 } from "./WhatToExpect/WhatToExpectSectionV4";
import { VisitUsSection } from "./VisitUs/VisitUsSection";
import { VisitUsSectionV2 } from "./VisitUs/VisitUsSectionV2";
import { VisitUsSectionV3 } from "./VisitUs/VisitUsSectionV3";
import { VisitUsSectionV4 } from "./VisitUs/VisitUsSectionV4";
import { FAQSection } from "./FAQ/FAQSection";
import { FAQSectionV2 } from "./FAQ/FAQSectionV2";
import { FAQSectionV3 } from "./FAQ/FAQSectionV3";
import { FAQSectionV4 } from "./FAQ/FAQSectionV4";
import { FromTheShopSection } from "./FromTheShop/FromTheShopSection";
import { FromTheShopSectionV2 } from "./FromTheShop/FromTheShopSectionV2";
import { FromTheShopSectionV3 } from "./FromTheShop/FromTheShopSectionV3";
import { FromTheShopSectionV4 } from "./FromTheShop/FromTheShopSectionV4";
import { FeaturedTestimonialSection } from "./FeaturedTestimonial/FeaturedTestimonialSection";
import { FeaturedTestimonialSectionV2 } from "./FeaturedTestimonial/FeaturedTestimonialSectionV2";
import { FeaturedTestimonialSectionV3 } from "./FeaturedTestimonial/FeaturedTestimonialSectionV3";
import { FeaturedTestimonialSectionV4 } from "./FeaturedTestimonial/FeaturedTestimonialSectionV4";
import { ShortTestimonialsSection } from "./ShortTestimonials/ShortTestimonialsSection";
import { ShortTestimonialsSectionV2 } from "./ShortTestimonials/ShortTestimonialsSectionV2";
import { ShortTestimonialsSectionV3 } from "./ShortTestimonials/ShortTestimonialsSectionV3";
import { ShortTestimonialsSectionV4 } from "./ShortTestimonials/ShortTestimonialsSectionV4";

type SectionComponent = (ctx: HomeSectionContext) => React.ReactNode;

const SECTION_MAP: Record<HomeSectionId, SectionComponent> = {
  hero: HeroSection,
  "hero-v2": HeroSectionV2,
  "hero-v3": HeroSectionV3,
  "hero-v4": HeroSectionV4,
  gallery: GallerySection,
  "gallery-v2": GallerySectionV2,
  "gallery-v3": GallerySectionV3,
  "gallery-v4": GallerySectionV4,
  "pull-quote": PullQuoteSection,
  "pull-quote-v2": PullQuoteSectionV2,
  "pull-quote-v3": PullQuoteSectionV3,
  "pull-quote-v4": PullQuoteSectionV4,
  "services-preview": ServicesPreviewSection,
  "services-preview-v2": ServicesPreviewSectionV2,
  "services-preview-v3": ServicesPreviewSectionV3,
  "services-preview-v4": ServicesPreviewSectionV4,
  "why-choose-us": WhyChooseUsSection,
  "why-choose-us-v2": WhyChooseUsSectionV2,
  "why-choose-us-v3": WhyChooseUsSectionV3,
  "why-choose-us-v4": WhyChooseUsSectionV4,
  "what-to-expect": WhatToExpectSection,
  "what-to-expect-v2": WhatToExpectSectionV2,
  "what-to-expect-v3": WhatToExpectSectionV3,
  "what-to-expect-v4": WhatToExpectSectionV4,
  "visit-us": VisitUsSection,
  "visit-us-v2": VisitUsSectionV2,
  "visit-us-v3": VisitUsSectionV3,
  "visit-us-v4": VisitUsSectionV4,
  faq: FAQSection,
  "faq-v2": FAQSectionV2,
  "faq-v3": FAQSectionV3,
  "faq-v4": FAQSectionV4,
  "from-the-shop": FromTheShopSection,
  "from-the-shop-v2": FromTheShopSectionV2,
  "from-the-shop-v3": FromTheShopSectionV3,
  "from-the-shop-v4": FromTheShopSectionV4,
  "featured-testimonial": FeaturedTestimonialSection,
  "featured-testimonial-v2": FeaturedTestimonialSectionV2,
  "featured-testimonial-v3": FeaturedTestimonialSectionV3,
  "featured-testimonial-v4": FeaturedTestimonialSectionV4,
  "short-testimonials": ShortTestimonialsSection,
  "short-testimonials-v2": ShortTestimonialsSectionV2,
  "short-testimonials-v3": ShortTestimonialsSectionV3,
  "short-testimonials-v4": ShortTestimonialsSectionV4,
};

export function getSectionComponent(id: HomeSectionId): SectionComponent | undefined {
  return SECTION_MAP[id];
}

export function renderSection(id: HomeSectionId, ctx: HomeSectionContext): React.ReactNode {
  const Component = SECTION_MAP[id];
  if (!Component) return null;
  return <Component {...ctx} />;
}
