import type { HomeSectionContext } from "../types";

/**
 * Featured testimonial variant 3: Dark panel with gold accent. Use section ID "featured-testimonial-v3" in homeSections.
 */
export function FeaturedTestimonialSectionV3({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const quote = (home.featuredTestimonial as string) ?? t.home.testimonial1;
  const author = home.featuredTestimonialAuthor ?? t.home.testimonial1Author;

  return (
    <section className="border-t border-[var(--border)] bg-gray-950 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
          {t.home.testimonialTitle}
        </p>
        <p className="mt-2 text-sm text-gray-400">
          {home.testimonialSubtitle ?? "Real people, real cuts."}
        </p>
        <blockquote className="mt-10">
          <p className="font-heading text-xl font-medium leading-relaxed text-white sm:text-2xl md:text-3xl">
            "{quote}"
          </p>
          <cite className="mt-6 block text-sm font-semibold text-[var(--gold)] not-italic">
            — {author}
          </cite>
        </blockquote>
        <div className="mt-8 flex justify-center" aria-hidden>
          <span className="text-2xl text-[var(--gold)]">★ ★ ★ ★ ★</span>
        </div>
      </div>
    </section>
  );
}
