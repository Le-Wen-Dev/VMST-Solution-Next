"use client";

import ScrollAnimate from "@/components/ScrollAnimate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Globe } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Văn phòng", lines: ["465 HT 13, P. Hiệp Thành", "Quận 12, TP. Hồ Chí Minh"] },
  { icon: Phone, title: "Hotline", lines: ["0822 636 676", "0832 575 905"] },
  { icon: Mail, title: "Email", lines: ["support@vmst.media"] },
  { icon: Clock, title: "Giờ làm việc", lines: ["T2 – T7: 8:00 – 18:00", "CN: Hỗ trợ qua email"] },
];

const reasons = [
  { icon: MessageSquare, title: "Phản hồi nhanh", desc: "Tư vấn trong vòng 2 giờ làm việc" },
  { icon: Globe, title: "Phục vụ quốc tế", desc: "Việt Nam, Singapore, Úc, Mỹ" },
  { icon: Send, title: "Báo giá miễn phí", desc: "Nhận báo giá chi tiết trong 24h" },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/3" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container relative text-center">
          <ScrollAnimate>
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4">Contact Us</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight leading-tight">
              Hãy <span className="text-primary">kết nối</span> với chúng tôi
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Đội ngũ VMST Solutions luôn sẵn sàng lắng nghe và tư vấn giải pháp công nghệ phù hợp nhất cho doanh nghiệp của bạn.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      <section className="py-10 md:py-14 border-b">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reasons.map((r, i) => (
              <ScrollAnimate key={r.title} delay={i * 100}>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/50 border hover:border-primary/15 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <r.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{r.title}</h3>
                    <p className="text-xs text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <ScrollAnimate>
                <div className="rounded-2xl border bg-card p-8 md:p-10 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">Gửi yêu cầu tư vấn</h2>
                  <p className="text-sm text-muted-foreground mb-8">Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium">Họ và tên *</Label>
                        <Input id="name" placeholder="Nguyễn Văn A" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium">Số điện thoại *</Label>
                        <Input id="phone" placeholder="0822 636 676" className="mt-1.5" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                      <Input id="email" type="email" placeholder="email@company.com" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-sm font-medium">Dịch vụ quan tâm</Label>
                      <select id="service" className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="">-- Chọn dịch vụ --</option>
                        <option value="website">Thiết kế Website</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="seo">SEO</option>
                        <option value="erp">ERP Odoo</option>
                        <option value="crm">CRM</option>
                        <option value="cloud">Cloud VPS</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">Nội dung yêu cầu *</Label>
                      <Textarea id="message" placeholder="Mô tả nhu cầu, mục tiêu kinh doanh hoặc câu hỏi của bạn..." rows={5} className="mt-1.5" />
                    </div>
                    <Button type="submit" size="lg" className="w-full shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                      <Send className="mr-2 h-4 w-4" /> Gửi yêu cầu tư vấn
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">Thông tin của bạn được bảo mật tuyệt đối theo chính sách quyền riêng tư.</p>
                  </form>
                </div>
              </ScrollAnimate>
            </div>
            <div className="lg:col-span-2">
              <ScrollAnimate delay={100}>
                <div className="space-y-5">
                  {contactInfo.map((c) => (
                    <div key={c.title} className="flex items-start gap-4 p-5 rounded-2xl bg-card border hover:border-primary/15 hover:shadow-sm transition-all duration-200">
                      <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <c.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-1">{c.title}</h3>
                        {c.lines.map((line, i) => (
                          <p key={i} className="text-sm text-muted-foreground">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="rounded-2xl overflow-hidden border h-56">
                    <iframe title="VMST Solutions Office" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2311711144!2d106.6277!3d10.8686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUyJzA3LjAiTiAxMDbCsDM3JzM5LjciRQ!5e0!3m2!1svi!2svn!4v1700000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="container relative text-center">
          <ScrollAnimate>
            <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">Hoặc gọi ngay hotline</h2>
            <a href="tel:0822636676" className="inline-block text-3xl md:text-5xl font-bold text-primary-foreground/90 hover:text-primary-foreground transition-colors mb-6">0822 636 676</a>
            <p className="text-primary-foreground/70 max-w-md mx-auto">Đội ngũ tư vấn sẵn sàng hỗ trợ bạn từ T2 – T7, 8:00 – 18:00</p>
          </ScrollAnimate>
        </div>
      </section>
    </>
  );
}
