import en from "@/messages/en.json";
import es from "@/messages/es.json";

export type Locale = "en" | "es";
export type Messages = typeof en;

const messages: Record<Locale, Messages> = {
  en,
  es: es as Messages,
};

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages.en;
}

export function getLocaleFromPath(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  if (segment === "en" || segment === "es") return segment;
  return null;
}

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

/** Replace {businessName} etc. in strings */
export function interpolate(
  text: string,
  vars: Record<string, string>
): string {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replace(new RegExp(`\\{${key}\\}`, "g"), value),
    text
  );
}
