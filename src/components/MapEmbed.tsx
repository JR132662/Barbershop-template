import { siteConfig } from "@/config/site";

export function MapEmbed({ className = "" }: { className?: string }) {
  const address = `${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;
  const query = encodeURIComponent(address);

  return (
    <div className={`overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow-lg)] ${className}`}>
      <iframe
        title="Location map"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  );
}
