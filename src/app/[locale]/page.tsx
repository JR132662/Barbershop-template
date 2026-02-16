import Link from "next/link";
import Image from "next/image";
import { getMessages } from "@/lib/i18n";
import { interpolate } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { serviceIds } from "@/config/site";
import { FAQ } from "@/components/FAQ";
import { HeroLogo } from "@/components/HeroLogo";
import type { Locale } from "@/lib/i18n";
import type { ServiceId } from "@/config/site";

// Content-rich imagery: multiple distinct photos so the site feels custom, not template
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1400&q=85";
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
];
// One image per preview card; Men's Haircut (first) uses barber-cutting-hair shot
const SERVICES_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80", // barber cutting hair — Men's Haircut
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80", // barber tools — Beard trim
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80", // barbershop interior — Hot towel shave
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80", // barber at work — Hair & Beard
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
                <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                  <span className="text-vice-pink" aria-hidden>★</span>
                  <span>{rating}</span>
                  <span className="text-gray-400">·</span>
                  <span>{reviewCount} reviews</span>
                </p>
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
                  className="inline-flex items-center justify-center rounded-xl bg-vice-pink px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-vice-pink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vice-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
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
                <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                  <span className="text-vice-pink" aria-hidden>★</span>
                  <span>{rating}</span>
                  <span className="text-gray-400">·</span>
                  <span>{reviewCount} reviews</span>
                </p>
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
                  className="inline-flex items-center justify-center rounded-xl bg-vice-pink px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-vice-pink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vice-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
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
      </section>

      {/* Gallery — “Our space”: imagery-first, no generic “A cut above” block */}
      <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mb-14 text-center md:mb-20">
            <p className="section-label">{home.galleryTitle ?? "Our space"}</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              Where craft meets comfort
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              {home.gallerySubtitle ?? "Where craft meets comfort."}
            </p>
          </header>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:gap-6">
            {GALLERY_IMAGES.map((src, i) => (
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

      {/* Pull quote */}
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

      {/* Services preview */}
      <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mb-14 text-center md:mb-20">
            <p className="section-label">{home.servicesPreviewTitle ?? "What we offer"}</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              Classic services, modern precision
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              {home.servicesPreviewSubtitle ?? "Classic services, modern precision."}
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {previewServiceIds.map((id, i) => {
              const s = servicesSection[id];
              const name = s?.name ?? id;
              const desc = s?.description ?? "";
              return (
                <Link
                  key={id}
                  href={`${base}/services`}
                  className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-lg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[3/2] bg-gray-100 overflow-hidden">
                    <Image
                      src={SERVICES_IMAGES[i % SERVICES_IMAGES.length]}
                      alt=""
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
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
              );
            })}
          </div>
          <div className="mt-14 text-center">
            <Link
              href={`${base}/services`}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gold bg-transparent px-6 py-3 font-semibold text-gold transition hover:bg-gold hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              {home.servicesPreviewCta ?? "View all services"}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
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
            {[
              { title: home.whyChooseUs1Title ?? "Skilled barbers", body: home.whyChooseUs1Body ?? "" },
              { title: home.whyChooseUs2Title ?? "Clean & comfortable", body: home.whyChooseUs2Body ?? "" },
              { title: home.whyChooseUs3Title ?? "Fair pricing", body: home.whyChooseUs3Body ?? "" },
              { title: home.whyChooseUs4Title ?? "Walk-ins welcome", body: home.whyChooseUs4Body ?? "" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-md)]"
              >
                <h3 className="font-heading text-lg font-semibold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mb-14 text-center md:mb-20">
            <p className="section-label">{home.whatToExpectTitle ?? "What to expect"}</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              Your visit, step by step
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              {home.whatToExpectSubtitle ?? "Your visit, step by step."}
            </p>
          </header>
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { num: 1, title: home.whatToExpect1Title ?? "Check in", body: home.whatToExpect1Body ?? "" },
              { num: 2, title: home.whatToExpect2Title ?? "Consult", body: home.whatToExpect2Body ?? "" },
              { num: 3, title: home.whatToExpect3Title ?? "Relax & enjoy", body: home.whatToExpect3Body ?? "" },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-xl font-bold text-gray-900 shadow-[var(--shadow)]" aria-hidden>
                  {step.num}
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-gray-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 max-w-xs mx-auto">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit us */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
                  className="inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3.5 font-semibold text-gray-900 shadow-[var(--shadow)] transition hover:bg-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  {t.home.bookAppointment}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[var(--border)] bg-white py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <header className="mb-12 text-center">
            <p className="section-label">{home.faqTitle ?? "Frequently asked questions"}</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              Got questions? We've got answers.
            </h2>
          </header>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* From the shop */}
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
            {[
              { title: home.fromTheShop1Title ?? "How often should you get a haircut?", excerpt: home.fromTheShop1Excerpt ?? "" },
              { title: home.fromTheShop2Title ?? "Beard maintenance between visits", excerpt: home.fromTheShop2Excerpt ?? "" },
              { title: home.fromTheShop3Title ?? "What to ask for when you don't know the name", excerpt: home.fromTheShop3Excerpt ?? "" },
            ].map((item, i) => (
              <article key={i} className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-md)]">
                <h3 className="font-heading text-lg font-semibold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured testimonial */}
      <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="section-label">{t.home.testimonialTitle}</p>
          <p className="mt-2 text-sm font-medium text-gray-500">
            {home.testimonialSubtitle ?? "Real people, real cuts."}
          </p>
          <blockquote className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
            <p className="font-heading text-xl font-medium leading-relaxed text-gray-700 sm:text-2xl md:text-3xl">
              {(home.featuredTestimonial as string) ?? t.home.testimonial1}
            </p>
            <cite className="mt-6 block text-sm font-semibold text-gold not-italic">
              {home.featuredTestimonialAuthor ?? t.home.testimonial1Author}
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Short testimonials */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { quote: t.home.testimonial1, author: t.home.testimonial1Author },
              { quote: t.home.testimonial2, author: t.home.testimonial2Author },
              { quote: t.home.testimonial3, author: t.home.testimonial3Author },
            ].map((tst, i) => (
              <blockquote key={i} className="rounded-2xl border border-[var(--border)] bg-white p-6 text-center shadow-[var(--shadow-sm)]">
                <p className="text-gray-600">"{tst.quote}"</p>
                <cite className="mt-4 block text-sm font-medium text-gray-800 not-italic">
                  {tst.author}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
