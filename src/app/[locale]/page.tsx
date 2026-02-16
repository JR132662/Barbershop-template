import Link from "next/link";
import Image from "next/image";
import { getMessages } from "@/lib/i18n";
import { interpolate } from "@/lib/i18n";
import { siteConfig, serviceIds, servicePrices } from "@/config/site";
import { FAQ } from "@/components/FAQ";
import { HeroLogo } from "@/components/HeroLogo";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { StatsCounter } from "@/components/StatsCounter";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import type { Locale } from "@/lib/i18n";
import type { ServiceId } from "@/config/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1400&q=85";
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
  "https://images.unsplash.com/photo-1521590832167-7228f5d10568?w=800&q=80",
];
const SERVICES_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
];
const VISIT_IMAGE =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=80";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);
  const base = `/${locale}`;
  const locationName = siteConfig.locationName;
  const showLocationName =
    typeof locationName === "string" && locationName.length > 0;
  const pageTitle = showLocationName
    ? `${siteConfig.businessName} — ${locationName}`
    : interpolate(t.home.heroTitle, { businessName: siteConfig.businessName });

  const home = t.home as Record<string, string | undefined>;
  const previewServiceIds = serviceIds.slice(0, 4) as ServiceId[];
  const servicesSection = t.services as Record<
    string,
    { name?: string; description?: string; duration?: string }
  >;

  const faqItems = [
    { question: home.faq1Q ?? "", answer: home.faq1A ?? "" },
    { question: home.faq2Q ?? "", answer: home.faq2A ?? "" },
    { question: home.faq3Q ?? "", answer: home.faq3A ?? "" },
    { question: home.faq4Q ?? "", answer: home.faq4A ?? "" },
    { question: home.faq5Q ?? "", answer: home.faq5A ?? "" },
  ].filter((item) => item.question && item.answer);

  const showLogo =
    typeof siteConfig.logoUrl === "string" && siteConfig.logoUrl.length > 0;
  const showRating =
    typeof (siteConfig as { rating?: number }).rating === "number" &&
    typeof (siteConfig as { reviewCount?: number }).reviewCount === "number";
  const rating = showRating ? (siteConfig as { rating: number }).rating : null;
  const reviewCount = showRating ? (siteConfig as { reviewCount: number }).reviewCount : null;

  const testimonials = [
    { quote: t.home.featuredTestimonial ?? t.home.testimonial1, author: (home.featuredTestimonialAuthor as string) ?? t.home.testimonial1Author, rating: 5 },
    { quote: t.home.testimonial1, author: t.home.testimonial1Author, rating: 5 },
    { quote: t.home.testimonial2, author: t.home.testimonial2Author, rating: 5 },
    { quote: t.home.testimonial3, author: t.home.testimonial3Author, rating: 5 },
  ];

  const statsLabels = locale === "en"
    ? { years: "Years in business", clients: "Happy clients", barbers: "Expert barbers", rating: "Star rating" }
    : { years: "A\u00f1os de servicio", clients: "Clientes satisfechos", barbers: "Barberos expertos", rating: "Calificaci\u00f3n" };

  const stats = [
    { value: new Date().getFullYear() - (siteConfig.foundedYear ?? 2018), suffix: "+", label: statsLabels.years },
    { value: 5000, suffix: "+", label: statsLabels.clients },
    { value: siteConfig.team.length, suffix: "", label: statsLabels.barbers },
    { value: 47, suffix: "", label: statsLabels.rating },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden md:min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/55 to-gray-950/35"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto flex min-h-[85vh] max-w-4xl flex-col justify-end px-4 pb-20 pt-24 text-center md:min-h-screen md:justify-center md:pb-24 md:pt-32">
          {showLogo ? (
            <>
              <HeroLogo
                logoUrl={siteConfig.logoUrl}
                businessName={siteConfig.businessName}
              />
              {showLocationName && (
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-vice-pink md:text-sm">
                  {locationName}
                </p>
              )}
              {showRating && rating !== null && reviewCount !== null && (
                <div className="mt-3 flex justify-center">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                    <span className="text-vice-pink" aria-hidden>&#9733;</span>
                    <span>{rating}</span>
                    <span className="text-gray-400">&middot;</span>
                    <span>{reviewCount} {locale === "en" ? "reviews" : "rese\u00f1as"}</span>
                  </p>
                </div>
              )}
              <p className="mt-4 max-w-xl mx-auto text-base text-gray-300 sm:text-lg md:text-xl">
                {t.home.heroSubtitle}
              </p>
              {t.home.heroTagline && (
                <p className="mt-2 max-w-lg mx-auto text-sm text-gray-400">
                  {t.home.heroTagline}
                </p>
              )}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  href={`${base}/book`}
                  className="btn-shimmer pulse-glow inline-flex items-center justify-center rounded-xl bg-vice-pink px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-vice-pink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vice-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  {t.home.ctaBook}
                </Link>
                <Link
                  href={`${base}/services`}
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)] bg-white/5 px-8 py-3.5 font-semibold text-[var(--gold)] backdrop-blur-sm transition hover:bg-[var(--gold)]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  {t.home.ctaServices}
                </Link>
              </div>
            </>
          ) : (
            <>
              {showLocationName && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-vice-pink md:text-sm">
                  {locationName}
                </p>
              )}
              <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {showLocationName ? siteConfig.businessName : pageTitle}
              </h1>
              {showRating && rating !== null && reviewCount !== null && (
                <div className="mt-3 flex justify-center">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                    <span className="text-vice-pink" aria-hidden>&#9733;</span>
                    <span>{rating}</span>
                    <span className="text-gray-400">&middot;</span>
                    <span>{reviewCount} {locale === "en" ? "reviews" : "rese\u00f1as"}</span>
                  </p>
                </div>
              )}
              <p className="mt-5 max-w-xl mx-auto text-base text-gray-300 sm:text-lg md:text-xl">
                {t.home.heroSubtitle}
              </p>
              {t.home.heroTagline && (
                <p className="mt-2 max-w-lg mx-auto text-sm text-gray-400">
                  {t.home.heroTagline}
                </p>
              )}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  href={`${base}/book`}
                  className="btn-shimmer pulse-glow inline-flex items-center justify-center rounded-xl bg-vice-pink px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-vice-pink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vice-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  {t.home.ctaBook}
                </Link>
                <Link
                  href={`${base}/services`}
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)] bg-white/5 px-8 py-3.5 font-semibold text-[var(--gold)] backdrop-blur-sm transition hover:bg-[var(--gold)]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  {t.home.ctaServices}
                </Link>
              </div>
            </>
          )}
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block" aria-hidden>
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs uppercase tracking-widest">{locale === "en" ? "Scroll" : "Desplazar"}</span>
            <div className="h-8 w-5 rounded-full border-2 border-white/30 flex justify-center pt-1">
              <div className="h-2 w-1 rounded-full bg-white/50 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gray-900 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <StatsCounter stats={stats} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Gallery — interactive lightbox */}
      <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <header className="mb-14 text-center md:mb-20">
              <p className="section-label">{home.galleryTitle ?? "Our space"}</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
                {locale === "en" ? "Where craft meets comfort" : "Donde el oficio se encuentra con la comodidad"}
              </h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                {home.gallerySubtitle ?? "Where craft meets comfort."}
              </p>
            </header>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <GalleryLightbox images={GALLERY_IMAGES} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <AnimateOnScroll animation="scale-in">
            <blockquote>
              <p className="font-heading text-2xl font-medium leading-relaxed text-gray-800 sm:text-3xl md:text-4xl">
                &ldquo;{home.pullQuote ?? "Every visit is an experience \u2014 not just a cut."}&rdquo;
              </p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold">
                {home.pullQuoteAttribution ?? "Our promise to you"}
              </footer>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services preview with prices */}
      <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <header className="mb-14 text-center md:mb-20">
              <p className="section-label">{home.servicesPreviewTitle ?? "What we offer"}</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
                {locale === "en" ? "Classic services, modern precision" : "Servicios cl\u00e1sicos, precisi\u00f3n moderna"}
              </h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                {home.servicesPreviewSubtitle ?? "Classic services, modern precision."}
              </p>
            </header>
          </AnimateOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {previewServiceIds.map((id, i) => {
              const s = servicesSection[id];
              const name = s?.name ?? id;
              const desc = s?.description ?? "";
              const price = servicePrices[id];
              return (
                <AnimateOnScroll key={id} animation="fade-up" delay={i * 100}>
                  <Link
                    href={`${base}/services`}
                    className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    <div className="relative aspect-[3/2] bg-gray-100 overflow-hidden">
                      <Image
                        src={SERVICES_IMAGES[i % SERVICES_IMAGES.length]}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {price && (
                        <span className="absolute top-3 right-3 rounded-full bg-gray-900/80 px-3 py-1 text-sm font-bold text-white backdrop-blur-sm">
                          ${price}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-semibold text-gray-950">
                        {name}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm text-gray-600">
                        {desc}
                      </p>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="mt-14 text-center">
              <Link
                href={`${base}/services`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-gold bg-transparent px-6 py-3 font-semibold text-gold transition hover:bg-gold hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                {home.servicesPreviewCta ?? "View all services"}
                <span aria-hidden>&#8594;</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <header className="mb-14 text-center md:mb-20">
              <p className="section-label">{home.whyChooseUsTitle ?? "Why choose us"}</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
                {locale === "en" ? "We're more than a quick stop for a cut" : "Somos m\u00e1s que un lugar para un corte"}
              </h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                {home.whyChooseUsSubtitle ?? "We're more than a quick stop for a cut."}
              </p>
            </header>
          </AnimateOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "M12 2L2 7v10l10 5 10-5V7L12 2z", title: home.whyChooseUs1Title ?? "Skilled barbers", body: home.whyChooseUs1Body ?? "" },
              { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", title: home.whyChooseUs2Title ?? "Clean & comfortable", body: home.whyChooseUs2Body ?? "" },
              { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: home.whyChooseUs3Title ?? "Fair pricing", body: home.whyChooseUs3Body ?? "" },
              { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", title: home.whyChooseUs4Title ?? "Walk-ins welcome", body: home.whyChooseUs4Body ?? "" },
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="group rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-md)] hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-gray-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <header className="mb-14 text-center md:mb-20">
              <p className="section-label">{home.whatToExpectTitle ?? "What to expect"}</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
                {locale === "en" ? "Your visit, step by step" : "Tu visita, paso a paso"}
              </h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                {home.whatToExpectSubtitle ?? "Your visit, step by step."}
              </p>
            </header>
          </AnimateOnScroll>
          <div className="relative grid gap-10 sm:grid-cols-3">
            {/* Connector line */}
            <div className="absolute top-7 left-[16.67%] right-[16.67%] hidden h-0.5 bg-gradient-to-r from-[var(--gold)] via-[var(--vice-pink)] to-[var(--gold)] sm:block" aria-hidden />
            {[
              { num: 1, title: home.whatToExpect1Title ?? "Check in", body: home.whatToExpect1Body ?? "" },
              { num: 2, title: home.whatToExpect2Title ?? "Consult", body: home.whatToExpect2Body ?? "" },
              { num: 3, title: home.whatToExpect3Title ?? "Relax & enjoy", body: home.whatToExpect3Body ?? "" },
            ].map((step, i) => (
              <AnimateOnScroll key={step.num} animation="fade-up" delay={i * 150}>
                <div className="relative text-center">
                  <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--vice-pink)] text-xl font-bold text-white shadow-lg" aria-hidden>
                    {step.num}
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-gray-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 max-w-xs mx-auto">
                    {step.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team */}
      {siteConfig.team.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimateOnScroll animation="fade-up">
              <header className="mb-14 text-center md:mb-20">
                <p className="section-label">{locale === "en" ? "Our team" : "Nuestro equipo"}</p>
                <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
                  {locale === "en" ? "Meet the barbers" : "Conoce a los barberos"}
                </h2>
                <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                  {locale === "en" ? "The skilled hands behind every great cut." : "Las manos expertas detr\u00e1s de cada gran corte."}
                </p>
              </header>
            </AnimateOnScroll>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.team.map((member, i) => (
                <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                  <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-lg)] hover:-translate-y-1">
                    {member.imageUrl ? (
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
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
                    <div className="p-6">
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

      {/* Visit us */}
      <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow-lg)] md:grid md:grid-cols-5">
              <div className="relative aspect-[2/1] md:col-span-2 md:aspect-auto md:min-h-[280px]">
                <Image
                  src={VISIT_IMAGE}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:col-span-3 md:p-12">
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
                  {home.visitUsTitle ?? "Visit us"}
                </h2>
                <p className="mt-2 text-gray-600">
                  {home.visitUsSubtitle ?? "Stop by or book ahead. We're here for you."}
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {t.home.hoursTitle}
                    </h3>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>Mon – Fri: {siteConfig.hours.monday}</li>
                      <li>Sat: {siteConfig.hours.saturday}</li>
                      <li>Sun: {siteConfig.hours.sunday}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {t.home.locationTitle}
                    </h3>
                    <p className="mt-2 text-gray-700">
                      {siteConfig.address.line1}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.state}{" "}
                      {siteConfig.address.zip}
                    </p>
                    {siteConfig.parkingInfo ? (
                      <p className="mt-2 text-sm text-gray-600">
                        {t.home.parkingTitle}: {siteConfig.parkingInfo}
                      </p>
                    ) : null}
                    <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {t.home.phoneLabel}
                    </h3>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                      className="mt-1 block font-medium text-gold hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href={`${base}/book`}
                    className="btn-shimmer inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3.5 font-semibold text-gray-900 shadow-[var(--shadow)] transition hover:bg-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    {t.home.bookAppointment}
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <header className="mb-12 text-center">
              <p className="section-label">{home.faqTitle ?? "Frequently asked questions"}</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
                {locale === "en" ? "Got questions? We've got answers." : "\u00bfPreguntas? Tenemos respuestas."}
              </h2>
            </header>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <FAQ items={faqItems} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* From the shop — tips */}
      <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <header className="mb-14 text-center md:mb-20">
              <p className="section-label">{home.fromTheShopTitle ?? "From the shop"}</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
                {locale === "en" ? "Tips and updates from our barbers" : "Consejos y novedades de nuestros barberos"}
              </h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                {home.fromTheShopSubtitle ?? "Tips and updates from our barbers."}
              </p>
            </header>
          </AnimateOnScroll>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: home.fromTheShop1Title ?? "How often should you get a haircut?", excerpt: home.fromTheShop1Excerpt ?? "" },
              { title: home.fromTheShop2Title ?? "Beard maintenance between visits", excerpt: home.fromTheShop2Excerpt ?? "" },
              { title: home.fromTheShop3Title ?? "What to ask for when you don't know the name", excerpt: home.fromTheShop3Excerpt ?? "" },
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <article className="group rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-md)] hover:-translate-y-1">
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-vice-pink/10 text-vice-pink text-sm font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-gray-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — carousel */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <header className="mb-12 text-center">
              <p className="section-label">{t.home.testimonialTitle}</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
                {home.testimonialSubtitle ?? "Real people, real cuts."}
              </h2>
            </header>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={100}>
            <TestimonialCarousel testimonials={testimonials} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gray-900 py-20 md:py-28">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              {locale === "en" ? "Ready for a fresh look?" : "\u00bfListo para un nuevo look?"}
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              {locale === "en"
                ? "Book your appointment today or walk in anytime."
                : "Reserva tu cita hoy o pasa cuando quieras."}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href={`${base}/book`}
                className="btn-shimmer pulse-glow inline-flex items-center justify-center rounded-xl bg-vice-pink px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-vice-pink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vice-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                {t.home.ctaBook}
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                {locale === "en" ? "Call us" : "Ll\u00e1manos"}: {siteConfig.phone}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
