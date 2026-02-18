import type { HomeSectionContext } from "../types";

export function PullQuoteSection({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <blockquote>
          <p className="font-heading text-2xl font-medium leading-relaxed text-gray-800 sm:text-3xl md:text-4xl">
            {home.pullQuote ?? "Every visit is an experience — not just a cut."}
          </p>
          <footer className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold">
            {home.pullQuoteAttribution ?? "Our promise to you"}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
