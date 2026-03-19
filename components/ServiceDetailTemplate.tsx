"use client";

import { ReactNode } from "react";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check, ArrowLeft, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PricingTier {
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroDesc: string;
  problemTitle: string;
  problems: string[];
  solutionTitle: string;
  solutions: string[];
  features: { title: string; desc: string }[];
  process: { num: string; title: string; desc: string }[];
  contentBlocks: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: { title: string; path: string }[];
  pricingTiers?: PricingTier[];
}

const ServiceDetailTemplate = ({
  title, subtitle, heroDesc, problemTitle, problems,
  solutionTitle, solutions, features, process,
  contentBlocks, faqs, relatedServices, pricingTiers,
}: ServicePageProps) => {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": title,
        "description": subtitle + ". " + heroDesc,
        "provider": {
          "@type": "Organization",
          "name": "VMST Solutions",
          "url": "https://vmstsolutions.com",
        },
        ...(pricingTiers && pricingTiers.length > 0 ? {
          "offers": pricingTiers.map((t) => ({
            "@type": "Offer",
            "name": t.name,
            "price": t.price,
            "priceCurrency": "VND",
            "description": t.features.join(", "),
          })),
        } : {}),
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://vmstsolutions.com/" },
          { "@type": "ListItem", "position": 2, "name": "Dịch vụ", "item": "https://vmstsolutions.com/dich-vu" },
          { "@type": "ListItem", "position": 3, "name": title },
        ],
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {/* Hero */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-4xl">
          <Link href="/dich-vu" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" /> Tất cả dịch vụ
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-2">{subtitle}</p>
          <p className="text-muted-foreground leading-relaxed mb-6">{heroDesc}</p>
          <Button size="lg" asChild>
            <Link href="/lien-he">Nhận tư vấn miễn phí <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Problems */}
      <ScrollAnimate>
        <section className="py-16 md:py-20">
          <div className="container max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{problemTitle}</h2>
                <ul className="space-y-4">
                  {problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-destructive">{i + 1}</span>
                      </div>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{solutionTitle}</h2>
                <ul className="space-y-4">
                  {solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* Features */}
      <ScrollAnimate>
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Tính năng nổi bật</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((f) => (
                <div key={f.title} className="bg-background rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* Pricing Tiers */}
      {pricingTiers && pricingTiers.length > 0 && (
        <ScrollAnimate>
          <section className="py-16 md:py-20">
            <div className="container">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Bảng giá dịch vụ</h2>
              <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Chọn gói phù hợp với nhu cầu và ngân sách doanh nghiệp của bạn</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`relative rounded-2xl border p-6 flex flex-col ${
                      tier.highlight
                        ? "bg-primary/[0.03] border-primary/30 ring-1 ring-primary/10 shadow-lg"
                        : "bg-card"
                    }`}
                  >
                    {tier.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          <Star className="h-3 w-3 fill-current" /> Phổ biến nhất
                        </span>
                      </div>
                    )}
                    <h3 className="font-bold text-sm mb-1">{tier.name}</h3>
                    <div className="text-2xl font-bold mb-4">{tier.price}</div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={tier.highlight ? "default" : "outline"} size="sm" className="w-full">
                      <Link href="/lien-he">Liên hệ tư vấn</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimate>
      )}

      {/* Process */}
      <ScrollAnimate>
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Quy trình triển khai</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {process.map((s, i) => (
                <div key={s.num} className="relative text-center p-6">
                  <div className="text-5xl font-bold text-primary/10 mb-2">{s.num}</div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3">
                      <ArrowRight className="h-5 w-5 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* Content blocks (SEO) */}
      <ScrollAnimate>
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container max-w-4xl">
            {contentBlocks.map((block, i) => (
              <div key={i} className="mb-10 last:mb-0">
                <h2 className="text-xl md:text-2xl font-bold mb-4">{block.heading}</h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{block.body}</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimate>

      {/* FAQ */}
      <ScrollAnimate>
        <section className="py-16 md:py-20">
          <div className="container max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Câu hỏi thường gặp</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border px-6">
                  <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </ScrollAnimate>

      {/* Related services */}
      <ScrollAnimate>
        <section className="py-12 bg-secondary">
          <div className="container">
            <h3 className="text-lg font-bold text-center mb-6">Dịch vụ liên quan</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedServices.map((s) => (
                <Button key={s.path} variant="outline" asChild>
                  <Link href={s.path}>{s.title}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
            Bắt đầu dự án {title} ngay hôm nay
          </h2>
          <p className="text-primary-foreground/80 mb-6">Liên hệ VMST Solutions để nhận báo giá và tư vấn miễn phí.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/lien-he">Liên hệ ngay <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailTemplate;
