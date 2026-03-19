import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Automation Workflow | VMST Solutions",
  description: "Tự động hóa quy trình doanh nghiệp, tiết kiệm 70% thời gian thủ công. n8n, Zapier, Make, Power Automate và custom API integration.",
};

export default function AutomationWorkflow() {
  return (
    <ServiceDetailTemplate
      title="Automation Workflow"
      subtitle="Tự động hóa quy trình doanh nghiệp, tiết kiệm 70% thời gian thủ công"
      heroDesc="VMST Solutions triển khai giải pháp Automation Workflow giúp doanh nghiệp tự động hóa quy trình kinh doanh: từ marketing automation, sales pipeline, HR onboarding đến tài chính kế toán. Sử dụng n8n, Zapier, Make, Power Automate và custom API integration để kết nối mọi phần mềm doanh nghiệp đang dùng."
      problemTitle="Vấn đề quy trình thủ công"
      problems={[
        "Nhân viên tốn 40-60% thời gian cho các tác vụ lặp đi lặp lại: nhập liệu, gửi email, tạo báo cáo",
        "Dữ liệu không đồng bộ giữa các phần mềm: CRM, kế toán, email, sheet, kho — dẫn đến sai sót",
        "Không có quy trình approval tự động, manager phải duyệt thủ công qua Zalo/email",
        "Thiếu notification & alert tự động, bỏ lỡ deadline, quên follow-up khách hàng",
        "Không scale được khi doanh nghiệp mở rộng, thêm người = thêm sai sót",
      ]}
      solutionTitle="Giải pháp Automation từ VMST"
      solutions={[
        "Tự động hóa 80%+ tác vụ lặp: tạo hóa đơn, gửi email follow-up, cập nhật CRM, tạo báo cáo",
        "Kết nối mọi phần mềm doanh nghiệp: Google Workspace, Slack, CRM, ERP, ngân hàng, vận chuyển",
        "Approval workflow tự động: submit → auto notify → approve/reject → next step, tracking real-time",
        "Alert & notification thông minh: nhắc deadline, cảnh báo tồn kho thấp, báo lead mới real-time",
        "Custom integration qua API: kết nối phần mềm nội bộ, legacy system, database riêng",
        "Dashboard monitoring: theo dõi tất cả workflow đang chạy, log lỗi, thống kê hiệu suất",
      ]}
      features={[
        { title: "Marketing Automation", desc: "Tự động nurture lead: gửi email sequence, SMS, Zalo theo hành vi. Scoring lead, segment, personalize content tự động." },
        { title: "Sales Automation", desc: "Auto assign lead, tạo deal trong CRM, gửi báo giá, nhắc follow-up, update pipeline. Giảm 60% thời gian admin cho sales team." },
        { title: "HR & Onboarding", desc: "Tự động hóa tuyển dụng, onboarding nhân viên mới: tạo tài khoản, gửi tài liệu, lên lịch training, checklist task tự động." },
        { title: "Finance Automation", desc: "Tự động tạo invoice, reconcile thanh toán, nhắc công nợ, báo cáo tài chính. Tích hợp ngân hàng, cổng thanh toán." },
        { title: "Data Sync", desc: "Đồng bộ dữ liệu real-time giữa CRM, ERP, e-commerce, Google Sheets, kế toán. Không còn nhập liệu trùng lặp." },
        { title: "Custom Workflow", desc: "Thiết kế workflow tùy chỉnh theo quy trình riêng: approval chain, conditional logic, parallel tasks, error handling." },
      ]}
      process={[
        { num: "01", title: "Khảo sát quy trình", desc: "Phân tích quy trình hiện tại, xác định tác vụ lặp, bottleneck, và cơ hội automation có ROI cao nhất." },
        { num: "02", title: "Thiết kế Workflow", desc: "Vẽ workflow diagram, xác định trigger, actions, conditions. Chọn platform phù hợp (n8n, Zapier, custom)." },
        { num: "03", title: "Triển khai & Test", desc: "Cài đặt workflow, kết nối API, test với dữ liệu thực, xử lý edge case, error handling." },
        { num: "04", title: "Training & Monitor", desc: "Đào tạo team sử dụng, setup monitoring, alert khi workflow lỗi, tối ưu liên tục." },
      ]}
      contentBlocks={[
        {
          heading: "Automation Workflow là gì?",
          body: `Automation Workflow (tự động hóa quy trình) là việc sử dụng phần mềm để tự động thực hiện các tác vụ kinh doanh lặp đi lặp lại mà trước đây cần làm thủ công. Ví dụ:

• Khách hàng điền form trên website → tự động tạo lead trong CRM → gửi email chào mừng → assign cho sales → nhắc follow-up sau 2 ngày
• Nhân viên submit đơn nghỉ phép → auto notify manager → approve → update bảng chấm công → thông báo HR
• Đơn hàng mới trên Shopify → tự động tạo đơn vận chuyển GHN → update tồn kho → gửi tracking cho khách → tạo invoice kế toán

Theo McKinsey, 45% công việc hiện tại có thể được tự động hóa. Doanh nghiệp áp dụng automation tiết kiệm trung bình 30-50% thời gian nhân viên, giảm 90% sai sót do con người, và tăng 25% năng suất tổng thể.

VMST sử dụng các platform: n8n (self-hosted, bảo mật cao), Zapier, Make (Integromat), Microsoft Power Automate, và custom code khi cần logic phức tạp.`
        },
        {
          heading: "Các quy trình doanh nghiệp nên automation đầu tiên",
          body: `VMST khuyến nghị bắt đầu với các quy trình có ROI cao nhất:

• Lead Management: Tự động capture lead từ website/ads → phân loại → assign sales → gửi email nurture. Tiết kiệm 2-3 giờ/ngày cho sales team.

• Email Marketing: Drip campaign tự động theo hành vi: welcome series, cart abandonment, re-engagement, birthday. Tăng 30% email revenue.

• Invoice & Payment: Tự động tạo hóa đơn, gửi nhắc thanh toán, reconcile bank statement, cảnh báo công nợ quá hạn. Giảm 80% thời gian kế toán.

• Reporting: Tự động tổng hợp dữ liệu từ nhiều nguồn → tạo báo cáo → gửi email cho management. Weekly/monthly report không cần làm thủ công.

• Inventory Alert: Khi tồn kho xuống dưới ngưỡng → tự động tạo PO → gửi nhà cung cấp → cập nhật ERP. Không bao giờ hết hàng bất ngờ.

• Customer Support: Auto-reply FAQ, tạo ticket, assign agent, escalation theo SLA, survey sau khi đóng ticket.`
        },
        {
          heading: "Chi phí triển khai Automation Workflow",
          body: `Chi phí phụ thuộc vào: số workflow, độ phức tạp, số integration, platform sử dụng.

Gói Starter: Từ 5 triệu (một lần) — 3-5 workflow đơn giản, sử dụng Zapier/Make. Phù hợp startup, doanh nghiệp nhỏ muốn bắt đầu automation.

Gói Business: Từ 20 triệu (một lần) — 10-20 workflow, n8n self-hosted, custom logic, tích hợp CRM/ERP. Phù hợp SME muốn automation toàn diện.

Gói Enterprise: Từ 50 triệu (một lần) — Workflow phức tạp, custom API integration, AI/ML integration, monitoring dashboard. Phù hợp doanh nghiệp lớn.

Gói Retainer: Từ 3 triệu/tháng — Bảo trì + tối ưu + thêm workflow mới hàng tháng. Đội ngũ VMST liên tục cải tiến quy trình automation.

ROI trung bình: hoàn vốn trong 2-4 tháng nhờ tiết kiệm thời gian nhân viên và giảm sai sót.`
        },
      ]}
      faqs={[
        { q: "Automation có thay thế nhân viên không?", a: "Không, automation thay thế tác vụ lặp để nhân viên tập trung vào công việc sáng tạo, chiến lược và chăm sóc khách hàng. Kết quả: nhân viên làm việc hiệu quả hơn, không phải cắt giảm." },
        { q: "Doanh nghiệp nhỏ có cần automation không?", a: "Rất cần! Automation giúp doanh nghiệp nhỏ làm được nhiều hơn với ít người hơn. Gói Starter từ 5 triệu, bắt đầu với 3-5 workflow cơ bản, ROI rõ ràng trong tháng đầu tiên." },
        { q: "Dữ liệu có an toàn khi dùng automation?", a: "Có, VMST ưu tiên n8n self-hosted (dữ liệu lưu trên server riêng). Với Zapier/Make, dữ liệu được mã hóa end-to-end, tuân thủ GDPR. NDA cam kết bảo mật." },
        { q: "Automation có kết nối được phần mềm cũ không?", a: "Có, nếu phần mềm có API hoặc database access, VMST có thể kết nối. Với phần mềm không có API, sử dụng webhook, email parsing, hoặc RPA (robot) để tương tác." },
      ]}
      pricingTiers={[
        { name: "Starter", price: "5.000.000đ", features: ["3-5 workflow", "Zapier/Make", "Setup & training", "Hỗ trợ 1 tháng"] },
        { name: "Business", price: "20.000.000đ", highlight: true, features: ["10-20 workflow", "n8n self-hosted", "Custom logic", "Tích hợp CRM/ERP", "Hỗ trợ 6 tháng"] },
        { name: "Enterprise", price: "50.000.000đ", features: ["Không giới hạn workflow", "Custom API", "AI/ML integration", "Monitoring dashboard", "Hỗ trợ 12 tháng", "SLA cam kết"] },
      ]}
      relatedServices={[
        { title: "ERP Odoo", path: "/dich-vu/erp-odoo" },
        { title: "Lập trình CRM", path: "/dich-vu/crm" },
        { title: "Digital Marketing", path: "/dich-vu/digital-marketing" },
      ]}
    />
  );
}

