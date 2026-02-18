import type { HomeSectionContext } from "../types";

/**
 * Why choose us variant 3: Dark panel with gold-accent cards. Use section ID "why-choose-us-v3" in homeSections.
 */
export function WhyChooseUsSectionV3({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const items = [
    { title: home.whyChooseUs1Title ?? "Skilled barbers", body: home.whyChooseUs1Body ?? "" },
    { title: home.whyChooseUs2Title ?? "Clean & comfortable", body: home.whyChooseUs2Body ?? "" },
    { title: home.whyChooseUs3Title ?? "Fair pricing", body: home.whyChooseUs3Body ?? "" },
    { title: home.whyChooseUs4Title ?? "Walk-ins welcome", body: home.whyChooseUs4Body ?? "" },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-gray-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            {home.whyChooseUsTitle ?? "Why choose us"}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
            We're more than a quick stop for a cut
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            {home.whyChooseUsSubtitle ?? "We're more than a quick stop for a cut."}
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-[var(--gold)]/30 hover:bg-white/10"
            >
              <span
                className="inline-block h-8 w-1 rounded-full bg-[var(--gold)]"
                aria-hidden
              />
              <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
