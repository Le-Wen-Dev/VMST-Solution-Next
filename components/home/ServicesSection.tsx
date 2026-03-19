import { Globe, Megaphone, Search, Database, Users, Cloud, Smartphone, Gauge, Workflow, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollAnimate from "@/components/ScrollAnimate";

const services = [
  {
    icon: Globe,
    title: "Thiết kế Website",
    desc: "Website chuyên nghiệp, giao diện hiện đại, chuẩn SEO và tối ưu trải nghiệm người dùng trên mọi thiết bị.",
    image: "/assets/services/web-design.jpg",
    link: "/dich-vu/thiet-ke-website",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Quản lý chiến dịch Google Ads, Facebook Ads hiệu quả — giảm CPA, tăng doanh thu cho doanh nghiệp.",
    image: "/assets/services/digital-marketing.jpg",
    link: "/dich-vu/digital-marketing",
  },
  {
    icon: Search,
    title: "Dịch vụ SEO",
    desc: "Đưa website lên trang đầu Google với chiến lược SEO on-page, technical và link building bài bản.",
    image: "/assets/services/seo.jpg",
    link: "/dich-vu/seo",
  },
  {
    icon: Database,
    title: "Phần mềm ERP",
    desc: "Hệ thống Odoo quản lý bán hàng, kho, kế toán, nhân sự — tự động hóa vận hành doanh nghiệp.",
    image: "/assets/services/erp.jpg",
    link: "/dich-vu/erp-odoo",
  },
  {
    icon: Users,
    title: "Phần mềm CRM",
    desc: "Quản lý khách hàng đa kênh, theo dõi pipeline bán hàng, tăng tỷ lệ chuyển đổi đáng kể.",
    image: "/assets/services/crm.jpg",
    link: "/dich-vu/crm",
  },
  {
    icon: Cloud,
    title: "Cloud VPS",
    desc: "Máy chủ ảo hiệu năng cao, uptime 99.9%, bảo mật DDoS, hỗ trợ kỹ thuật nhanh chóng.",
    image: "/assets/services/cloud-vps.jpg",
    link: "/dich-vu/cloud-vps",
  },
  {
    icon: Smartphone,
    title: "Lập trình Mobile App",
    desc: "Ứng dụng iOS & Android với React Native/Flutter — từ MVP đến sản phẩm hoàn chỉnh, UX mượt mà.",
    image: "/assets/services/mobile-app.jpg",
    link: "/dich-vu/mobile-app",
  },
  {
    icon: Gauge,
    title: "Tối ưu tốc độ Website",
    desc: "PageSpeed 90+, Core Web Vitals xanh — tăng trải nghiệm người dùng và thứ hạng SEO.",
    image: "/assets/services/speed-optimization.jpg",
    link: "/dich-vu/toi-uu-toc-do",
  },
  {
    icon: Workflow,
    title: "Automation Workflow",
    desc: "Tự động hóa quy trình với n8n, Zapier — tiết kiệm thời gian, giảm sai sót vận hành.",
    image: "/assets/services/automation.jpg",
    link: "/dich-vu/automation-workflow",
  },
];

const ServicesSection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          Dịch vụ của chúng tôi
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Từ thiết kế website đến vận hành hệ thống ERP — mọi giải pháp doanh nghiệp cần để tăng trưởng.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ScrollAnimate key={s.title} delay={i * 60}>
            <Link
              href={s.link}
              className="group block rounded-2xl border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/8 flex items-center justify-center">
                    <s.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <h3 className="font-bold group-hover:text-primary transition-colors">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Tìm hiểu thêm <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
