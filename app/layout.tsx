import type { Metadata } from "next";
import { Be_Vietnam_Pro, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatButton from "@/components/layout/ChatButton";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vmst.com.vn"),
  title: {
    default: "VMST Solutions – Thiết kế Website, ERP, CRM & Digital Marketing",
    template: "%s | VMST Solutions",
  },
  description: "VMST Solutions – Công ty công nghệ cung cấp dịch vụ thiết kế website, ERP Odoo, CRM, Cloud VPS và Digital Marketing cho doanh nghiệp tại Việt Nam, Singapore, Úc, Mỹ.",
  authors: [{ name: "VMST Solutions" }],
  openGraph: {
    type: "website",
    siteName: "VMST Solutions",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/image/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${dmSans.variable} ${beVietnamPro.variable}`}>
      <body>
        <div id="google_translate_element" style={{ display: "none" }} />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatButton />
        </div>
        <Script
          id="google-translate"
          strategy="afterInteractive"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'vi',
              includedLanguages: 'en,vi,zh-CN,ja',
              autoDisplay: false
            }, 'google_translate_element');
          }`}
        </Script>
      </body>
    </html>
  );
}
