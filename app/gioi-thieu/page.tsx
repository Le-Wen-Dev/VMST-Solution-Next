"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, ShieldCheck, TrendingUp, MapPin } from "lucide-react";
import { projects } from "@/components/home/ProjectsSection";

const achievements = [
  { value: "172+", label: "Website LLC tại Mỹ" },
  { value: "50+", label: "Dự án Singapore" },
  { value: "30+", label: "Khách hàng Úc" },
  { value: "200+", label: "Campaigns Google Ads" },
];

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Luôn cập nhật công nghệ mới nhất, sáng tạo trong giải pháp." },
  { icon: ShieldCheck, title: "Reliability", desc: "Cam kết chất lượng, đúng tiến độ, bảo mật tối đa." },
  { icon: TrendingUp, title: "Growth", desc: "Đồng hành cùng doanh nghiệp trên hành trình phát triển." },
];

const team = [
  { name: "Nguyễn Văn A", role: "CEO & Founder" },
  { name: "Trần Thị B", role: "CTO" },
  { name: "Lê Văn C", role: "Head of Marketing" },
  { name: "Phạm Thị D", role: "Project Manager" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Về VMST Solutions</h1>
          <p className="text-muted-foreground leading-relaxed">
            Công ty TNHH Giải pháp Công nghệ VMST Việt Nam – Đơn vị cung cấp giải pháp công nghệ toàn diện cho doanh nghiệp. Trụ sở: 465 HT 13, P. Hiệp Thành, Q.12, TP.HCM. MST: 0318994441.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Thành tựu nổi bật</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((a) => (
              <div key={a.label} className="text-center p-6 rounded-xl bg-secondary">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{a.value}</div>
                <div className="text-sm text-muted-foreground">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Dự án đã triển khai</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="rounded-xl border bg-background overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                <div className="h-36 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary mb-2">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.country}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{p.client}</p>
                  <span className="inline-block text-xs font-medium bg-secondary text-primary px-3 py-1 rounded-full">{p.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Giá trị cốt lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-secondary rounded-xl p-8 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Đội ngũ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-background mb-4 shadow-sm" />
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
            Hãy cùng VMST xây dựng tương lai số
          </h2>
          <Button size="lg" variant="secondary" asChild className="hover:scale-[1.03] transition-transform">
            <Link href="/lien-he">Liên hệ ngay <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
