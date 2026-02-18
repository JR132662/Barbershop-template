import type { HomeSectionContext } from "../types";

/**
 * Featured testimonial variant 2: Split layout — quote on left, author block on right. Use section ID "featured-testimonial-v2" in homeSections.
 */
export function FeaturedTestimonialSectionV2({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const quote = (home.featuredTestimonial as string) ?? t.home.testimonial1;
  const author = home.featuredTestimonialAuthor ?? t.home.testimonial1Author;

  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-label text-center">{t.home.testimonialTitle}</p>
        <p className="mt-2 text-center text-sm font-medium text-gray-500">
          {home.testimonialSubtitle ?? "Real people, real cuts."}
        </p>
        <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow-lg)] md:grid md:grid-cols-5">
          <div className="flex flex-col justify-center p-8 md:col-span-3 md:p-12">
            <blockquote>
              <p className="font-heading text-xl font-medium leading-relaxed text-gray-700 sm:text-2xl md:text-3xl">
                "{quote}"
              </p>
            </blockquote>
          </div>
          <div className="border-t border-[var(--border)] bg-gold/5 p-8 md:col-span-2 md:border-t-0 md:border-l md:flex md:flex-col md:justify-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Customer story
            </p>
            <cite className="mt-3 block text-lg font-semibold text-gray-950 not-italic">
              {author}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
