import type { HomeSectionContext } from "../types";

export function WhyChooseUsSection({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const items = [
    { title: home.whyChooseUs1Title ?? "Skilled barbers", body: home.whyChooseUs1Body ?? "" },
    { title: home.whyChooseUs2Title ?? "Clean & comfortable", body: home.whyChooseUs2Body ?? "" },
    { title: home.whyChooseUs3Title ?? "Fair pricing", body: home.whyChooseUs3Body ?? "" },
    { title: home.whyChooseUs4Title ?? "Walk-ins welcome", body: home.whyChooseUs4Body ?? "" },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="section-label">{home.whyChooseUsTitle ?? "Why choose us"}</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            We're more than a quick stop for a cut
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            {home.whyChooseUsSubtitle ?? "We're more than a quick stop for a cut."}
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-md)]"
            >
              <h3 className="font-heading text-lg font-semibold text-gray-950">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
