import Image from "next/image";
import Link from "next/link";
import { getMessages } from "@/lib/i18n";
import { serviceIds, servicePrices } from "@/config/site";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import type { Locale } from "@/lib/i18n";

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=700&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=700&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80",
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);
  const base = `/${locale}`;
  const servicesSection = t.services as Record<
    string,
    { name?: string; description?: string; duration?: string }
  >;
  const services = serviceIds.map((id) => {
    const s = servicesSection[id];
    return {
      id,
      name: s?.name ?? id,
      description: s?.description ?? "",
      duration: s?.duration ?? "",
      price: servicePrices[id],
    };
  });

  return (
    <div className="flex flex-col">
      <section className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">{locale === "en" ? "Services" : "Servicios"}</p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            {t.services.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          {"whatToExpectIntro" in t.services && typeof (t.services as { whatToExpectIntro?: string }).whatToExpectIntro === "string" && (
            <AnimateOnScroll animation="fade-up">
              <p className="mb-14 max-w-2xl text-gray-600 leading-relaxed">
                {(t.services as { whatToExpectIntro: string }).whatToExpectIntro}
              </p>
            </AnimateOnScroll>
          )}
          <ul className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.id} animation="fade-up" delay={i * 75}>
                <li className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-lg)] hover:-translate-y-1">
                  <div className="relative aspect-[3/2] bg-gray-100 overflow-hidden">
                    <Image
                      src={SERVICE_IMAGES[i % SERVICE_IMAGES.length]}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    {s.price && (
                      <span className="absolute top-3 right-3 rounded-full bg-gray-900/80 px-4 py-1.5 text-base font-bold text-white backdrop-blur-sm">
                        ${s.price}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h2 className="font-heading text-xl font-semibold text-gray-950">
                        {s.name}
                      </h2>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-gold">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {s.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-600 leading-relaxed">{s.description}</p>
                  </div>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up">
            <div className="mt-16 rounded-2xl bg-gray-900 p-8 text-center md:p-12">
              <h2 className="font-heading text-2xl font-semibold text-white md:text-3xl">
                {locale === "en" ? "Ready to book?" : "\u00bfListo para reservar?"}
              </h2>
              <p className="mt-3 text-gray-400">
                {locale === "en"
                  ? "Choose your service and pick a time that works for you."
                  : "Elige tu servicio y escoge el horario que te quede mejor."}
              </p>
              <Link
                href={`${base}/book`}
                className="btn-shimmer pulse-glow mt-8 inline-flex items-center justify-center rounded-xl bg-vice-pink px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-vice-pink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vice-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                {locale === "en" ? "Book an appointment" : "Reservar cita"}
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
