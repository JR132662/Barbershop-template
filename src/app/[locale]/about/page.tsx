import Image from "next/image";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n";

const ABOUT_GALLERY = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);
  const about = t.about as Record<string, string | undefined>;
  const hasTeam = siteConfig.team && siteConfig.team.length > 0;
  const foundedYear = siteConfig.foundedYear;

  return (
    <div className="flex flex-col">
      <section className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">About</p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            {t.about.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
          {foundedYear && (
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-gold">
              Since {foundedYear}
            </p>
          )}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950">
            {t.about.storyTitle}
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            {t.about.story}
          </p>

          <h2 className="mt-16 font-heading text-2xl font-semibold tracking-tight text-gray-950">
            {t.about.valuesTitle}
          </h2>
          <ul className="mt-8 space-y-6">
            <li className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
              <h3 className="font-heading text-lg font-semibold text-gray-950">
                {t.about.value1Title}
              </h3>
              <p className="mt-2 text-gray-600">{t.about.value1}</p>
            </li>
            <li className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
              <h3 className="font-heading text-lg font-semibold text-gray-950">
                {t.about.value2Title}
              </h3>
              <p className="mt-2 text-gray-600">{t.about.value2}</p>
            </li>
            <li className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
              <h3 className="font-heading text-lg font-semibold text-gray-950">
                {t.about.value3Title}
              </h3>
              <p className="mt-2 text-gray-600">{t.about.value3}</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Our space — gallery */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mb-12 text-center md:mb-16">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
              {about.ourSpaceTitle ?? "Our space"}
            </h2>
            <p className="mt-2 text-gray-600">
              {about.ourSpaceSubtitle ?? "Where we do what we love."}
            </p>
          </header>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:gap-6">
            {ABOUT_GALLERY.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-[var(--shadow)]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team — optional, from config */}
      {hasTeam && (
        <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="mb-12 text-center md:mb-16">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
                {about.teamTitle ?? "Meet the team"}
              </h2>
              <p className="mt-2 text-gray-600">
                {about.teamSubtitle ?? "The people behind the chair."}
              </p>
            </header>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.team.map((member, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-[var(--shadow)]"
                >
                  {member.imageUrl ? (
                    <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src={member.imageUrl}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gold/20 text-3xl font-heading font-semibold text-gold">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="mt-4 font-heading text-lg font-semibold text-gray-950">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Policies */}
      <section id="policies" className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
            {about.policiesTitle ?? "Policies"}
          </h2>
          <p className="mt-2 text-gray-600">
            {about.policiesIntro ?? "A few things to know before your visit."}
          </p>
          <ul className="mt-8 space-y-6">
            <li className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
              <h3 className="font-heading text-lg font-semibold text-gray-950">
                {about.policiesCancellationTitle ?? "Cancellations"}
              </h3>
              <p className="mt-2 text-gray-600">
                {about.policiesCancellationBody ?? ""}
              </p>
            </li>
            <li className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
              <h3 className="font-heading text-lg font-semibold text-gray-950">
                {about.policiesLateTitle ?? "Late arrivals"}
              </h3>
              <p className="mt-2 text-gray-600">
                {about.policiesLateBody ?? ""}
              </p>
            </li>
            <li className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
              <h3 className="font-heading text-lg font-semibold text-gray-950">
                {about.policiesKidsTitle ?? "Kids"}
              </h3>
              <p className="mt-2 text-gray-600">
                {about.policiesKidsBody ?? ""}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
