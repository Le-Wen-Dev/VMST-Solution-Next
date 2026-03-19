import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Lập trình Mobile App | VMST Solutions",
  description: "Ứng dụng di động iOS & Android chuyên nghiệp, hiệu năng cao. React Native và Flutter, 1 codebase đa nền tảng.",
};

export default function MobileApp() {
  return (
    <ServiceDetailTemplate
      title="Lập trình Mobile App"
      subtitle="Ứng dụng di động iOS & Android chuyên nghiệp, hiệu năng cao"
      heroDesc="VMST Solutions phát triển ứng dụng mobile cho doanh nghiệp trên cả iOS và Android. Sử dụng React Native và Flutter để tối ưu chi phí với 1 codebase chạy đa nền tảng. Từ app thương mại điện tử, quản lý nội bộ đến app tích hợp ERP/CRM — VMST đã triển khai cho doanh nghiệp tại Việt Nam, Singapore và Mỹ."
      problemTitle="Thách thức khi phát triển mobile app"
      problems={[
        "Chi phí phát triển app native cho cả iOS và Android quá cao, gấp đôi ngân sách",
        "App tải chậm, UX kém, người dùng gỡ cài đặt sau vài ngày sử dụng",
        "Thiếu đội ngũ mobile developer in-house, phụ thuộc freelancer không cam kết",
        "App không tích hợp được với hệ thống backend hiện tại (ERP, CRM, website)",
        "Khó maintain và update app trên cả 2 nền tảng, tốn nhiều thời gian và nhân lực",
      ]}
      solutionTitle="Giải pháp Mobile App từ VMST"
      solutions={[
        "Cross-platform (React Native/Flutter): 1 codebase chạy iOS + Android, tiết kiệm 40-50% chi phí",
        "UI/UX design chuẩn Material Design & Human Interface Guidelines, native-like experience",
        "Đội ngũ mobile developer full-time, quy trình Agile/Scrum, demo mỗi 2 tuần",
        "Tích hợp sẵn với Odoo ERP, CRM VMST, website, API bên thứ 3 (thanh toán, vận chuyển)",
        "CI/CD pipeline tự động build, test, deploy lên App Store & Google Play",
        "Push notification, offline mode, biometric login, deep linking",
      ]}
      features={[
        { title: "Cross-platform", desc: "React Native hoặc Flutter, 1 codebase chạy iOS + Android. Hiệu năng gần native, tiết kiệm 40-50% chi phí phát triển." },
        { title: "UI/UX Mobile-first", desc: "Thiết kế giao diện chuẩn mobile: gesture navigation, smooth animation, responsive layout, dark mode support." },
        { title: "Offline Mode", desc: "App hoạt động ngay cả khi không có internet. Đồng bộ dữ liệu tự động khi có kết nối trở lại." },
        { title: "Push Notification", desc: "Gửi thông báo đẩy real-time đến người dùng. Segment theo nhóm, cá nhân hóa nội dung, schedule notification." },
        { title: "Tích hợp API", desc: "Kết nối với mọi hệ thống: ERP Odoo, CRM, payment gateway (MoMo, ZaloPay, VNPAY), maps, camera, GPS." },
        { title: "App Store Optimization", desc: "Tối ưu listing trên App Store & Google Play: icon, screenshot, mô tả, từ khóa để tăng download organic." },
      ]}
      process={[
        { num: "01", title: "Phân tích & Wireframe", desc: "Khảo sát nhu cầu, phân tích đối thủ, tạo wireframe UX flow, xác định tính năng MVP." },
        { num: "02", title: "Thiết kế UI & Prototype", desc: "Design giao diện chi tiết, tạo interactive prototype, duyệt với khách hàng, điều chỉnh." },
        { num: "03", title: "Lập trình & Testing", desc: "Code theo sprint 2 tuần, unit test + integration test, beta testing với real users." },
        { num: "04", title: "Publish & Bảo trì", desc: "Submit App Store & Google Play, hỗ trợ review process, monitoring crash, update định kỳ." },
      ]}
      contentBlocks={[
        {
          heading: "Tại sao doanh nghiệp cần mobile app riêng?",
          body: `Theo thống kê, 85% thời gian sử dụng smartphone dành cho mobile app. Một ứng dụng mobile chuyên nghiệp giúp doanh nghiệp:

• Tiếp cận khách hàng 24/7 ngay trên điện thoại, push notification nhắc nhở mua hàng
• Tăng loyalty và retention rate nhờ trải nghiệm cá nhân hóa, loyalty program tích hợp
• Tự động hóa quy trình nội bộ: chấm công, báo cáo, duyệt đơn, quản lý kho ngay trên điện thoại
• Tích hợp thanh toán online, đặt hàng, theo dõi đơn hàng real-time
• Xây dựng thương hiệu chuyên nghiệp, tạo lợi thế cạnh tranh so với đối thủ chưa có app

VMST Solutions phát triển mobile app cho đa dạng ngành: bán lẻ, F&B, logistics, bất động sản, giáo dục, y tế. Sử dụng React Native hoặc Flutter để tối ưu chi phí mà vẫn đảm bảo hiệu năng native-like.`
        },
        {
          heading: "React Native hay Flutter — nên chọn nào?",
          body: `Cả hai đều là framework cross-platform hàng đầu. VMST tư vấn dựa trên nhu cầu cụ thể:

React Native (Meta):
• Ecosystem lớn, nhiều thư viện có sẵn, cộng đồng đông đảo
• Phù hợp app cần tích hợp nhiều native module, kết nối API phức tạp
• Dễ tìm developer, cost-effective cho bảo trì dài hạn
• Đã được Instagram, Facebook, Shopify, Discord sử dụng

Flutter (Google):
• Hiệu năng render UI vượt trội nhờ Skia engine, animation mượt mà
• Phù hợp app cần giao diện phức tạp, nhiều animation, custom UI
• Widget system phong phú, hot reload cực nhanh
• Đã được Google Pay, BMW, Alibaba sử dụng

VMST có đội ngũ thành thạo cả hai framework, đề xuất công nghệ phù hợp nhất với từng dự án.`
        },
        {
          heading: "Chi phí lập trình mobile app tại VMST",
          body: `Chi phí phụ thuộc vào: độ phức tạp tính năng, số lượng màn hình, tích hợp API, nền tảng (iOS/Android/cả hai).

Gói MVP: Từ 30 triệu — App 5-10 màn hình, tính năng cơ bản, 1 nền tảng. Phù hợp startup cần validate ý tưởng nhanh.

Gói Business: Từ 80 triệu — App 15-30 màn hình, cross-platform iOS + Android, tích hợp thanh toán, push notification. Phù hợp SME.

Gói Enterprise: Từ 200 triệu — App phức tạp, offline mode, real-time sync, tích hợp ERP/CRM, admin dashboard web. Phù hợp doanh nghiệp lớn.

Tất cả gói bao gồm: thiết kế UI/UX, lập trình, testing, submit App Store & Google Play, bảo trì 6 tháng. Liên hệ VMST để nhận báo giá chi tiết.`
        },
      ]}
      faqs={[
        { q: "Lập trình mobile app mất bao lâu?", a: "App MVP: 1-2 tháng. App Business: 3-4 tháng. App Enterprise: 4-8 tháng. VMST phát triển theo Agile, demo mỗi 2 tuần để khách hàng review." },
        { q: "App có chạy được trên cả iOS và Android không?", a: "Có, VMST sử dụng React Native hoặc Flutter để phát triển 1 codebase chạy trên cả 2 nền tảng, tiết kiệm 40-50% chi phí so với native." },
        { q: "VMST có hỗ trợ submit lên App Store không?", a: "Có, VMST hỗ trợ toàn bộ: tạo tài khoản developer, chuẩn bị assets, viết mô tả ASO, submit và xử lý review process của Apple và Google." },
        { q: "Sau khi bàn giao, ai bảo trì app?", a: "VMST bảo trì miễn phí 6 tháng. Sau đó có gói bảo trì hàng tháng: fix bug, update iOS/Android mới, thêm tính năng, monitoring crash analytics." },
      ]}
      pricingTiers={[
        { name: "MVP", price: "30.000.000đ", features: ["5-10 màn hình", "1 nền tảng (iOS hoặc Android)", "UI/UX cơ bản", "Bảo trì 3 tháng"] },
        { name: "Business", price: "80.000.000đ", highlight: true, features: ["15-30 màn hình", "iOS + Android", "Push notification", "Tích hợp thanh toán", "Bảo trì 6 tháng"] },
        { name: "Enterprise", price: "200.000.000đ", features: ["Không giới hạn màn hình", "Offline mode", "Tích hợp ERP/CRM", "Admin dashboard web", "Bảo trì 12 tháng", "SLA cam kết"] },
      ]}
      relatedServices={[
        { title: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
        { title: "Lập trình CRM", path: "/dich-vu/crm" },
        { title: "ERP Odoo", path: "/dich-vu/erp-odoo" },
      ]}
    />
  );
}
