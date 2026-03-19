"use client";

import { MapPin } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";

const projects = [
  { country: "Hongkong", title: "Website Ecommerce Dropshipping", client: "My Begracey.com", tag: "Website", image: "/image/projects/ecommerce-hk.jpg" },
  { country: "Úc", title: "Website Nội thất", client: "Triplejhomes.com", tag: "Website", image: "/image/projects/furniture-au.jpg" },
  { country: "Singapore", title: "Website Helmetspa", client: "Helmetspa Singapore", tag: "Website", image: "/image/projects/corporate-sg.jpg" },
  { country: "Singapore", title: "Website Vietsing", client: "Vietsing Singapore", tag: "Website", image: "/image/projects/corporate-sg.jpg" },
  { country: "Việt Nam", title: "Website Công ty Luật", client: "Newwinlaw", tag: "Website", image: "/image/projects/law-firm.jpg" },
  { country: "Singapore", title: "Campaign Google Ads", client: "Nooknook Singapore", tag: "Marketing", image: "/image/projects/google-ads-sg.jpg" },
  { country: "Việt Nam", title: "Website Elearning", client: "Mitscorner", tag: "Elearning", image: "/image/projects/elearning.jpg" },
  { country: "Mỹ", title: "172 Website Wordpress LLC", client: "LLC Mỹ", tag: "Website", image: "/image/projects/wordpress-usa.jpg" },
  { country: "Singapore", title: "Website New Creation Event", client: "New Creation Event", tag: "Website", image: "/image/projects/corporate-sg.jpg" },
  { country: "Việt Nam", title: "Campaign Facebook Ads 6 tháng", client: "Iyakaza Tomo", tag: "Marketing", image: "/image/projects/google-ads-sg.jpg" },
  { country: "Việt Nam", title: "Website Công ty Dược", client: "Tuyết Thịnh", tag: "Website", image: "/image/projects/spa.jpg" },
  { country: "Việt Nam", title: "Website Công ty Cổ Phần", client: "Namin", tag: "Website", image: "/image/projects/ecommerce-hk.jpg" },
  { country: "Việt Nam - Nhật Bản", title: "Website Công ty Tanoshi", client: "Tanoshi", tag: "Website", image: "/image/projects/corporate-sg.jpg" },
  { country: "Việt Nam", title: "Nền tảng Học Tiếng Anh Online", client: "Điểm trường quốc tế", tag: "Elearning", image: "/image/projects/elearning.jpg" },
  { country: "Việt Nam", title: "Website Thương mại Điện tử", client: "Sitilink", tag: "Website", image: "/image/projects/ecommerce-hk.jpg" },
  { country: "Việt Nam", title: "Website Spa", client: "AmasresearchCenter", tag: "Website", image: "/image/projects/spa.jpg" },
];

const featured = projects.slice(0, 8);

const ProjectsSection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Dự án tiêu biểu</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Một số dự án chúng tôi đã triển khai cho khách hàng tại nhiều quốc gia.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map((p, i) => (
          <ScrollAnimate key={i} delay={i * 50}>
            <div className="group rounded-xl border bg-card overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="h-40 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-xs text-primary mb-1.5">
                  <MapPin className="h-3 w-3" />
                  {p.country}
                </div>
                <h3 className="font-semibold text-sm mb-1 leading-snug">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.client}</p>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export { projects };
export default ProjectsSection;
