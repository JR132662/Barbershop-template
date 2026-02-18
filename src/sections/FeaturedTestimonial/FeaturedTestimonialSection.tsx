import type { HomeSectionContext } from "../types";

export function FeaturedTestimonialSection({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="section-label">{t.home.testimonialTitle}</p>
        <p className="mt-2 text-sm font-medium text-gray-500">
          {home.testimonialSubtitle ?? "Real people, real cuts."}
        </p>
        <blockquote className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
          <p className="font-heading text-xl font-medium leading-relaxed text-gray-700 sm:text-2xl md:text-3xl">
            {(home.featuredTestimonial as string) ?? t.home.testimonial1}
          </p>
          <cite className="mt-6 block text-sm font-semibold text-gold not-italic">
            {home.featuredTestimonialAuthor ?? t.home.testimonial1Author}
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
