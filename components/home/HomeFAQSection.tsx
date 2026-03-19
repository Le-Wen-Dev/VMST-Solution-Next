"use client";

import { useEffect } from "react";
import ScrollAnimate from "@/components/ScrollAnimate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Phần mềm ERP Odoo có phù hợp doanh nghiệp nhỏ không?", a: "Có, Odoo có gói Starter từ 20 triệu với 3 module cơ bản (Sales, Inventory, Accounting). Doanh nghiệp bắt đầu nhỏ rồi mở rộng module khi phát triển. VMST tư vấn miễn phí module phù hợp nhất." },
  { q: "Odoo ERP tích hợp được với phần mềm kế toán Việt Nam không?", a: "Có, VMST localization Odoo theo chuẩn kế toán Việt Nam (Thông tư 200, 133), tích hợp hóa đơn điện tử, ngân hàng, đơn vị vận chuyển như VNPT, Viettel, GHN, GHTK." },
  { q: "Nên chọn Odoo hay SAP cho doanh nghiệp vừa?", a: "Odoo chi phí thấp hơn SAP 50-70%, giao diện thân thiện hơn, tùy chỉnh dễ hơn. SAP phù hợp tập đoàn lớn 1000+ nhân viên. Doanh nghiệp 10-500 nhân viên nên chọn Odoo để tiết kiệm chi phí và triển khai nhanh." },
  { q: "VMST có đào tạo nhân viên sử dụng Odoo không?", a: "Có, tất cả gói triển khai Odoo đều bao gồm đào tạo nhân viên: đào tạo end-user, admin, và tài liệu hướng dẫn tiếng Việt. Hỗ trợ on-site 2 tuần đầu sau go-live." },
  { q: "Odoo có chạy trên mobile không?", a: "Có, Odoo Enterprise có mobile app native iOS/Android. Nhân viên kiểm kho, chấm công, duyệt đơn hàng, xem báo cáo ngay trên điện thoại. Odoo Community truy cập qua trình duyệt mobile responsive." },
  { q: "Nên thiết kế website bằng WordPress hay code tay?", a: "WordPress phù hợp website doanh nghiệp, blog, landing page — dễ quản trị, nhiều plugin. Code tay (React, Next.js) phù hợp webapp phức tạp, cần hiệu năng cao. VMST tư vấn công nghệ phù hợp nhất." },
  { q: "Website VMST thiết kế có tối ưu tốc độ không?", a: "Có, tất cả website đạt PageSpeed Score 90+. Áp dụng lazy loading, CDN, minify CSS/JS, WebP images, server caching. Tốc độ tải trang dưới 3 giây trên mọi thiết bị." },
  { q: "Có thiết kế website đa ngôn ngữ cho doanh nghiệp xuất khẩu không?", a: "Có, VMST chuyên thiết kế website đa ngôn ngữ (Việt, Anh, Trung, Nhật, Hàn) với hreflang SEO. Đã triển khai cho doanh nghiệp xuất khẩu tại Singapore, Mỹ, Úc, Hong Kong." },
  { q: "Thiết kế website e-commerce cần bao nhiêu tiền?", a: "Website e-commerce cơ bản từ 15 triệu (WooCommerce, <100 sản phẩm). Gói chuyên nghiệp từ 30 triệu (thanh toán online, quản lý đơn hàng, vận chuyển). Gói enterprise từ 50 triệu (multi-vendor, API tích hợp)." },
  { q: "VMST có thiết kế lại website cũ không?", a: "Có, VMST nhận redesign website cũ: cập nhật giao diện hiện đại, tối ưu mobile responsive, cải thiện SEO, tăng tốc độ. Giữ nguyên nội dung và domain, không ảnh hưởng ranking hiện tại." },
  { q: "Nên chọn hosting hay VPS cho website doanh nghiệp?", a: "Website < 5000 lượt/ngày: hosting đủ dùng. Website > 5000 lượt/ngày hoặc chạy ứng dụng: nên dùng VPS. VPS VMST từ 200K/tháng, tốc độ nhanh gấp 10 lần hosting, bảo mật cao hơn." },
  { q: "VPS VMST có chống DDoS không?", a: "Có, tất cả VPS đều có DDoS Protection layer 3/4/7 lên đến 100Gbps. Firewall iptables + CSF, Fail2Ban chống brute force. Monitoring 24/7 tự động phát hiện và chặn tấn công." },
  { q: "Chuyển hosting sang VPS VMST có mất dữ liệu không?", a: "Không, VMST thực hiện migration zero-downtime: clone toàn bộ data sang VPS mới, test kỹ, rồi chuyển DNS. Website hoạt động liên tục không gián đoạn. Migration miễn phí cho mọi gói VPS." },
  { q: "VPS có cài được nhiều website không?", a: "Có, một VPS có thể host nhiều website. Gói VPS Business (4 vCPU, 8GB RAM) chạy tốt 10-20 website cùng lúc. VMST cài đặt sẵn control panel quản lý dễ dàng." },
  { q: "Cloud VPS VMST thanh toán như thế nào?", a: "Thanh toán hàng tháng hoặc hàng năm (giảm 20%). Hỗ trợ chuyển khoản, MoMo, ZaloPay, VNPAY. Hóa đơn VAT đầy đủ. Không phí setup, không cam kết dài hạn." },
  { q: "VMST bảo hành website bao lâu sau khi bàn giao?", a: "Bảo hành miễn phí 6-12 tháng tùy gói. Bao gồm: sửa lỗi kỹ thuật, cập nhật bảo mật, backup, monitoring. Sau bảo hành có gói bảo trì từ 500K-2 triệu/tháng tùy quy mô." },
  { q: "Thời gian phản hồi hỗ trợ kỹ thuật là bao lâu?", a: "Trong giờ hành chính: phản hồi trong 30 phút. Ngoài giờ: phản hồi trong 2 giờ. Sự cố nghiêm trọng (website down): xử lý trong 1 giờ 24/7. Hỗ trợ qua Zalo, Hotline, Email, Ticket." },
  { q: "VMST có cam kết bảo mật dữ liệu khách hàng không?", a: "Có, VMST ký NDA (thỏa thuận bảo mật) cho mọi dự án. Dữ liệu khách hàng được mã hóa, backup đa lớp. Không chia sẻ source code, database, thông tin kinh doanh cho bên thứ 3." },
  { q: "Nếu nhân viên nghỉ việc, ai hỗ trợ hệ thống ERP/CRM?", a: "VMST cung cấp tài liệu hướng dẫn chi tiết, video đào tạo. Nếu nhân viên mới cần training lại, VMST hỗ trợ đào tạo với chi phí ưu đãi. Gói bảo trì bao gồm hỗ trợ sử dụng liên tục." },
  { q: "Có hỗ trợ nâng cấp hệ thống sau này không?", a: "Có, VMST hỗ trợ nâng cấp tính năng, thêm module, tích hợp hệ thống mới. Ưu đãi 20-30% cho khách hàng cũ. Đội ngũ đã hiểu rõ hệ thống nên triển khai nhanh, chi phí thấp hơn." },
  { q: "Dịch vụ SEO VMST có gì khác so với các agency khác?", a: "VMST áp dụng SEO white-hat 100%, cam kết KPI trong hợp đồng, báo cáo minh bạch bằng Ahrefs/SEMrush. Không dùng PBN, spam link. Kinh nghiệm SEO cho doanh nghiệp quốc tế tại Singapore, Mỹ, Úc." },
  { q: "SEO có hiệu quả hơn chạy quảng cáo không?", a: "SEO cho ROI dài hạn bền vững: traffic miễn phí 24/7 sau khi đạt top. Google Ads cho kết quả ngay nhưng tốn phí mỗi click. Chiến lược tốt nhất: chạy Ads ngắn hạn, đầu tư SEO dài hạn." },
  { q: "Website mới bao lâu thì nên bắt đầu làm SEO?", a: "Nên làm SEO ngay từ khi thiết kế website: cấu trúc URL, meta tags, sitemap, schema markup. Sau khi go-live, bắt đầu content marketing và link building. Càng sớm càng tốt vì SEO cần thời gian tích lũy." },
  { q: "VMST có viết content SEO không?", a: "Có, VMST có đội ngũ content writer chuyên viết bài chuẩn SEO: nghiên cứu từ khóa, viết bài pillar page, supporting articles, blog posts. Content theo chuẩn E-E-A-T của Google, 4-8 bài/tháng tùy gói." },
  { q: "Local SEO là gì? Có cần cho doanh nghiệp tại TP.HCM không?", a: "Local SEO giúp doanh nghiệp xuất hiện trên Google Maps và kết quả tìm kiếm địa phương. Rất cần cho nhà hàng, spa, phòng khám, cửa hàng tại TP.HCM. VMST tối ưu Google Business Profile, local citations." },
  { q: "Chạy Google Ads bao lâu thì có khách hàng?", a: "Google Ads cho kết quả ngay khi chiến dịch được duyệt (thường 24-48h). Sau 1-2 tuần tối ưu, hiệu quả ổn định. VMST setup tracking chuyển đổi chính xác đến từng lead, cuộc gọi, đơn hàng." },
  { q: "Facebook Ads có phù hợp cho doanh nghiệp B2B không?", a: "B2B nên ưu tiên Google Ads và LinkedIn Ads. Facebook Ads phù hợp hơn cho B2C, brand awareness. Tuy nhiên, Facebook retargeting vẫn hiệu quả cho B2B. VMST tư vấn kênh phù hợp nhất." },
  { q: "VMST quản lý quảng cáo có phải trả phí hàng tháng không?", a: "Có, phí quản lý từ 5 triệu/tháng tùy scope (số kênh, ngân sách ads). Bao gồm: setup campaign, viết ad copy, thiết kế creative, tối ưu hàng ngày, A/B testing, báo cáo weekly." },
  { q: "Làm sao biết quảng cáo có hiệu quả không?", a: "VMST cung cấp dashboard real-time tracking: impressions, clicks, leads, cost per lead, ROAS. Báo cáo chi tiết hàng tuần với phân tích insight và đề xuất cải tiến. Khách hàng truy cập bất kỳ lúc nào." },
  { q: "Có chạy quảng cáo cho thị trường nước ngoài không?", a: "Có, VMST có kinh nghiệm chạy Google Ads, Facebook Ads cho thị trường Singapore, Mỹ, Úc, Nhật Bản. Hiểu rõ hành vi người tiêu dùng đa văn hóa, viết ad copy tiếng Anh chuẩn native." },
  { q: "Lập trình mobile app cross-platform là gì?", a: "Cross-platform là phát triển 1 codebase chạy được trên cả iOS và Android. VMST sử dụng React Native & Flutter giúp tiết kiệm 40-50% chi phí so với phát triển native riêng cho từng nền tảng." },
  { q: "Chi phí lập trình app mobile bao nhiêu?", a: "App MVP cơ bản từ 30 triệu, app doanh nghiệp iOS + Android từ 80 triệu, app enterprise phức tạp từ 200 triệu. Bao gồm UI/UX design, development, testing, đăng App Store & Google Play." },
  { q: "VMST phát triển app bằng React Native hay Flutter?", a: "Cả hai. React Native phù hợp app cần tích hợp nhiều web service. Flutter phù hợp app cần animation mượt, UI phức tạp. VMST tư vấn framework phù hợp nhất cho từng dự án." },
  { q: "App mobile có tích hợp được với ERP/CRM không?", a: "Có, VMST chuyên tích hợp mobile app với hệ thống Odoo ERP, CRM, website qua REST API. Nhân viên quản lý đơn hàng, kho, khách hàng ngay trên điện thoại." },
  { q: "Bao lâu thì hoàn thành một app mobile?", a: "App MVP: 4-6 tuần. App doanh nghiệp đầy đủ: 2-4 tháng. App enterprise phức tạp: 4-8 tháng. VMST áp dụng Agile, demo sau mỗi sprint 2 tuần để khách hàng review sớm." },
  { q: "VMST có đăng app lên App Store và Google Play không?", a: "Có, VMST hỗ trợ toàn bộ quy trình: tạo tài khoản developer, chuẩn bị assets (icon, screenshot), submit app, xử lý review rejection. Đảm bảo app được duyệt lên store." },
  { q: "App mobile có cần bảo trì sau khi ra mắt không?", a: "Có, app cần cập nhật khi iOS/Android ra phiên bản mới, fix bug, thêm tính năng. VMST có gói bảo trì từ 3-5 triệu/tháng bao gồm monitoring, cập nhật OS, hotfix 24/7." },
  { q: "PageSpeed Score bao nhiêu là đạt chuẩn?", a: "Google khuyến nghị PageSpeed Score 90+ (xanh). Website dưới 50 điểm ảnh hưởng nghiêm trọng đến SEO và trải nghiệm người dùng. VMST cam kết tối ưu đạt 90+ cho mọi dự án." },
  { q: "Core Web Vitals là gì và tại sao quan trọng?", a: "Core Web Vitals gồm LCP (tốc độ tải), FID/INP (tương tác), CLS (ổn định giao diện). Google dùng CWV làm yếu tố xếp hạng SEO từ 2021. Website CWV xanh được ưu tiên trên kết quả tìm kiếm." },
  { q: "Website WordPress có tối ưu tốc độ được không?", a: "Có, VMST chuyên tối ưu WordPress: loại bỏ plugin nặng, cài cache (WP Rocket), CDN, nén ảnh WebP, minify CSS/JS, database cleanup. Kết quả từ 30 điểm lên 90+ điểm PageSpeed." },
  { q: "Tối ưu tốc độ có ảnh hưởng đến nội dung website không?", a: "Không, VMST chỉ tối ưu kỹ thuật: nén ảnh không mất chất lượng, lazy loading, caching, minify code. Nội dung, giao diện, chức năng giữ nguyên 100%. Có backup trước khi tối ưu." },
  { q: "Chi phí tối ưu tốc độ website là bao nhiêu?", a: "Gói Basic từ 3 triệu (nén ảnh, lazy loading, minify). Gói Advanced từ 8 triệu (CDN, caching, database). Gói Premium từ 20 triệu (SSR migration, edge caching, monitoring). Cam kết PageSpeed 90+." },
  { q: "Tốc độ website ảnh hưởng đến doanh thu thế nào?", a: "Theo Google, mỗi giây delay giảm 7% conversion rate. Amazon mất 1.6 tỷ USD/năm nếu chậm 1 giây. Website nhanh giữ chân khách hàng, tăng thời gian ở lại trang và tỷ lệ mua hàng." },
  { q: "Bao lâu thì hoàn thành tối ưu tốc độ?", a: "Gói Basic: 2-3 ngày. Gói Advanced: 3-5 ngày. Gói Premium: 1-2 tuần. VMST cung cấp báo cáo before/after với điểm PageSpeed cụ thể và các chỉ số Core Web Vitals." },
  { q: "Automation workflow là gì?", a: "Automation workflow là tự động hóa quy trình công việc lặp đi lặp lại: gửi email khi có đơn hàng, sync data giữa CRM và kế toán, tạo báo cáo tự động. Giảm 70% công việc thủ công." },
  { q: "VMST sử dụng công cụ automation nào?", a: "VMST sử dụng n8n (self-hosted, bảo mật cao), Zapier (dễ dùng, 5000+ tích hợp), Make (Integromat), và custom API development cho workflow phức tạp. Tư vấn công cụ phù hợp nhất." },
  { q: "Automation có tích hợp được với phần mềm hiện tại không?", a: "Có, VMST kết nối hầu hết phần mềm phổ biến: Google Workspace, Slack, Trello, CRM, ERP Odoo, Shopee, Lazada, ngân hàng, email, Zalo OA qua API hoặc webhook." },
  { q: "Chi phí triển khai automation workflow bao nhiêu?", a: "Gói Starter từ 5 triệu (3 workflow, 2 hệ thống), gói Business từ 15 triệu (10 workflow, 5+ hệ thống), gói Enterprise từ 50 triệu (không giới hạn, custom API, AI integration)." },
  { q: "Có cần biết lập trình để quản lý automation không?", a: "Không, VMST thiết lập workflow trực quan bằng drag-and-drop trên n8n/Zapier. Đào tạo nhân viên quản lý, chỉnh sửa workflow cơ bản. Workflow phức tạp VMST hỗ trợ bảo trì." },
  { q: "Automation có thay thế được nhân viên không?", a: "Automation thay thế công việc lặp đi lặp lại (nhập liệu, gửi email, sync data), giải phóng nhân viên để tập trung vào công việc sáng tạo và chiến lược. Tiết kiệm 2-5 FTE cho doanh nghiệp vừa." },
  { q: "Tại sao nên chọn VMST Solutions thay vì agency khác?", a: "VMST có kinh nghiệm quốc tế (200+ dự án tại 4 quốc gia), cung cấp trọn gói từ website đến ERP/CRM, cam kết KPI và bảo hành, đội ngũ kỹ thuật full-time hỗ trợ 24/7. Không outsource, làm trực tiếp." },
  { q: "Doanh nghiệp mới thành lập nên bắt đầu từ dịch vụ nào?", a: "Ưu tiên: (1) Website doanh nghiệp chuyên nghiệp, (2) Google Ads để có khách ngay, (3) SEO để xây dựng traffic dài hạn. VMST có gói combo tiết kiệm 15-20% khi đăng ký từ 2 dịch vụ trở lên." },
  { q: "Muốn tư vấn miễn phí thì liên hệ thế nào?", a: "Gọi Hotline 0822 636 676 hoặc 0832 575 905, email support@vmst.media, nhắn Zalo OA, hoặc điền form trên website. Phản hồi trong 30 phút giờ hành chính. Tư vấn miễn phí, không cam kết." },
  { q: "Quy trình thanh toán và hợp đồng như thế nào?", a: "Ký hợp đồng điện tử hoặc giấy. Thanh toán theo milestone: 30% ký HĐ, 40% phase 1, 30% bàn giao. Chuyển khoản, MoMo, ZaloPay. Hóa đơn GTGT đầy đủ. Bảo vệ quyền lợi hai bên." },
];

const HomeFAQSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("faq-jsonld");
      if (el) el.remove();
    };
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Câu hỏi thường gặp</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            60 câu hỏi phổ biến nhất về dịch vụ thiết kế website, SEO, ERP Odoo, Cloud VPS, Mobile App, tối ưu tốc độ, automation và bảo hành tại VMST Solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScrollAnimate>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.slice(0, 30).map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-5 hover:border-primary/15 transition-colors data-[state=open]:border-primary/20 data-[state=open]:shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-[0.9rem] hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimate>
          <ScrollAnimate delay={100}>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.slice(30, 60).map((f, i) => (
                <AccordionItem key={i + 30} value={`faq-${i + 30}`} className="bg-card rounded-xl border px-5 hover:border-primary/15 transition-colors data-[state=open]:border-primary/20 data-[state=open]:shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-[0.9rem] hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;
