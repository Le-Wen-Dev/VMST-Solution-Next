import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <img src="/image/logo-vmst-ne.svg" alt="VMST Solutions" className="h-8 w-auto brightness-0 invert" />
          <p className="text-sm text-background/70 leading-relaxed">
            Công ty TNHH Giải pháp Công nghệ VMST Việt Nam
          </p>
          <p className="text-xs text-background/50">MST: 0318994441</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-background/50">Giải pháp Website</h4>
          <div className="space-y-2 text-sm text-background/70">
            <Link href="/dich-vu/thiet-ke-website" className="block hover:text-primary transition-colors">Thiết kế Website</Link>
            <Link href="/dich-vu/toi-uu-toc-do" className="block hover:text-primary transition-colors">Tối ưu tốc độ Website</Link>
            <Link href="/dich-vu/cloud-vps" className="block hover:text-primary transition-colors">Cloud VPS & Hosting</Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-background/50">Marketing Online</h4>
          <div className="space-y-2 text-sm text-background/70">
            <Link href="/dich-vu/seo" className="block hover:text-primary transition-colors">Dịch vụ SEO</Link>
            <Link href="/dich-vu/digital-marketing" className="block hover:text-primary transition-colors">Digital Marketing</Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-background/50">Giải pháp quản lý</h4>
          <div className="space-y-2 text-sm text-background/70">
            <Link href="/dich-vu/crm" className="block hover:text-primary transition-colors">Lập trình CRM</Link>
            <Link href="/dich-vu/erp-odoo" className="block hover:text-primary transition-colors">ERP Odoo</Link>
            <Link href="/dich-vu/mobile-app" className="block hover:text-primary transition-colors">Mobile App</Link>
            <Link href="/dich-vu/automation-workflow" className="block hover:text-primary transition-colors">Automation Workflow</Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-background/50">Liên hệ</h4>
          <div className="space-y-2 text-sm text-background/70">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>465 HT 13, P. Hiệp Thành, Q.12, TP.HCM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <div>
                <span className="block">0822 636 676</span>
                <span className="block">0832 575 905</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <div>
                <span className="block">support@vmst.media</span>
                <span className="block">contact@vmst.com.vn</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs text-background/50">
        © 2024 Công ty TNHH Giải pháp Công nghệ VMST Việt Nam. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
