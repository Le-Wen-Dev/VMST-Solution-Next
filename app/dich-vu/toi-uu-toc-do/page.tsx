import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Tối ưu tốc độ Website | VMST Solutions",
  description: "Dịch vụ tối ưu tốc độ website chuyên nghiệp: cải thiện Core Web Vitals, PageSpeed Insights, giảm thời gian tải trang, tăng tỷ lệ chuyển đổi.",
};

export default function ToiUuTocDo() {
  return (
    <ServiceDetailTemplate
      title="Tối ưu tốc độ Website"
      subtitle="Cải thiện Core Web Vitals, PageSpeed Insights và trải nghiệm người dùng toàn diện"
      heroDesc="VMST Solutions cung cấp dịch vụ tối ưu tốc độ website chuyên sâu, giúp doanh nghiệp đạt điểm PageSpeed 90+ và cải thiện toàn bộ chỉ số Core Web Vitals. Tốc độ tải trang nhanh hơn đồng nghĩa với thứ hạng SEO cao hơn, tỷ lệ thoát trang thấp hơn và doanh thu tăng trưởng bền vững."
      problemTitle="Vấn đề doanh nghiệp gặp phải"
      problems={[
        "Website tải chậm trên 5 giây khiến 53% người dùng mobile rời trang trước khi nội dung hiển thị",
        "Điểm PageSpeed Insights thấp dưới 50, ảnh hưởng trực tiếp đến thứ hạng tìm kiếm Google",
        "Core Web Vitals không đạt chuẩn: LCP cao, CLS lớn, FID/INP kém làm giảm điểm SEO tổng thể",
        "Hình ảnh chưa được tối ưu, không dùng định dạng WebP/AVIF, chiếm băng thông không cần thiết",
        "Thiếu caching, CDN và nén dữ liệu khiến server phải xử lý lại toàn bộ mỗi lần tải trang",
      ]}
      solutionTitle="Giải pháp từ VMST"
      solutions={[
        "Audit toàn diện hiệu suất website bằng Lighthouse, WebPageTest và Chrome DevTools",
        "Tối ưu hình ảnh: chuyển đổi sang WebP/AVIF, lazy loading, responsive images với srcset",
        "Triển khai CDN toàn cầu, caching nhiều lớp (browser, server, object cache) và HTTP/2",
        "Minify và bundle CSS/JS, loại bỏ render-blocking resources, defer/async scripts",
        "Cải thiện Core Web Vitals: tối ưu LCP, giảm CLS, cải thiện INP theo đúng tiêu chuẩn Google",
        "Tối ưu server-side: cấu hình Nginx/Apache, PHP-FPM, database query, kết nối Redis/Memcached",
      ]}
      features={[
        { title: "Core Web Vitals", desc: "Tối ưu toàn bộ 3 chỉ số quan trọng: LCP dưới 2.5s, CLS dưới 0.1, INP dưới 200ms theo tiêu chuẩn Google 2024." },
        { title: "PageSpeed 90+", desc: "Cam kết đạt điểm PageSpeed Insights từ 90 trở lên cho cả desktop và mobile sau khi hoàn thành tối ưu." },
        { title: "CDN & Caching", desc: "Triển khai mạng phân phối nội dung toàn cầu, caching thông minh nhiều lớp giúp giảm thời gian phản hồi xuống dưới 200ms." },
        { title: "Tối ưu hình ảnh", desc: "Chuyển đổi toàn bộ hình ảnh sang WebP/AVIF, nén không mất chất lượng, lazy loading và responsive images tự động." },
        { title: "Code Optimization", desc: "Minify CSS/JS/HTML, tree shaking, code splitting, loại bỏ unused code và render-blocking resources." },
        { title: "Server Tuning", desc: "Tối ưu cấu hình web server, database, kết nối Redis cache, nén Gzip/Brotli và HTTP/2 Server Push." },
      ]}
      process={[
        { num: "01", title: "Audit & Phân tích", desc: "Đo lường hiệu suất hiện tại bằng Lighthouse, GTmetrix, WebPageTest. Xác định các điểm nghẽn cổ chai và lập danh sách ưu tiên tối ưu." },
        { num: "02", title: "Lên kế hoạch tối ưu", desc: "Xây dựng roadmap tối ưu chi tiết theo mức độ ưu tiên, ước tính mức cải thiện kỳ vọng cho từng hạng mục." },
        { num: "03", title: "Triển khai tối ưu", desc: "Thực hiện tối ưu từng bước trên môi trường staging, kiểm tra kỹ trước khi áp dụng lên production để tránh gián đoạn." },
        { num: "04", title: "Đo lường & Báo cáo", desc: "So sánh kết quả trước và sau tối ưu, cung cấp báo cáo chi tiết về các chỉ số cải thiện và hướng dẫn duy trì hiệu suất." },
      ]}
      contentBlocks={[
        {
          heading: "Core Web Vitals là gì và tại sao quan trọng với SEO?",
          body: `Core Web Vitals là bộ chỉ số do Google định nghĩa để đo lường trải nghiệm người dùng thực tế trên website. Từ năm 2021, Google chính thức đưa Core Web Vitals vào thuật toán xếp hạng tìm kiếm, khiến đây trở thành yếu tố SEO kỹ thuật không thể bỏ qua.

Ba chỉ số cốt lõi bao gồm:
• LCP (Largest Contentful Paint): Đo thời gian tải phần tử nội dung lớn nhất trên màn hình. Mục tiêu: dưới 2.5 giây. LCP kém thường do hình ảnh hero chưa tối ưu, server phản hồi chậm hoặc render-blocking resources.

• CLS (Cumulative Layout Shift): Đo mức độ dịch chuyển bố cục không mong muốn trong quá trình tải trang. Mục tiêu: dưới 0.1. CLS cao gây khó chịu khi người dùng đang đọc nội dung bị nhảy lung tung.

• INP (Interaction to Next Paint): Thay thế FID từ 2024, đo độ trễ phản hồi của trang với mọi tương tác người dùng. Mục tiêu: dưới 200ms.

Website đạt chuẩn Core Web Vitals không chỉ được Google ưu tiên xếp hạng cao hơn mà còn giữ chân người dùng lâu hơn, tăng tỷ lệ chuyển đổi và giảm chi phí quảng cáo trên mỗi khách hàng.`
        },
        {
          heading: "Tác động của tốc độ website đến doanh thu",
          body: `Nghiên cứu từ Google và các tổ chức hàng đầu thế giới đã chứng minh mối liên hệ trực tiếp giữa tốc độ tải trang và hiệu quả kinh doanh:

• Amazon phát hiện mỗi 100ms tăng thêm thời gian tải trang làm giảm 1% doanh thu. Với doanh thu hàng tỷ đô, con số này cực kỳ đáng kể.

• Google báo cáo 53% người dùng mobile rời bỏ trang nếu tải chậm hơn 3 giây. Với tỷ lệ traffic mobile ngày càng tăng, đây là lượng khách hàng tiềm năng khổng lồ bị mất.

• Walmart tăng tỷ lệ chuyển đổi 2% cho mỗi giây cải thiện tốc độ tải trang.

• Pinterest giảm thời gian tải trang 40%, kết quả là tăng 15% lưu lượng tìm kiếm tự nhiên và 15% tỷ lệ đăng ký.

Đối với doanh nghiệp Việt Nam, đặc biệt trong lĩnh vực thương mại điện tử và dịch vụ, tối ưu tốc độ website là khoản đầu tư có ROI cao nhất trong tất cả các hoạt động marketing kỹ thuật số. Chi phí tối ưu một lần nhưng lợi ích kéo dài nhiều năm.`
        },
        {
          heading: "Các kỹ thuật tối ưu tốc độ website chuyên sâu",
          body: `VMST Solutions áp dụng đầy đủ các kỹ thuật tối ưu hiện đại nhất:

Tối ưu hình ảnh:
• Chuyển đổi sang định dạng WebP (giảm 25-35% so với JPEG) và AVIF (giảm 50% so với JPEG)
• Triển khai lazy loading cho hình ảnh ngoài viewport
• Sử dụng srcset và sizes để phục vụ hình ảnh đúng kích thước cho từng thiết bị
• Preload hình ảnh LCP để cải thiện điểm Core Web Vitals

Tối ưu CSS/JavaScript:
• Minify và compress toàn bộ CSS, JS, HTML
• Loại bỏ unused CSS với PurgeCSS, tree shaking với Webpack/Vite
• Code splitting và dynamic import để giảm bundle size ban đầu
• Defer non-critical JavaScript, inline critical CSS

Tối ưu server và mạng:
• Cấu hình CDN với edge caching tại nhiều điểm trên thế giới
• Bật HTTP/2 hoặc HTTP/3 (QUIC) để multiplexing requests
• Nén Brotli (hiệu quả hơn Gzip 15-20%) cho tất cả text resources
• Tối ưu TTFB (Time to First Byte) qua server-side caching với Redis

Tối ưu database và backend:
• Phân tích và tối ưu slow queries, thêm index phù hợp
• Triển khai object caching với Redis/Memcached
• Tối ưu cấu hình PHP-FPM, connection pooling
• Database query caching và query optimization`
        },
        {
          heading: "Tại sao chọn VMST Solutions cho dịch vụ tối ưu tốc độ?",
          body: `VMST Solutions có đội ngũ kỹ sư chuyên sâu về hiệu suất web với kinh nghiệm tối ưu hàng trăm website từ quy mô nhỏ đến enterprise:

Kinh nghiệm thực chiến: Chúng tôi đã tối ưu website cho khách hàng tại Mỹ, Singapore, Úc - những thị trường đòi hỏi tiêu chuẩn kỹ thuật cao nhất. Kinh nghiệm này giúp chúng tôi xử lý mọi tình huống phức tạp.

Cam kết kết quả đo lường được: Không như nhiều đơn vị chỉ hứa hẹn chung chung, VMST cam kết các chỉ số cụ thể: PageSpeed 90+, LCP dưới 2.5s, CLS dưới 0.1. Nếu không đạt, chúng tôi tiếp tục tối ưu miễn phí.

Không ảnh hưởng giao diện: Toàn bộ quá trình tối ưu được thực hiện ở tầng kỹ thuật, không thay đổi giao diện hay nội dung website. Người dùng cuối không nhận thấy sự khác biệt ngoài tốc độ nhanh hơn đáng kể.

Hỗ trợ dài hạn: Sau khi tối ưu, chúng tôi cung cấp báo cáo hiệu suất định kỳ và tư vấn duy trì tốc độ khi website có thêm nội dung mới, đảm bảo hiệu suất bền vững theo thời gian.`
        },
      ]}
      faqs={[
        { q: "Tối ưu tốc độ website mất bao lâu?", a: "Tùy quy mô và mức độ phức tạp của website. Website thông thường: 1-2 tuần. Website lớn với nhiều tính năng: 3-4 tuần. Chúng tôi sẽ đánh giá và báo thời gian cụ thể sau khi audit ban đầu." },
        { q: "Tối ưu có ảnh hưởng đến giao diện website không?", a: "Không. Toàn bộ tối ưu diễn ra ở tầng kỹ thuật (server, code, hình ảnh). Giao diện và nội dung website hoàn toàn không thay đổi, người dùng chỉ thấy trang tải nhanh hơn." },
        { q: "Điểm PageSpeed bao nhiêu là tốt?", a: "Google phân loại: 90-100 là tốt (màu xanh), 50-89 là cần cải thiện (màu vàng), dưới 50 là kém (màu đỏ). VMST cam kết đưa website của bạn đạt từ 90 điểm trở lên cho cả desktop và mobile." },
        { q: "Sau khi tối ưu, tốc độ có duy trì được lâu dài không?", a: "Có, nếu website không thêm quá nhiều plugin nặng hoặc hình ảnh chưa tối ưu. Chúng tôi cung cấp hướng dẫn chi tiết và báo cáo định kỳ để giúp bạn duy trì hiệu suất theo thời gian." },
        { q: "VMST có tối ưu được WordPress, Shopify, website tùy chỉnh không?", a: "Có, chúng tôi tối ưu được mọi nền tảng: WordPress, WooCommerce, Shopify, Magento, Laravel, Next.js, và các website tùy chỉnh bất kỳ. Mỗi nền tảng có kỹ thuật tối ưu riêng và đội ngũ VMST đều thành thạo." },
      ]}
      pricingTiers={[
        { name: "Basic", price: "3.000.000đ", features: ["Audit PageSpeed & Core Web Vitals", "Tối ưu hình ảnh (WebP, lazy load)", "Minify CSS/JS/HTML", "Báo cáo trước & sau tối ưu"] },
        { name: "Pro", price: "8.000.000đ", highlight: true, features: ["Tất cả tính năng Basic", "Cấu hình CDN & caching", "Tối ưu server (Nginx, PHP-FPM)", "Cải thiện Core Web Vitals", "Cam kết PageSpeed 90+", "Hỗ trợ 3 tháng sau tối ưu"] },
        { name: "Enterprise", price: "20.000.000đ", features: ["Tất cả tính năng Pro", "Tối ưu database & Redis cache", "HTTP/2 & Brotli compression", "Monitoring hiệu suất 24/7", "Báo cáo định kỳ hàng tháng", "SLA cam kết tốc độ", "Đội ngũ kỹ thuật riêng"] },
      ]}
      relatedServices={[
        { title: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
        { title: "Dịch vụ SEO", path: "/dich-vu/seo" },
        { title: "Cloud VPS", path: "/dich-vu/cloud-vps" },
      ]}
    />
  );
}
