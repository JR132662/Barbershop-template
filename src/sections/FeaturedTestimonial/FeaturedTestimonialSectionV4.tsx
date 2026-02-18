import type { HomeSectionContext } from "../types";

/**
 * Featured testimonial variant 4: Minimal, large typography with left-aligned quote mark. Use section ID "featured-testimonial-v4" in homeSections.
 */
export function FeaturedTestimonialSectionV4({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const quote = (home.featuredTestimonial as string) ?? t.home.testimonial1;
  const author = home.featuredTestimonialAuthor ?? t.home.testimonial1Author;

  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="section-label">{t.home.testimonialTitle}</p>
        <p className="mt-2 text-sm font-medium text-gray-500">
          {home.testimonialSubtitle ?? "Real people, real cuts."}
        </p>
        <div className="mt-12 flex gap-6 md:gap-10">
          <span
            className="font-heading text-6xl font-bold leading-none text-gold/30 md:text-7xl"
            aria-hidden
          >
            "
          </span>
          <div className="flex-1">
            <blockquote>
              <p className="font-heading text-2xl font-medium leading-relaxed text-gray-800 sm:text-3xl md:text-4xl">
                {quote}
              </p>
              <cite className="mt-8 block text-base font-semibold text-gray-950 not-italic">
                {author}
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
