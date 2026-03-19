"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { label: "Trang chủ", path: "/" },
  {
    label: "Dịch vụ",
    path: "/dich-vu",
    children: [
      { label: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
      { label: "Digital Marketing", path: "/dich-vu/digital-marketing" },
      { label: "Dịch vụ SEO", path: "/dich-vu/seo" },
      { label: "ERP Odoo", path: "/dich-vu/erp-odoo" },
      { label: "Lập trình CRM", path: "/dich-vu/crm" },
      { label: "Cloud VPS", path: "/dich-vu/cloud-vps" },
      { label: "Mobile App", path: "/dich-vu/mobile-app" },
      { label: "Tối ưu tốc độ", path: "/dich-vu/toi-uu-toc-do" },
      { label: "Automation Workflow", path: "/dich-vu/automation-workflow" },
    ],
  },
  { label: "Blog", path: "/blog" },
  { label: "Giới thiệu", path: "/gioi-thieu" },
  { label: "Tuyển dụng", path: "/tuyen-dung" },
  { label: "Liên hệ", path: "/lien-he" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/image/logo-vmst-ne.svg" alt="VMST Solutions" className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  pathname.startsWith(item.path) && item.path !== "/" ? "text-primary" : pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                  <div className="bg-background border rounded-lg shadow-lg py-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <a href="tel:0822636676" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            0822 636 676
          </a>
          <Button asChild>
            <Link href="/lien-he">Nhận tư vấn</Link>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
          <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t bg-background px-5 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.path}>
              <Link
                href={item.path}
                onClick={() => !item.children && setMobileOpen(false)}
                className={`block py-2.5 text-sm font-medium ${
                  pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      href={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="tel:0822636676" className="flex items-center gap-2 py-2 text-sm font-medium text-muted-foreground">
            <Phone className="h-4 w-4" /> 0822 636 676
          </a>
          <Button asChild className="w-full">
            <Link href="/lien-he" onClick={() => setMobileOpen(false)}>Nhận tư vấn</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
