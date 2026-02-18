import type { HomeSectionContext } from "../types";

export function FromTheShopSection({ t }: HomeSectionContext) {
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
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="section-label">{home.fromTheShopTitle ?? "From the shop"}</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Tips and updates from our barbers
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            {home.fromTheShopSubtitle ?? "Tips and updates from our barbers."}
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={i}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-md)]"
            >
              <h3 className="font-heading text-lg font-semibold text-gray-950">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
