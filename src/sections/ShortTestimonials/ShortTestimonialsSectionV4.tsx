import type { HomeSectionContext } from "../types";

/**
 * Short testimonials variant 4: Single row, minimal cards. Use section ID "short-testimonials-v4" in homeSections.
 */
export function ShortTestimonialsSectionV4({ t }: HomeSectionContext) {
  const items = [
    { quote: t.home.testimonial1, author: t.home.testimonial1Author },
    { quote: t.home.testimonial2, author: t.home.testimonial2Author },
    { quote: t.home.testimonial3, author: t.home.testimonial3Author },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {items.map((tst, i) => (
            <blockquote
              key={i}
              className="rounded-2xl bg-white p-6 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow)]"
            >
              <span className="text-3xl font-serif text-gold/40" aria-hidden>
                "
              </span>
              <p className="mt-2 text-gray-600">"{tst.quote}"</p>
              <cite className="mt-4 block text-sm font-medium text-gray-800 not-italic">
                {tst.author}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
