"use client";

import Link from "next/link";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

const jobs = [
  { title: "Lập trình viên Frontend (React)", type: "Full-time", location: "TP.HCM / Remote", salary: "15 - 25 triệu", desc: "Phát triển giao diện website, webapp với React/TypeScript. Yêu cầu 1+ năm kinh nghiệm React, hiểu biết về responsive design và REST API.", tags: ["React", "TypeScript", "Tailwind CSS"] },
  { title: "Lập trình viên Backend (Node.js / Python)", type: "Full-time", location: "TP.HCM", salary: "18 - 30 triệu", desc: "Xây dựng API, tích hợp hệ thống ERP/CRM. Yêu cầu 2+ năm kinh nghiệm, thành thạo database PostgreSQL/MySQL.", tags: ["Node.js", "Python", "PostgreSQL"] },
  { title: "Chuyên viên SEO", type: "Full-time", location: "TP.HCM", salary: "12 - 20 triệu", desc: "Lên chiến lược SEO, tối ưu on-page/off-page, phân tích keyword. Yêu cầu 1+ năm kinh nghiệm SEO, thành thạo Google Search Console, Ahrefs.", tags: ["SEO", "Google Analytics", "Content"] },
  { title: "Chuyên viên Digital Marketing", type: "Full-time", location: "TP.HCM", salary: "12 - 22 triệu", desc: "Quản lý chiến dịch Google Ads, Facebook Ads. Phân tích dữ liệu, tối ưu ROI. Yêu cầu kinh nghiệm chạy ads cho nhiều ngành.", tags: ["Google Ads", "Facebook Ads", "Analytics"] },
  { title: "Nhân viên Kinh doanh (Sales B2B)", type: "Full-time", location: "TP.HCM", salary: "10 - 15 triệu + Hoa hồng", desc: "Tìm kiếm khách hàng doanh nghiệp, tư vấn giải pháp công nghệ. Yêu cầu kỹ năng giao tiếp tốt, am hiểu công nghệ.", tags: ["B2B Sales", "IT Solutions", "Consulting"] },
  { title: "Thực tập sinh Lập trình Web", type: "Thực tập", location: "TP.HCM", salary: "3 - 5 triệu", desc: "Hỗ trợ phát triển website, học hỏi từ đội ngũ senior. Yêu cầu sinh viên năm 3-4 ngành CNTT, có kiến thức HTML/CSS/JS.", tags: ["HTML/CSS", "JavaScript", "Học hỏi"] },
];

const benefits = [
  "Lương cạnh tranh, thưởng hiệu suất",
  "Được đào tạo & phát triển kỹ năng",
  "Làm việc với dự án quốc tế",
  "Môi trường năng động, sáng tạo",
  "Bảo hiểm đầy đủ theo luật",
  "Team building, du lịch hàng năm",
];

export default function CareersPage() {
  return (
    <>
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Tuyển dụng</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gia nhập đội ngũ VMST Solutions – Nơi bạn được phát triển, sáng tạo và đồng hành cùng các dự án quốc tế.
          </p>
        </div>
      </section>

      <ScrollAnimate>
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Quyền lợi tại VMST</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
                  <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimate>

      <ScrollAnimate>
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Vị trí đang tuyển</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {jobs.map((job) => (
                <div key={job.title} className="bg-background rounded-xl border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{job.type}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{job.salary}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{job.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-secondary text-primary px-2.5 py-1 rounded-full font-medium">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="shrink-0">
                      <Link href="/lien-he">Ứng tuyển <ArrowRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimate>

      <section className="py-16 md:py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">Không tìm thấy vị trí phù hợp?</h2>
          <p className="text-primary-foreground/80 mb-6">Gửi CV của bạn về support@vmst.media, chúng tôi sẽ liên hệ khi có vị trí phù hợp.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/lien-he">Liên hệ ngay</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
