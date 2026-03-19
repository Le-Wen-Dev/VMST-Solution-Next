"use client";

import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimate from "@/components/ScrollAnimate";

interface PricingTier {
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
}

const serviceDetails = [
  {
    title: "Thiết kế Website chuyên nghiệp",
    slug: "/dich-vu/thiet-ke-website",
    image: "/image/services/web-design.jpg",
    description: "VMST Solutions cung cấp dịch vụ thiết kế website chuyên nghiệp cho doanh nghiệp tại Việt Nam và quốc tế. Chúng tôi đã hoàn thành hơn 172 dự án website LLC tại Mỹ, 50+ website tại Singapore và 30+ dự án tại Úc.",
    reversed: false,
    tiers: [
      { name: "Starter", price: "5.000.000đ", features: ["Landing page 1 trang", "Responsive mobile", "SSL miễn phí", "Hosting 1 năm"] },
      { name: "Business", price: "15.000.000đ", highlight: true, features: ["Website 5-10 trang", "Chuẩn SEO on-page", "Google Analytics", "Bảo trì 6 tháng", "Tốc độ tải < 3s"] },
      { name: "Enterprise", price: "50.000.000đ", features: ["Website không giới hạn trang", "E-commerce tích hợp", "Multi-language", "Bảo trì 12 tháng", "Đội ngũ riêng", "SLA cam kết"] },
    ] as PricingTier[],
  },
  {
    title: "Digital Marketing & Google Ads",
    slug: "/dich-vu/digital-marketing",
    image: "/image/services/digital-marketing.jpg",
    description: "Dịch vụ Digital Marketing bao gồm quản lý chiến dịch Google Ads, Facebook Ads, và Content Marketing. Với hơn 200 campaigns đã triển khai, giúp doanh nghiệp giảm đến 40% chi phí CPA.",
    reversed: true,
    tiers: [
      { name: "Basic", price: "5.000.000đ/th", features: ["1 nền tảng quảng cáo", "Báo cáo hàng tháng", "Ngân sách ads < 10tr"] },
      { name: "Growth", price: "15.000.000đ/th", highlight: true, features: ["Google + Facebook Ads", "Báo cáo hàng tuần", "A/B Testing", "CRO tối ưu", "Ngân sách ads < 50tr"] },
      { name: "Scale", price: "40.000.000đ/th", features: ["Đa nền tảng (5+)", "Account Manager riêng", "Báo cáo real-time", "Creative team", "Ngân sách không giới hạn", "KPI cam kết"] },
    ] as PricingTier[],
  },
  {
    title: "Dịch vụ SEO Website",
    slug: "/dich-vu/seo",
    image: "/image/services/seo.jpg",
    description: "SEO là chiến lược dài hạn giúp website xuất hiện trên trang đầu Google. Chúng tôi cung cấp dịch vụ SEO toàn diện: nghiên cứu từ khóa, tối ưu On-page, Technical SEO và xây dựng backlink chất lượng.",
    reversed: false,
    tiers: [
      { name: "Local SEO", price: "3.000.000đ/th", features: ["10 từ khóa", "Tối ưu On-page cơ bản", "Google Business Profile", "Báo cáo hàng tháng"] },
      { name: "SEO Pro", price: "10.000.000đ/th", highlight: true, features: ["30 từ khóa", "On-page + Technical SEO", "Link building DA cao", "Content SEO 8 bài/th", "Báo cáo 2 tuần/lần"] },
      { name: "SEO Enterprise", price: "30.000.000đ/th", features: ["Không giới hạn từ khóa", "Toàn bộ dịch vụ SEO", "Content team riêng", "Backlink premium", "Audit hàng tuần", "SEO Manager riêng"] },
    ] as PricingTier[],
  },
  {
    title: "Phần mềm ERP Odoo",
    slug: "/dich-vu/erp-odoo",
    image: "/image/services/erp.jpg",
    description: "VMST chuyên triển khai hệ thống ERP Odoo cho doanh nghiệp vừa và lớn. Odoo tích hợp hơn 30 module quản lý: bán hàng, kho hàng, kế toán, nhân sự, sản xuất.",
    reversed: true,
    tiers: [
      { name: "Odoo Starter", price: "20.000.000đ", features: ["3 module cơ bản", "Odoo Community", "Đào tạo 2 buổi", "Hỗ trợ 3 tháng"] },
      { name: "Odoo Business", price: "60.000.000đ", highlight: true, features: ["10 module tùy chỉnh", "Odoo Enterprise", "Tích hợp thanh toán", "Đào tạo nhân viên", "Hỗ trợ 12 tháng"] },
      { name: "Odoo Full Suite", price: "200.000.000đ", features: ["Toàn bộ 30+ module", "Tùy chỉnh chuyên sâu", "Tích hợp API bên thứ 3", "Đội triển khai riêng", "SLA 24/7", "Bảo trì vĩnh viễn"] },
    ] as PricingTier[],
  },
  {
    title: "Phần mềm CRM quản lý khách hàng",
    slug: "/dich-vu/crm",
    image: "/image/services/crm.jpg",
    description: "CRM do VMST phát triển giúp quản lý toàn bộ hành trình khách hàng từ lead đến chốt deal. Tích hợp đa kênh Zalo, Facebook Messenger, Email và Hotline.",
    reversed: false,
    tiers: [
      { name: "CRM Lite", price: "500.000đ/th", features: ["5 users", "Quản lý lead cơ bản", "Email tích hợp", "Báo cáo tháng"] },
      { name: "CRM Pro", price: "2.000.000đ/th", highlight: true, features: ["20 users", "Pipeline bán hàng", "Tích hợp Zalo + FB", "Auto phân lead", "Dashboard real-time"] },
      { name: "CRM Enterprise", price: "8.000.000đ/th", features: ["Không giới hạn users", "API tùy chỉnh", "Mobile app riêng", "AI scoring lead", "Dedicated support", "On-premise option"] },
    ] as PricingTier[],
  },
  {
    title: "Cloud VPS & Hosting doanh nghiệp",
    slug: "/dich-vu/cloud-vps",
    image: "/image/services/cloud-vps.jpg",
    description: "Cloud VPS hiệu năng cao với uptime 99.9%, tích hợp DDoS Protection, auto backup hàng ngày và hỗ trợ kỹ thuật 24/7. Server đặt tại các datacenter hàng đầu.",
    reversed: true,
    tiers: [
      { name: "VPS Basic", price: "200.000đ/th", features: ["1 vCPU, 1GB RAM", "20GB SSD", "Bandwidth 1TB", "Auto backup tuần"] },
      { name: "VPS Business", price: "800.000đ/th", highlight: true, features: ["4 vCPU, 8GB RAM", "100GB NVMe SSD", "Bandwidth không giới hạn", "DDoS Protection", "Backup hàng ngày"] },
      { name: "Dedicated Server", price: "5.000.000đ/th", features: ["16 vCPU, 32GB RAM", "500GB NVMe SSD", "IP riêng", "Firewall nâng cao", "Hỗ trợ 24/7 ưu tiên", "SLA 99.99%"] },
    ] as PricingTier[],
  },
  {
    title: "Lập trình Mobile App iOS & Android",
    slug: "/dich-vu/mobile-app",
    image: "/image/services/mobile-app.jpg",
    description: "Phát triển ứng dụng di động đa nền tảng với React Native & Flutter. Từ MVP cho startup đến ứng dụng enterprise phức tạp, đảm bảo UX mượt mà và hiệu năng cao.",
    reversed: false,
    tiers: [
      { name: "MVP", price: "30.000.000đ", features: ["App 1 nền tảng", "5-8 màn hình", "UI/UX cơ bản", "Đăng store"] },
      { name: "Business", price: "80.000.000đ", highlight: true, features: ["iOS + Android", "15-25 màn hình", "Push notification", "API tích hợp", "Bảo trì 6 tháng"] },
      { name: "Enterprise", price: "200.000.000đ", features: ["Không giới hạn tính năng", "Offline mode", "CI/CD pipeline", "Đội dev riêng", "SLA 24/7", "Bảo trì 12 tháng"] },
    ] as PricingTier[],
  },
  {
    title: "Tối ưu tốc độ load Website",
    slug: "/dich-vu/toi-uu-toc-do",
    image: "/image/services/speed-optimization.jpg",
    description: "Tối ưu Core Web Vitals và PageSpeed đạt 90+. Cải thiện LCP, FID, CLS giúp website tải nhanh hơn, tăng trải nghiệm người dùng và thứ hạng SEO trên Google.",
    reversed: true,
    tiers: [
      { name: "Basic", price: "3.000.000đ", features: ["Audit tốc độ", "Nén ảnh & CSS/JS", "Lazy loading", "Báo cáo PageSpeed"] },
      { name: "Advanced", price: "8.000.000đ", highlight: true, features: ["Toàn bộ gói Basic", "CDN setup", "Server caching", "Database tối ưu", "Core Web Vitals xanh"] },
      { name: "Premium", price: "20.000.000đ", features: ["Toàn bộ gói Advanced", "Headless/SSR migration", "Edge caching", "Monitoring 24/7", "Cam kết PageSpeed 95+", "Bảo trì 6 tháng"] },
    ] as PricingTier[],
  },
  {
    title: "Automation Workflow doanh nghiệp",
    slug: "/dich-vu/automation-workflow",
    image: "/image/services/automation.jpg",
    description: "Tự động hóa quy trình vận hành với n8n, Zapier và custom API. Kết nối CRM, ERP, email, chat — giảm 70% công việc thủ công và sai sót vận hành.",
    reversed: false,
    tiers: [
      { name: "Starter", price: "5.000.000đ", features: ["3 workflow cơ bản", "Kết nối 2 hệ thống", "n8n/Zapier setup", "Hỗ trợ 1 tháng"] },
      { name: "Business", price: "15.000.000đ", highlight: true, features: ["10 workflow", "Kết nối 5+ hệ thống", "Custom logic", "Dashboard monitoring", "Hỗ trợ 6 tháng"] },
      { name: "Enterprise", price: "50.000.000đ", features: ["Không giới hạn workflow", "Custom API development", "AI integration", "Đội vận hành riêng", "SLA 24/7", "Bảo trì vĩnh viễn"] },
    ] as PricingTier[],
  },
];

const ServiceDetailsSection = () => (
  <section className="py-16 md:py-24 bg-secondary/40">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Tìm hiểu chi tiết từng dịch vụ</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Mỗi dịch vụ được thiết kế riêng để đáp ứng nhu cầu cụ thể của doanh nghiệp, từ startup đến enterprise.</p>
      </div>
      <div className="space-y-20 md:space-y-28">
        {serviceDetails.map((s) => (
          <ScrollAnimate key={s.slug}>
            <div className="space-y-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${s.reversed ? "lg:[direction:rtl]" : ""}`}>
                <div className={s.reversed ? "lg:[direction:ltr]" : ""}>
                  <div className="rounded-2xl overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full aspect-[16/10] object-cover" loading="lazy" />
                  </div>
                </div>
                <div className={s.reversed ? "lg:[direction:ltr]" : ""}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[0.94rem]">{s.description}</p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <Link href={s.slug}>Xem chi tiết <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {s.tiers.map((tier) => (
                  <div key={tier.name} className={`relative rounded-2xl border p-6 flex flex-col ${tier.highlight ? "bg-primary/[0.03] border-primary/30 ring-1 ring-primary/10" : "bg-card"}`}>
                    {tier.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          <Star className="h-3 w-3 fill-current" /> Phổ biến nhất
                        </span>
                      </div>
                    )}
                    <h4 className="font-bold text-sm mb-1">{tier.name}</h4>
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
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceDetailsSection;
