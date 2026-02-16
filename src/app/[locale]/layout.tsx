import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMessages } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n";

const locales: Locale[] = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: `${siteConfig.businessName} | ${isEn ? "Quality Cuts & Friendly Service" : "Cortes de calidad y servicio amable"}`,
    description: siteConfig.tagline,
    openGraph: {
      title: siteConfig.businessName,
      description: siteConfig.tagline,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const messages = getMessages(locale as Locale);
  const announcement = (siteConfig as unknown as { announcement?: { message: string; linkText?: string } }).announcement;
  const showAnnouncement = announcement && announcement.message;

  return (
    <>
      {showAnnouncement && (
        <AnnouncementBar
          message={announcement.message}
          linkText={announcement.linkText}
          linkHref={`/${locale}/book`}
        />
      )}
      <Header locale={locale as Locale} messages={messages} />
      <main className="min-h-[calc(100vh-10rem)] flex flex-col">{children}</main>
      <Footer locale={locale as Locale} messages={messages} />
      <BackToTop />
    </>
  );
}
