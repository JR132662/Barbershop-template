import type { HomeSectionContext } from "../types";

/**
 * Short testimonials variant 2: Vertical stack with left-aligned quotes. Use section ID "short-testimonials-v2" in homeSections.
 */
export function ShortTestimonialsSectionV2({ t }: HomeSectionContext) {
  const items = [
    { quote: t.home.testimonial1, author: t.home.testimonial1Author },
    { quote: t.home.testimonial2, author: t.home.testimonial2Author },
    { quote: t.home.testimonial3, author: t.home.testimonial3Author },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="space-y-10">
          {items.map((tst, i) => (
            <blockquote
              key={i}
              className="border-l-4 border-gold pl-6 md:pl-8"
            >
              <p className="font-heading text-lg font-medium text-gray-800 md:text-xl">
                "{tst.quote}"
              </p>
              <cite className="mt-4 block text-sm font-semibold text-gold not-italic">
                — {tst.author}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
