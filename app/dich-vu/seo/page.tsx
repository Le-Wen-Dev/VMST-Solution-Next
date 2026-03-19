import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Dịch vụ SEO | VMST Solutions",
  description: "Tối ưu SEO website lên top Google, tăng traffic organic bền vững. Chiến lược SEO White-hat chuẩn Google Guidelines.",
};

export default function SEO() {
  return (
    <ServiceDetailTemplate
      title="Dịch vụ SEO"
      subtitle="Tối ưu SEO website lên top Google, tăng traffic organic bền vững"
      heroDesc="VMST Solutions cung cấp dịch vụ SEO chuyên nghiệp giúp website doanh nghiệp tăng thứ hạng trên Google, thu hút traffic organic chất lượng cao và chuyển đổi thành khách hàng. Với đội ngũ chuyên gia SEO giàu kinh nghiệm, chúng tôi áp dụng chiến lược SEO White-hat chuẩn Google Guidelines."
      problemTitle="Vấn đề SEO doanh nghiệp thường gặp"
      problems={[
        "Website không xuất hiện trên Google khi khách hàng tìm kiếm từ khóa liên quan đến dịch vụ",
        "Đã làm SEO nhưng không lên top, thậm chí bị phạt bởi Google do sử dụng black-hat SEO",
        "Traffic organic thấp, phụ thuộc hoàn toàn vào quảng cáo trả phí để có khách hàng",
        "Không hiểu technical SEO, website có nhiều lỗi kỹ thuật ảnh hưởng đến indexing",
        "Content trên website không được tối ưu, không rank cho bất kỳ từ khóa nào",
      ]}
      solutionTitle="Giải pháp SEO toàn diện từ VMST"
      solutions={[
        "Audit SEO toàn diện: technical, on-page, off-page, content, competitor analysis",
        "Nghiên cứu từ khóa chuyên sâu với Ahrefs, SEMrush: tìm từ khóa high-volume, low-competition",
        "Tối ưu on-page: title, meta description, heading, internal linking, schema markup",
        "Technical SEO: tốc độ, mobile-first, Core Web Vitals, crawlability, indexability",
        "Content strategy: tạo content cluster, pillar pages, supporting articles chuẩn E-E-A-T",
        "Link building white-hat: guest post, digital PR, brand mention, forum seeding chất lượng",
      ]}
      features={[
        { title: "Keyword Research", desc: "Nghiên cứu từ khóa với Ahrefs, SEMrush. Phân tích search volume, keyword difficulty, search intent để chọn từ khóa tối ưu nhất." },
        { title: "On-page SEO", desc: "Tối ưu title tag, meta description, heading structure, image alt, internal linking, URL structure, schema markup cho mỗi trang." },
        { title: "Technical SEO", desc: "Audit và fix lỗi kỹ thuật: page speed, mobile-friendly, crawl errors, duplicate content, canonicalization, XML sitemap." },
        { title: "Content SEO", desc: "Viết bài chuẩn SEO theo content cluster strategy. Pillar pages + supporting articles, tối ưu cho E-E-A-T và Helpful Content." },
        { title: "Link Building", desc: "Xây dựng backlink chất lượng cao từ guest post, digital PR, brand mention. Không sử dụng PBN hay spam link." },
        { title: "SEO Reporting", desc: "Báo cáo monthly chi tiết: ranking changes, traffic, conversions, technical health. Google Search Console + Analytics insights." },
      ]}
      process={[
        { num: "01", title: "SEO Audit", desc: "Phân tích toàn diện website hiện tại: technical, on-page, off-page, competitor. Xác định vấn đề và cơ hội." },
        { num: "02", title: "Strategy & Keyword", desc: "Xây dựng chiến lược SEO, nghiên cứu từ khóa, lập kế hoạch content, backlink roadmap." },
        { num: "03", title: "Implementation", desc: "Triển khai tối ưu on-page, fix technical issues, tạo content, xây dựng backlink theo kế hoạch." },
        { num: "04", title: "Monitor & Optimize", desc: "Theo dõi ranking, traffic, conversions. Phân tích data, điều chỉnh chiến lược liên tục." },
      ]}
      contentBlocks={[
        {
          heading: "SEO là gì? Tại sao SEO quan trọng với doanh nghiệp?",
          body: `SEO (Search Engine Optimization) là quá trình tối ưu website để tăng thứ hạng trên kết quả tìm kiếm tự nhiên (organic) của Google. Khi website xuất hiện ở top 3 Google cho các từ khóa liên quan, doanh nghiệp sẽ nhận được lượng traffic miễn phí, chất lượng cao và ổn định.

Theo thống kê, 68% trải nghiệm online bắt đầu từ search engine, và 53% traffic website đến từ organic search. Top 3 kết quả Google chiếm 75% tổng số clicks. Điều này có nghĩa nếu website không nằm ở trang 1 Google, doanh nghiệp đang mất đi phần lớn khách hàng tiềm năng.

So với quảng cáo trả phí (Google Ads, Facebook Ads), SEO mang lại ROI bền vững hơn nhiều. Một khi đạt top, website tiếp tục nhận traffic miễn phí 24/7 mà không cần trả phí cho mỗi click. Đầu tư SEO là đầu tư cho tài sản digital dài hạn.

VMST Solutions đã giúp hàng trăm doanh nghiệp tăng traffic organic từ 200-500%, tăng doanh thu từ kênh SEO lên 300%. Chúng tôi áp dụng chiến lược SEO white-hat, tuân thủ Google Guidelines, đảm bảo kết quả bền vững và an toàn.`
        },
        {
          heading: "Chiến lược SEO toàn diện tại VMST",
          body: `VMST triển khai SEO theo 3 trụ cột chính:

1. Technical SEO - Nền tảng vững chắc:
Website phải có nền tảng kỹ thuật tốt để Google crawl và index hiệu quả. VMST tối ưu Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1), mobile-first indexing, HTTPS, schema markup, XML sitemap, robots.txt, canonical tags, hreflang cho đa ngôn ngữ.

2. On-page SEO - Content chất lượng:
Mỗi trang được tối ưu cho từ khóa mục tiêu: title tag hấp dẫn, meta description có CTA, heading structure logic (H1 > H2 > H3), internal linking strategy, image optimization (alt text, WebP format, lazy loading). Content được viết theo nguyên tắc E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).

3. Off-page SEO - Authority building:
Xây dựng backlink chất lượng cao thông qua guest posting trên website uy tín, digital PR (báo chí online), brand mention, industry directories. Không sử dụng PBN, spam link, hay bất kỳ kỹ thuật black-hat nào. Đồng thời quản lý Google Business Profile, local citations cho local SEO.`
        },
        {
          heading: "Báo giá dịch vụ SEO tại VMST Solutions",
          body: `Chi phí dịch vụ SEO phụ thuộc vào: độ cạnh tranh ngành, số lượng từ khóa, phạm vi dịch vụ.

Gói SEO cơ bản: Từ 8 triệu/tháng - Phù hợp doanh nghiệp nhỏ, local business. Bao gồm 10-20 từ khóa, on-page optimization, technical audit, monthly reporting.

Gói SEO chuyên nghiệp: Từ 15 triệu/tháng - Phù hợp SME. Bao gồm 30-50 từ khóa, full on-page + technical SEO, content creation (4-8 bài/tháng), basic link building, bi-weekly reporting.

Gói SEO doanh nghiệp: Từ 30 triệu/tháng - Phù hợp doanh nghiệp lớn, cạnh tranh cao. Bao gồm 50-100+ từ khóa, toàn bộ dịch vụ SEO, content strategy, aggressive link building, weekly reporting, dedicated SEO manager.

Tất cả các gói đều có cam kết KPI rõ ràng trong hợp đồng. Liên hệ VMST để nhận audit SEO miễn phí và báo giá chi tiết.`
        },
      ]}
      faqs={[
        { q: "SEO mất bao lâu để thấy kết quả?", a: "Thông thường 3-6 tháng cho từ khóa cạnh tranh trung bình. Từ khóa long-tail có thể lên top sau 1-3 tháng. SEO là đầu tư dài hạn, kết quả tích lũy theo thời gian." },
        { q: "VMST có đảm bảo lên top 1 Google không?", a: "Không ai có thể đảm bảo 100% top 1 vì Google liên tục cập nhật thuật toán. Tuy nhiên, VMST cam kết KPI cụ thể về số từ khóa top 10, traffic tăng trưởng, trong hợp đồng." },
        { q: "SEO và Google Ads khác nhau thế nào?", a: "Google Ads cho kết quả ngay lập tức nhưng tốn chi phí mỗi click. SEO mất thời gian nhưng traffic miễn phí và bền vững. Chiến lược tối ưu là kết hợp cả hai." },
        { q: "VMST sử dụng công cụ SEO nào?", a: "Ahrefs, SEMrush, Google Search Console, Google Analytics 4, Screaming Frog, PageSpeed Insights, Schema Markup Generator, và nhiều công cụ chuyên dụng khác." },
        { q: "Doanh nghiệp nhỏ có cần SEO không?", a: "Rất cần! SEO giúp doanh nghiệp nhỏ cạnh tranh công bằng với doanh nghiệp lớn trên Google. Local SEO đặc biệt hiệu quả cho doanh nghiệp phục vụ khách hàng địa phương." },
      ]}
      pricingTiers={[
        { name: "Local SEO", price: "3.000.000đ/th", features: ["10 từ khóa", "Tối ưu On-page cơ bản", "Google Business Profile", "Báo cáo hàng tháng"] },
        { name: "SEO Pro", price: "10.000.000đ/th", highlight: true, features: ["30 từ khóa", "On-page + Technical SEO", "Link building DA cao", "Content SEO 8 bài/th", "Báo cáo 2 tuần/lần"] },
        { name: "SEO Enterprise", price: "30.000.000đ/th", features: ["Không giới hạn từ khóa", "Toàn bộ dịch vụ SEO", "Content team riêng", "Backlink premium", "Audit hàng tuần", "SEO Manager riêng"] },
      ]}
      relatedServices={[
        { title: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
        { title: "Digital Marketing", path: "/dich-vu/digital-marketing" },
        { title: "Cloud VPS", path: "/dich-vu/cloud-vps" },
      ]}
    />
  );
}
