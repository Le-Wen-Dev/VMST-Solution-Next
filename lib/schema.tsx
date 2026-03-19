export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VMST Solutions",
  url: "https://vmst.com.vn",
  logo: "https://vmst.com.vn/image/logo-vmst-ne.svg",
  description: "Công ty TNHH Giải pháp Công nghệ VMST Việt Nam – Thiết kế website, ERP Odoo, CRM, Cloud VPS và Digital Marketing.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "465 HT 13, P. Hiệp Thành",
    addressLocality: "Quận 12",
    addressRegion: "TP. Hồ Chí Minh",
    addressCountry: "VN",
  },
  telephone: ["+84822636676", "+84832575905"],
  email: "support@vmst.media",
  taxID: "0318994441",
  sameAs: [
    "https://www.facebook.com/vmstsolutionsvietnam",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VMST Solutions",
  url: "https://vmst.com.vn",
  publisher: {
    "@type": "Organization",
    name: "VMST Solutions",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VMST Solutions",
  url: "https://vmst.com.vn",
  telephone: "+84822636676",
  email: "support@vmst.media",
  address: {
    "@type": "PostalAddress",
    streetAddress: "465 HT 13, P. Hiệp Thành",
    addressLocality: "Quận 12",
    addressRegion: "TP. Hồ Chí Minh",
    addressCountry: "VN",
  },
  openingHours: "Mo-Sa 08:00-18:00",
  priceRange: "$$",
};
