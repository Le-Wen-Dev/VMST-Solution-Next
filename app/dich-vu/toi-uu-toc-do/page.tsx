import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Tối ưu tốc độ Website | VMST Solutions",
  description: "Tăng PageSpeed Score 90+, giảm bounce rate, cải thiện SEO ranking. Kinh nghiệm tối ưu hơn 200 website.",
};

export default function ToiUuTocDo() {
  return (
    <ServiceDetailTemplate
      title="Tối ưu tốc độ Website"
      subtitle="Tăng PageSpeed Score 90+, giảm bounce rate, cải thiện SEO ranking"
      heroDesc="VMST Solutions chuyên tối ưu tốc độ tải trang cho website WordPress, Shopify, React, và custom platform. Với kinh nghiệm tối ưu hơn 200 website, chúng tôi cam kết PageSpeed Score đạt 90+ trên cả mobile và desktop. Website nhanh hơn = ranking Google cao hơn = nhiều khách hàng hơn."
      problemTitle="Website chậm ảnh hưởng thế nào?"
      problems={[
        "Google xếp hạng thấp website tải chậm — mất traffic organic và khách hàng tiềm năng",
        "53% người dùng mobile rời trang nếu load quá 3 giây, tăng bounce rate đáng kể",
        "Core Web Vitals (LCP, FID, CLS) không đạt chuẩn, bị Google đánh dấu 'trải nghiệm kém'",
        "Hình ảnh chưa tối ưu, CSS/JS chưa minify, không có caching strategy",
        "Server hosting yếu, shared hosting quá tải vào giờ cao điểm",
      ]}
      solutionTitle="Giải pháp tối ưu tốc độ từ VMST"
      solutions={[
        "Audit toàn diện: PageSpeed Insights, GTmetrix, WebPageTest, Lighthouse — xác định chính xác bottleneck",
        "Tối ưu hình ảnh: chuyển WebP/AVIF, lazy loading, responsive images, CDN delivery",
        "Minify & bundle CSS/JS, eliminate render-blocking resources, critical CSS inlining",
        "Server-side: caching (Redis, Varnish), Gzip/Brotli compression, HTTP/2, CDN toàn cầu",
        "Database optimization: query caching, index tuning, cleanup revisions/transients",
        "Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1 — đạt chuẩn Google",
      ]}
      features={[
        { title: "Image Optimization", desc: "Chuyển đổi WebP/AVIF tự động, lazy loading, responsive srcset, CDN delivery. Giảm 60-80% dung lượng ảnh mà không giảm chất lượng." },
        { title: "CSS/JS Optimization", desc: "Minify, bundle, tree-shaking, critical CSS inline, defer non-critical JS. Loại bỏ render-blocking resources hoàn toàn." },
        { title: "Server & Caching", desc: "Redis object cache, page cache, browser cache headers, Gzip/Brotli compression, HTTP/2 push. Giảm TTFB dưới 200ms." },
        { title: "CDN Integration", desc: "Cloudflare, BunnyCDN hoặc AWS CloudFront. Phân phối static assets từ edge server gần nhất, giảm latency toàn cầu." },
        { title: "Core Web Vitals", desc: "Tối ưu LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift) đạt chuẩn xanh Google." },
        { title: "Database Tuning", desc: "Optimize slow queries, add proper indexes, cleanup revisions/transients/spam, autoload optimization cho WordPress." },
      ]}
      process={[
        { num: "01", title: "Audit & Đo lường", desc: "Chạy full audit: PageSpeed, GTmetrix, Lighthouse. Xác định điểm yếu và ưu tiên tối ưu." },
        { num: "02", title: "Tối ưu Frontend", desc: "Optimize images, CSS/JS, fonts, critical rendering path. Loại bỏ code thừa, unused plugins." },
        { num: "03", title: "Tối ưu Backend", desc: "Server caching, database tuning, CDN setup, compression. Upgrade hosting nếu cần." },
        { num: "04", title: "Test & Monitoring", desc: "Re-test đạt 90+ PageSpeed Score. Setup monitoring tự động, alert khi performance giảm." },
      ]}
      contentBlocks={[
        {
          heading: "Tốc độ website ảnh hưởng thế nào đến SEO và doanh thu?",
          body: `Google đã chính thức đưa tốc độ tải trang và Core Web Vitals vào yếu tố xếp hạng. Website chậm không chỉ mất ranking mà còn mất khách hàng trực tiếp:

• Mỗi 1 giây delay giảm 7% conversion rate (nguồn: Google)
• 53% mobile users rời trang nếu load > 3 giây (nguồn: Google Think)
• Website tải trong 1 giây có conversion rate cao gấp 3 lần website tải 5 giây
• Amazon ước tính mỗi 100ms delay mất 1% doanh thu (hàng triệu USD/năm)

VMST Solutions đã tối ưu tốc độ cho hơn 200 website, trung bình cải thiện PageSpeed Score từ 30-50 lên 90-100. Kết quả: tăng 20-40% traffic organic, giảm 30% bounce rate, tăng 15-25% conversion rate.`
        },
        {
          heading: "Core Web Vitals là gì? Cách đạt điểm xanh",
          body: `Core Web Vitals là bộ 3 chỉ số Google dùng để đánh giá trải nghiệm người dùng trên website:

• LCP (Largest Contentful Paint): Thời gian render phần tử lớn nhất trên viewport. Tốt: < 2.5 giây. VMST tối ưu: preload hero image, optimize fonts, server-side rendering.

• FID / INP (First Input Delay / Interaction to Next Paint): Thời gian phản hồi tương tác đầu tiên. Tốt: < 100ms. VMST tối ưu: code splitting, defer 3rd party scripts, web workers.

• CLS (Cumulative Layout Shift): Mức độ nhảy layout khi tải trang. Tốt: < 0.1. VMST tối ưu: set width/height cho images, font-display swap, reserve space cho ads/embeds.

VMST cam kết tối ưu website đạt điểm xanh cả 3 chỉ số Core Web Vitals, giúp Google đánh giá "trải nghiệm tốt" và ưu tiên ranking.`
        },
        {
          heading: "Chi phí dịch vụ tối ưu tốc độ website",
          body: `Chi phí phụ thuộc vào nền tảng, quy mô website và mức độ cần tối ưu:

Gói Basic: Từ 3 triệu (một lần) — Tối ưu hình ảnh, minify CSS/JS, caching cơ bản, CDN setup. Phù hợp website WordPress < 50 trang.

Gói Advanced: Từ 8 triệu (một lần) — Full optimization: frontend + backend + server, database tuning, Core Web Vitals. Phù hợp website 50-500 trang, e-commerce.

Gói Premium + Monitoring: Từ 2 triệu/tháng — Toàn bộ gói Advanced + monitoring 24/7, monthly report, tối ưu liên tục khi thêm nội dung mới. Phù hợp website traffic cao.

Tất cả gói bao gồm: audit trước/sau, báo cáo PageSpeed Score, hướng dẫn duy trì tốc độ. Không đạt 90+ PageSpeed = miễn phí.`
        },
      ]}
      faqs={[
        { q: "Tối ưu tốc độ có ảnh hưởng đến nội dung website không?", a: "Không, VMST chỉ tối ưu kỹ thuật (nén ảnh, cache, code), không thay đổi nội dung hay giao diện. Website vẫn giữ nguyên thiết kế và nội dung ban đầu." },
        { q: "Mất bao lâu để tối ưu xong?", a: "Gói Basic: 2-3 ngày. Gói Advanced: 5-7 ngày. Gói Premium: setup 1 tuần + monitoring liên tục. Không ảnh hưởng đến hoạt động website." },
        { q: "VMST có cam kết PageSpeed Score bao nhiêu?", a: "Cam kết đạt 90+ trên cả mobile và desktop. Nếu không đạt, miễn phí toàn bộ. Trung bình website sau tối ưu đạt 95-100 điểm." },
        { q: "WordPress plugin có làm chậm website không?", a: "Có, mỗi plugin thêm CSS/JS và database queries. VMST audit và loại bỏ plugin không cần thiết, thay thế bằng code tối ưu, giảm 50-70% số plugin." },
      ]}
      pricingTiers={[
        { name: "Basic", price: "3.000.000đ", features: ["Tối ưu hình ảnh", "Minify CSS/JS", "Caching cơ bản", "CDN setup"] },
        { name: "Advanced", price: "8.000.000đ", highlight: true, features: ["Full frontend + backend", "Database tuning", "Core Web Vitals", "Báo cáo trước/sau", "Cam kết 90+ score"] },
        { name: "Premium", price: "2.000.000đ/th", features: ["Toàn bộ gói Advanced", "Monitoring 24/7", "Monthly report", "Tối ưu liên tục", "Alert tự động", "Dedicated support"] },
      ]}
      relatedServices={[
        { title: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
        { title: "Dịch vụ SEO", path: "/dich-vu/seo" },
        { title: "Cloud VPS", path: "/dich-vu/cloud-vps" },
      ]}
    />
  );
}
