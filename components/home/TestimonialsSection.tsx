"use client";

import { Star } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";

const testimonials = [
  {
    name: "Trần Minh Đức",
    role: "CEO, Sitilink E-commerce",
    image: "/image/testimonials/person1.jpg",
    text: "VMST đã giúp chúng tôi xây dựng website thương mại điện tử chuyên nghiệp, tăng 200% đơn hàng online chỉ sau 3 tháng. Đội ngũ rất tận tâm và chuyên nghiệp.",
  },
  {
    name: "Nguyễn Thị Lan",
    role: "Marketing Director, Nooknook Singapore",
    image: "/image/testimonials/person2.jpg",
    text: "Chiến dịch Google Ads do VMST quản lý đã giảm 40% CPA và tăng 180% doanh thu. ROI vượt xa kỳ vọng. Rất hài lòng với dịch vụ.",
  },
  {
    name: "Lê Hoàng Nam",
    role: "CTO, Tanoshi Vietnam-Japan",
    image: "/image/testimonials/person3.jpg",
    text: "Hệ thống ERP Odoo được VMST triển khai đã giúp chúng tôi tự động hóa 80% quy trình, tiết kiệm hàng trăm giờ công mỗi tháng. Highly recommended!",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-secondary/60">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          Khách hàng nói gì về chúng tôi
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Phản hồi từ những doanh nghiệp đã tin tưởng sử dụng dịch vụ VMST Solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollAnimate key={t.name} delay={i * 80}>
            <div className="bg-card rounded-2xl p-7 border h-full flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-[0.94rem]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-sm">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
