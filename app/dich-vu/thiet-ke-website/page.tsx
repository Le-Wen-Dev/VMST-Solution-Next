import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Thiết kế Website Chuyên Nghiệp | VMST Solutions",
  description: "Dịch vụ thiết kế website doanh nghiệp chuẩn SEO, responsive, hiệu suất cao. Kinh nghiệm 172+ website tại Mỹ, Singapore, Úc.",
};

export default function ThietKeWebsite() {
  return (
    <ServiceDetailTemplate
      title="Thiết kế Website Chuyên Nghiệp"
      subtitle="Dịch vụ thiết kế website doanh nghiệp chuẩn SEO, responsive, hiệu suất cao"
      heroDesc="VMST Solutions cung cấp dịch vụ thiết kế website chuyên nghiệp cho doanh nghiệp vừa và lớn. Với kinh nghiệm triển khai hơn 172 website tại Mỹ, Singapore, Úc, chúng tôi cam kết mang đến sản phẩm chất lượng quốc tế với chi phí hợp lý nhất tại Việt Nam."
      problemTitle="Vấn đề doanh nghiệp gặp phải"
      problems={[
        "Website cũ kỹ, không responsive trên mobile, mất khách hàng tiềm năng từ 60% traffic mobile",
        "Tốc độ tải trang chậm khiến tỷ lệ thoát trang (bounce rate) tăng cao trên 70%",
        "Không tối ưu SEO, khó tìm thấy trên Google khi khách hàng tìm kiếm dịch vụ",
        "Thiếu tính năng quản trị nội dung, phải phụ thuộc vào đơn vị phát triển để cập nhật",
        "Không có SSL, giao diện thiếu chuyên nghiệp, ảnh hưởng uy tín thương hiệu",
      ]}
      solutionTitle="Giải pháp từ VMST"
      solutions={[
        "Thiết kế responsive hoàn hảo trên mọi thiết bị: desktop, tablet, mobile",
        "Tối ưu tốc độ tải trang dưới 3 giây với lazy loading, CDN và caching",
        "SEO on-page chuẩn Google: meta tags, schema markup, sitemap, robots.txt",
        "CMS quản trị nội dung dễ sử dụng, không cần kỹ thuật",
        "SSL miễn phí, bảo mật chống hack, DDoS protection",
        "Tích hợp Google Analytics, Facebook Pixel, Zalo OA",
      ]}
      features={[
        { title: "Responsive Design", desc: "Giao diện tự động co giãn hoàn hảo trên mọi kích thước màn hình, đảm bảo trải nghiệm tốt nhất cho người dùng mobile." },
        { title: "SEO Optimized", desc: "Cấu trúc HTML5 semantic, meta tags, schema markup, sitemap XML tự động, URL thân thiện SEO." },
        { title: "Fast Loading", desc: "Tốc độ tải trang dưới 3 giây nhờ tối ưu hình ảnh, lazy loading, minify CSS/JS, CDN toàn cầu." },
        { title: "CMS Quản trị", desc: "Hệ thống quản trị nội dung trực quan, dễ sử dụng, cho phép cập nhật tin tức, sản phẩm nhanh chóng." },
        { title: "Bảo mật cao", desc: "SSL certificate, firewall, chống SQL injection, XSS, backup tự động hàng ngày." },
        { title: "Tích hợp đa kênh", desc: "Kết nối Google Analytics, Facebook Pixel, Zalo OA, chatbot, email marketing automation." },
      ]}
      process={[
        { num: "01", title: "Tư vấn & Khảo sát", desc: "Phân tích nhu cầu, mục tiêu kinh doanh, đối thủ cạnh tranh, đề xuất giải pháp phù hợp." },
        { num: "02", title: "Thiết kế UI/UX", desc: "Wireframe, mockup giao diện, duyệt thiết kế với khách hàng, điều chỉnh theo feedback." },
        { num: "03", title: "Lập trình & Kiểm thử", desc: "Code chuẩn W3C, test đa trình duyệt, responsive test, performance test, security audit." },
        { num: "04", title: "Bàn giao & Hỗ trợ", desc: "Go-live, đào tạo sử dụng CMS, hỗ trợ kỹ thuật 24/7, bảo trì định kỳ hàng tháng." },
      ]}
      contentBlocks={[
        {
          heading: "Tại sao doanh nghiệp cần website chuyên nghiệp?",
          body: `Trong kỷ nguyên số hóa, website là tài sản quan trọng nhất của doanh nghiệp trên internet. Theo thống kê, 75% người tiêu dùng đánh giá độ tin cậy của một công ty dựa trên giao diện website. Một website được thiết kế chuyên nghiệp không chỉ giúp tạo ấn tượng tốt mà còn là công cụ marketing và bán hàng 24/7.

Website chuyên nghiệp giúp doanh nghiệp tiếp cận hàng triệu khách hàng tiềm năng đang tìm kiếm sản phẩm/dịch vụ trên Google mỗi ngày. Với chiến lược SEO đúng đắn, website có thể mang lại nguồn traffic organic miễn phí và bền vững, giảm phụ thuộc vào quảng cáo trả phí.

Ngoài ra, website còn là nền tảng để tích hợp các công cụ marketing automation, CRM, email marketing, giúp tự động hóa quy trình bán hàng và chăm sóc khách hàng, tăng hiệu quả kinh doanh lên nhiều lần.`
        },
        {
          heading: "Các loại website VMST thiết kế",
          body: `VMST Solutions có kinh nghiệm thiết kế đa dạng loại hình website:

• Website doanh nghiệp (Corporate Website): Giới thiệu công ty, dịch vụ, dự án, đội ngũ. Phù hợp cho mọi ngành nghề từ xây dựng, luật, y tế, giáo dục đến công nghệ.

• Website thương mại điện tử (E-commerce): Bán hàng online với giỏ hàng, thanh toán, quản lý đơn hàng, tích hợp vận chuyển. Hỗ trợ WooCommerce, Shopify, custom platform.

• Website Landing Page: Trang đích chuyển đổi cao cho chiến dịch quảng cáo, ra mắt sản phẩm, thu thập lead.

• Website Webapp: Ứng dụng web phức tạp như hệ thống đặt lịch, quản lý nội bộ, portal khách hàng, LMS (hệ thống học trực tuyến).

• Website Blog/Tin tức: Nền tảng content marketing với hệ thống phân loại, tìm kiếm, bình luận, chia sẻ MXH.

Mỗi loại website đều được thiết kế riêng biệt, tối ưu cho mục tiêu kinh doanh cụ thể của khách hàng, không sử dụng template có sẵn.`
        },
        {
          heading: "Quy trình thiết kế website tại VMST",
          body: `Quy trình thiết kế website tại VMST Solutions được chuẩn hóa theo tiêu chuẩn quốc tế, đảm bảo sản phẩm đạt chất lượng cao nhất:

Bước 1 - Khảo sát & Phân tích: Đội ngũ tư vấn viên sẽ làm việc trực tiếp với khách hàng để hiểu rõ nhu cầu, mục tiêu kinh doanh, đối tượng khách hàng mục tiêu. Đồng thời phân tích website đối thủ cạnh tranh, xu hướng thị trường để đề xuất giải pháp tối ưu.

Bước 2 - Thiết kế giao diện: Designer tạo wireframe (khung sườn) và mockup (bản thiết kế chi tiết) cho từng trang. Khách hàng được duyệt và góp ý trực tiếp, điều chỉnh không giới hạn cho đến khi hài lòng.

Bước 3 - Lập trình phát triển: Đội ngũ developer chuyển đổi thiết kế thành code chuẩn W3C, responsive, tối ưu performance. Tích hợp CMS, các tính năng theo yêu cầu.

Bước 4 - Testing & QA: Kiểm thử toàn diện trên nhiều trình duyệt (Chrome, Firefox, Safari, Edge), nhiều thiết bị (desktop, tablet, mobile). Performance test, security audit, SEO audit.

Bước 5 - Go-live & Đào tạo: Triển khai lên server production, cấu hình DNS, SSL. Đào tạo khách hàng sử dụng CMS quản trị nội dung. Bàn giao tài liệu hướng dẫn.

Bước 6 - Hỗ trợ & Bảo trì: Hỗ trợ kỹ thuật 24/7, backup tự động, cập nhật bảo mật, monitoring uptime. Báo cáo hiệu suất định kỳ hàng tháng.`
        },
        {
          heading: "Chi phí thiết kế website tại VMST Solutions",
          body: `Chi phí thiết kế website phụ thuộc vào nhiều yếu tố: quy mô, tính năng, độ phức tạp thiết kế, và công nghệ sử dụng. VMST Solutions cam kết báo giá minh bạch, không phát sinh chi phí ẩn.

Các gói dịch vụ phổ biến:
• Website giới thiệu cơ bản: Từ 5-15 triệu, phù hợp doanh nghiệp nhỏ, startup
• Website doanh nghiệp chuyên nghiệp: Từ 15-50 triệu, nhiều tính năng, CMS đầy đủ
• Website thương mại điện tử: Từ 30-100 triệu, tích hợp thanh toán, quản lý đơn hàng
• Webapp tùy chỉnh: Báo giá theo dự án, phù hợp yêu cầu đặc thù

Tất cả các gói đều bao gồm: hosting 1 năm, SSL miễn phí, hỗ trợ kỹ thuật 12 tháng, đào tạo sử dụng, và tối ưu SEO cơ bản. Liên hệ ngay để nhận báo giá chi tiết cho dự án của bạn.`
        },
      ]}
      faqs={[
        { q: "Thời gian thiết kế website mất bao lâu?", a: "Website cơ bản: 2-4 tuần. Website doanh nghiệp: 4-8 tuần. E-commerce/Webapp: 2-4 tháng. Thời gian có thể thay đổi tùy độ phức tạp và tốc độ phản hồi của khách hàng." },
        { q: "VMST có hỗ trợ viết nội dung website không?", a: "Có, chúng tôi có đội ngũ content writer chuyên viết nội dung chuẩn SEO cho website doanh nghiệp, bao gồm giới thiệu, dịch vụ, blog, và landing page." },
        { q: "Website có thể tự quản trị nội dung không?", a: "Hoàn toàn có thể. Tất cả website đều được tích hợp CMS (hệ thống quản trị nội dung) trực quan, dễ sử dụng. Chúng tôi sẽ đào tạo bạn sử dụng sau khi bàn giao." },
        { q: "Có được sở hữu source code không?", a: "Có, khách hàng được sở hữu toàn bộ source code và dữ liệu website sau khi thanh toán đầy đủ." },
        { q: "VMST có thiết kế website đa ngôn ngữ không?", a: "Có, chúng tôi hỗ trợ thiết kế website đa ngôn ngữ (tiếng Việt, Anh, Trung, Nhật, Hàn...) với hệ thống quản lý ngôn ngữ dễ sử dụng." },
      ]}
      pricingTiers={[
        { name: "Starter", price: "5.000.000đ", features: ["Landing page 1 trang", "Responsive mobile", "SSL miễn phí", "Hosting 1 năm"] },
        { name: "Business", price: "15.000.000đ", highlight: true, features: ["Website 5-10 trang", "Chuẩn SEO on-page", "Google Analytics", "Bảo trì 6 tháng", "Tốc độ tải < 3s"] },
        { name: "Enterprise", price: "50.000.000đ", features: ["Website không giới hạn trang", "E-commerce tích hợp", "Multi-language", "Bảo trì 12 tháng", "Đội ngũ riêng", "SLA cam kết"] },
      ]}
      relatedServices={[
        { title: "Dịch vụ SEO", path: "/dich-vu/seo" },
        { title: "Digital Marketing", path: "/dich-vu/digital-marketing" },
        { title: "Cloud VPS", path: "/dich-vu/cloud-vps" },
      ]}
    />
  );
}
