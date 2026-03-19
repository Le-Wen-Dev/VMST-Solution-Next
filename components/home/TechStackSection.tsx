"use client";

import ScrollAnimate from "@/components/ScrollAnimate";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Odoo", category: "ERP" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
];

const partners = [
  "Google Partner",
  "Meta Business Partner",
  "Odoo Silver Partner",
  "Cloudflare Partner",
];

const TechStackSection = () => (
  <section className="py-16 md:py-24 bg-secondary/40">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Công nghệ và đối tác
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Chúng tôi sử dụng các công nghệ hiện đại và là đối tác chính thức của các nền tảng hàng đầu.
        </p>
      </div>

      <ScrollAnimate>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-12 max-w-3xl mx-auto">
          {technologies.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center justify-center p-3.5 rounded-xl border bg-card text-center"
            >
              <span className="font-semibold text-sm">{t.name}</span>
              <span className="text-[10px] text-muted-foreground mt-0.5">{t.category}</span>
            </div>
          ))}
        </div>
      </ScrollAnimate>

      <ScrollAnimate>
        <div className="flex flex-wrap justify-center gap-3">
          {partners.map((p) => (
            <span
              key={p}
              className="px-5 py-2.5 rounded-full bg-card border text-sm font-medium text-foreground"
            >
              {p}
            </span>
          ))}
        </div>
      </ScrollAnimate>
    </div>
  </section>
);

export default TechStackSection;
