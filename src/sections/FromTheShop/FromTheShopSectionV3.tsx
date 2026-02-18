import type { HomeSectionContext } from "../types";

/**
 * From the shop variant 3: Dark panel with gold-accent cards. Use section ID "from-the-shop-v3" in homeSections.
 */
export function FromTheShopSectionV3({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const items = [
    {
      title: home.fromTheShop1Title ?? "How often should you get a haircut?",
      excerpt: home.fromTheShop1Excerpt ?? "",
    },
    {
      title: home.fromTheShop2Title ?? "Beard maintenance between visits",
      excerpt: home.fromTheShop2Excerpt ?? "",
    },
    {
      title: home.fromTheShop3Title ?? "What to ask for when you don't know the name",
      excerpt: home.fromTheShop3Excerpt ?? "",
    },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-gray-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            {home.fromTheShopTitle ?? "From the shop"}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Tips and updates from our barbers
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            {home.fromTheShopSubtitle ?? "Tips and updates from our barbers."}
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <article
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
              <p className="mt-3 text-gray-400 leading-relaxed">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
