import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "ERP Odoo | VMST Solutions",
  description: "Hệ thống quản trị doanh nghiệp toàn diện, tự động hóa quy trình. Đối tác triển khai Odoo ERP chuyên nghiệp tại Việt Nam.",
};

export default function ERPOdoo() {
  return (
    <ServiceDetailTemplate
      title="ERP Odoo"
      subtitle="Hệ thống quản trị doanh nghiệp toàn diện, tự động hóa quy trình"
      heroDesc="VMST Solutions là đối tác triển khai Odoo ERP chuyên nghiệp tại Việt Nam. Chúng tôi cung cấp dịch vụ tư vấn, tùy chỉnh, triển khai và đào tạo Odoo cho doanh nghiệp sản xuất, thương mại, dịch vụ. Với kinh nghiệm triển khai cho doanh nghiệp 500+ nhân viên, VMST cam kết mang lại giải pháp ERP phù hợp nhất."
      problemTitle="Thách thức quản lý doanh nghiệp"
      problems={[
        "Quy trình thủ công, tốn nhiều thời gian cho các tác vụ lặp đi lặp lại hàng ngày",
        "Dữ liệu phân tán trên nhiều phần mềm, Excel, khó tổng hợp và ra quyết định chính xác",
        "Thiếu kiểm soát tồn kho, công nợ, dẫn đến thất thoát và sai sót trong quản lý",
        "Không có hệ thống báo cáo tự động, lãnh đạo khó nắm bắt tình hình kinh doanh real-time",
        "Phần mềm hiện tại không scale được khi doanh nghiệp mở rộng quy mô",
      ]}
      solutionTitle="Giải pháp ERP Odoo từ VMST"
      solutions={[
        "Tự động hóa 80%+ quy trình kinh doanh: bán hàng, mua hàng, kho, kế toán, nhân sự",
        "Tích hợp tất cả dữ liệu vào một hệ thống duy nhất, truy cập mọi lúc mọi nơi",
        "Kiểm soát tồn kho real-time, cảnh báo tự động khi sắp hết hàng, đặt hàng tự động",
        "Dashboard báo cáo trực quan, KPI real-time cho lãnh đạo ra quyết định nhanh chóng",
        "Odoo modular: bắt đầu nhỏ, mở rộng module khi doanh nghiệp phát triển",
        "Tùy chỉnh theo quy trình riêng của doanh nghiệp, không ép theo template có sẵn",
      ]}
      features={[
        { title: "Sales & CRM", desc: "Quản lý pipeline bán hàng, theo dõi cơ hội, báo giá, hợp đồng. Tự động gửi email follow-up, nhắc nhở deadline." },
        { title: "Inventory & Warehouse", desc: "Quản lý kho đa vị trí, barcode scanning, lot/serial tracking, auto reordering. Real-time stock levels." },
        { title: "Accounting & Finance", desc: "Kế toán tài chính tự động, quản lý công nợ, bank reconciliation, tax management, financial reporting." },
        { title: "HR & Payroll", desc: "Quản lý nhân viên, chấm công, tính lương tự động, leave management, recruitment, training." },
        { title: "Manufacturing (MRP)", desc: "Quản lý sản xuất, BOM, routing, quality control, maintenance scheduling, capacity planning." },
        { title: "Project Management", desc: "Quản lý dự án, task assignment, timesheet, Gantt chart, resource planning, milestone tracking." },
      ]}
      process={[
        { num: "01", title: "Khảo sát & Tư vấn", desc: "Phân tích quy trình kinh doanh hiện tại, xác định pain points, đề xuất module Odoo phù hợp." },
        { num: "02", title: "Tùy chỉnh & Phát triển", desc: "Customize Odoo theo quy trình riêng, phát triển module bổ sung, tích hợp hệ thống bên thứ 3." },
        { num: "03", title: "Migrate & Testing", desc: "Chuyển đổi dữ liệu từ hệ thống cũ, UAT testing toàn diện, fix bug, tối ưu performance." },
        { num: "04", title: "Go-live & Đào tạo", desc: "Triển khai production, đào tạo nhân viên sử dụng, hỗ trợ on-site 2 tuần đầu, bảo trì liên tục." },
      ]}
      contentBlocks={[
        {
          heading: "Odoo ERP là gì?",
          body: `Odoo là phần mềm ERP mã nguồn mở phổ biến nhất thế giới với hơn 12 triệu người dùng tại 120+ quốc gia. Odoo cung cấp hơn 30 module tích hợp covering toàn bộ hoạt động doanh nghiệp: CRM, Sales, Inventory, Accounting, HR, Manufacturing, Project, Marketing, Website, eCommerce...

Điểm mạnh của Odoo so với SAP, Oracle, Microsoft Dynamics:
• Chi phí thấp hơn 50-70% nhờ mã nguồn mở
• Giao diện thân thiện, dễ sử dụng, ít training
• Modular: mua/thuê module cần dùng, không phải trả cho tính năng không cần
• Tùy chỉnh cao: code Python mở, customize theo nhu cầu riêng
• Community lớn: hàng nghìn module bổ sung miễn phí từ cộng đồng
• Cloud hoặc On-premise: linh hoạt triển khai theo yêu cầu bảo mật

VMST Solutions là đơn vị có kinh nghiệm triển khai Odoo cho doanh nghiệp Việt Nam, bao gồm localization kế toán Việt Nam (Thông tư 200, 133), tích hợp hóa đơn điện tử, ngân hàng, đơn vị vận chuyển.`
        },
        {
          heading: "Các ngành nghề phù hợp với Odoo ERP",
          body: `Odoo phù hợp cho hầu hết mọi ngành nghề, đặc biệt:

• Sản xuất (Manufacturing): Quản lý BOM, routing, quality control, maintenance. Tối ưu cho nhà máy từ 50-5000 nhân viên.

• Thương mại & Phân phối: Quản lý đa kho, vận chuyển, công nợ. Hỗ trợ multi-company, multi-currency.

• Dịch vụ & Consulting: Project management, timesheet, invoicing. Theo dõi profitability theo dự án.

• Bán lẻ (Retail): POS, loyalty program, eCommerce. Đồng bộ online-offline real-time.

• Xây dựng & Bất động sản: Quản lý dự án, nhà thầu, tiến độ, chi phí. Contract management.

• Giáo dục: Quản lý học viên, khóa học, lịch giảng dạy, thu học phí. LMS tích hợp.

VMST tư vấn miễn phí để xác định module Odoo phù hợp nhất với doanh nghiệp bạn, tránh đầu tư dư thừa.`
        },
        {
          heading: "Chi phí triển khai Odoo ERP",
          body: `Chi phí triển khai Odoo ERP phụ thuộc vào: số module, mức độ tùy chỉnh, số lượng user, hình thức triển khai (Cloud/On-premise).

Gói Startup: Từ 30 triệu - 3-5 module cơ bản (Sales, CRM, Inventory), 1-10 users, tùy chỉnh nhẹ, cloud hosting. Phù hợp startup, SME.

Gói Professional: Từ 80 triệu - 5-10 module, 10-50 users, tùy chỉnh trung bình, tích hợp 3rd party. Phù hợp doanh nghiệp vừa.

Gói Enterprise: Từ 200 triệu - Full module, 50+ users, tùy chỉnh sâu, on-premise option, dedicated support. Phù hợp doanh nghiệp lớn, sản xuất.

Tất cả gói bao gồm: khảo sát, tùy chỉnh, data migration, đào tạo, hỗ trợ 12 tháng. Liên hệ VMST để nhận demo miễn phí và báo giá chi tiết theo nhu cầu cụ thể.`
        },
      ]}
      faqs={[
        { q: "Triển khai Odoo mất bao lâu?", a: "Gói cơ bản: 1-2 tháng. Gói chuyên nghiệp: 3-6 tháng. Gói enterprise: 6-12 tháng. Phụ thuộc vào mức độ tùy chỉnh và tốc độ phản hồi khách hàng." },
        { q: "Có cần thay đổi quy trình hiện tại không?", a: "Không nhất thiết. VMST customize Odoo theo quy trình hiện tại của doanh nghiệp. Tuy nhiên, chúng tôi sẽ tư vấn cải tiến quy trình nếu phát hiện cơ hội tối ưu." },
        { q: "Dữ liệu cũ có chuyển được sang Odoo không?", a: "Có, VMST hỗ trợ migrate dữ liệu từ Excel, phần mềm cũ (SAP, MISA, Fast...) sang Odoo. Đảm bảo dữ liệu chính xác và không bị mất." },
        { q: "Odoo Community hay Enterprise?", a: "Community miễn phí, phù hợp doanh nghiệp nhỏ. Enterprise có nhiều tính năng nâng cao (studio, reporting, IoT). VMST tư vấn phiên bản phù hợp nhất." },
      ]}
      pricingTiers={[
        { name: "Odoo Starter", price: "20.000.000đ", features: ["3 module cơ bản", "Odoo Community", "Đào tạo 2 buổi", "Hỗ trợ 3 tháng"] },
        { name: "Odoo Business", price: "60.000.000đ", highlight: true, features: ["10 module tùy chỉnh", "Odoo Enterprise", "Tích hợp thanh toán", "Đào tạo nhân viên", "Hỗ trợ 12 tháng"] },
        { name: "Odoo Full Suite", price: "200.000.000đ", features: ["Toàn bộ 30+ module", "Tùy chỉnh chuyên sâu", "Tích hợp API bên thứ 3", "Đội triển khai riêng", "SLA 24/7", "Bảo trì vĩnh viễn"] },
      ]}
      relatedServices={[
        { title: "Lập trình CRM", path: "/dich-vu/crm" },
        { title: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
        { title: "Cloud VPS", path: "/dich-vu/cloud-vps" },
      ]}
    />
  );
}
