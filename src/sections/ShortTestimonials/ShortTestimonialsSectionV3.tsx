import type { HomeSectionContext } from "../types";

/**
 * Short testimonials variant 3: Dark panel with gold-accent cards. Use section ID "short-testimonials-v3" in homeSections.
 */
export function ShortTestimonialsSectionV3({ t }: HomeSectionContext) {
  const items = [
    { quote: t.home.testimonial1, author: t.home.testimonial1Author },
    { quote: t.home.testimonial2, author: t.home.testimonial2Author },
    { quote: t.home.testimonial3, author: t.home.testimonial3Author },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-gray-950 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((tst, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-[var(--gold)]/30"
            >
              <p className="text-gray-300">"{tst.quote}"</p>
              <cite className="mt-4 block text-sm font-semibold text-[var(--gold)] not-italic">
                {tst.author}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
