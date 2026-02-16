import Image from "next/image";
import Link from "next/link";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import type { Locale } from "@/lib/i18n";

const ABOUT_GALLERY = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
  "https://images.unsplash.com/photo-1521590832167-7228f5d10568?w=800&q=80",
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);
  const base = `/${locale}`;
  const about = t.about as Record<string, string | undefined>;
  const hasTeam = siteConfig.team && siteConfig.team.length > 0;
  const foundedYear = siteConfig.foundedYear;

  return (
    <div className="flex flex-col">
      <section className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">{locale === "en" ? "About" : "Nosotros"}</p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            {t.about.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
          {foundedYear && (
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {locale === "en" ? `Since ${foundedYear}` : `Desde ${foundedYear}`}
            </p>
          )}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950">
              {t.about.storyTitle}
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              {t.about.story}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up">
            <h2 className="mt-16 font-heading text-2xl font-semibold tracking-tight text-gray-950">
              {t.about.valuesTitle}
            </h2>
          </AnimateOnScroll>
          <ul className="mt-8 space-y-6">
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: t.about.value1Title, body: t.about.value1 },
              { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", title: t.about.value2Title, body: t.about.value2 },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: t.about.value3Title, body: t.about.value3 },
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <li className="flex gap-5 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-md)]">
                  <div className="shrink-0 mt-0.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={item.icon} />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-gray-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{item.body}</p>
                  </div>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* Our space — gallery */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <header className="mb-12 text-center md:mb-16">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
                {about.ourSpaceTitle ?? "Our space"}
              </h2>
              <p className="mt-2 text-gray-600">
                {about.ourSpaceSubtitle ?? "Where we do what we love."}
              </p>
            </header>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <GalleryLightbox images={ABOUT_GALLERY} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Meet the team — optional, from config */}
      {hasTeam && (
        <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimateOnScroll animation="fade-up">
              <header className="mb-12 text-center md:mb-16">
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
                  {about.teamTitle ?? "Meet the team"}
                </h2>
                <p className="mt-2 text-gray-600">
                  {about.teamSubtitle ?? "The people behind the chair."}
                </p>
              </header>
            </AnimateOnScroll>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.team.map((member, i) => (
                <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                  <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-lg)] hover:-translate-y-1">
                    {member.imageUrl ? (
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                        <Image
                          src={member.imageUrl}
                          alt=""
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                        <span className="text-6xl font-heading font-bold text-gold/40">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="p-6 text-center">
                      <h3 className="font-heading text-xl font-semibold text-gray-950">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-vice-pink">{member.role}</p>
                      {(member as { bio?: string }).bio && (
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                          {(member as { bio: string }).bio}
                        </p>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Policies */}
      <section id="policies" className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
              {about.policiesTitle ?? "Policies"}
            </h2>
            <p className="mt-2 text-gray-600">
              {about.policiesIntro ?? "A few things to know before your visit."}
            </p>
          </AnimateOnScroll>
          <ul className="mt-8 space-y-6">
            {[
              { title: about.policiesCancellationTitle ?? "Cancellations", body: about.policiesCancellationBody ?? "" },
              { title: about.policiesLateTitle ?? "Late arrivals", body: about.policiesLateBody ?? "" },
              { title: about.policiesKidsTitle ?? "Kids", body: about.policiesKidsBody ?? "" },
            ].map((policy, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <li className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-md)]">
                  <h3 className="font-heading text-lg font-semibold text-gray-950">
                    {policy.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{policy.body}</p>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
              {locale === "en" ? "Come see us" : "Ven a visitarnos"}
            </h2>
            <p className="mt-3 text-gray-600">
              {locale === "en"
                ? "We'd love to meet you. Book an appointment or just walk in."
                : "Nos encantar\u00eda conocerte. Reserva una cita o pasa cuando quieras."}
            </p>
            <Link
              href={`${base}/book`}
              className="btn-shimmer mt-8 inline-flex items-center justify-center rounded-xl bg-vice-pink px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-vice-pink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vice-pink)] focus-visible:ring-offset-2"
            >
              {locale === "en" ? "Book an appointment" : "Reservar cita"}
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
