import type { HomeSectionContext } from "../types";

export function ShortTestimonialsSection({ t }: HomeSectionContext) {
  const items = [
    { quote: t.home.testimonial1, author: t.home.testimonial1Author },
    { quote: t.home.testimonial2, author: t.home.testimonial2Author },
    { quote: t.home.testimonial3, author: t.home.testimonial3Author },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((tst, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 text-center shadow-[var(--shadow-sm)]"
            >
              <p className="text-gray-600">"{tst.quote}"</p>
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
