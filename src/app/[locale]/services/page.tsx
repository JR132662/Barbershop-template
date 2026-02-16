import Image from "next/image";
import { getMessages } from "@/lib/i18n";
import { serviceIds } from "@/config/site";
import type { Locale } from "@/lib/i18n";

// Stock images for service cards — variety of barber/haircut shots
const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80", // barber cutting hair
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80", // barber tools
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=700&q=80", // barbershop interior
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80", // barber at work
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80", // tools / beard
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=700&q=80", // interior
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80", // haircut
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80", // shave / tools
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);
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
    };
  });

  return (
    <div className="flex flex-col">
      <section className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Services</p>
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
            <p className="mb-14 max-w-2xl text-gray-600 leading-relaxed">
              {(t.services as { whatToExpectIntro: string }).whatToExpectIntro}
            </p>
          )}
          <ul className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <li
                key={s.id}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-lg)]"
              >
                <div className="relative aspect-[3/2] bg-gray-100 overflow-hidden">
                  <Image
                    src={SERVICE_IMAGES[i % SERVICE_IMAGES.length]}
                    alt=""
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="font-heading text-xl font-semibold text-gray-950">
                      {s.name}
                    </h2>
                    <span className="text-sm font-semibold text-gold">{s.duration}</span>
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">{s.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
