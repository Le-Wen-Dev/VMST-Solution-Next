import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Lập trình CRM | VMST Solutions",
  description: "Hệ thống quản lý khách hàng tùy chỉnh, tăng hiệu quả bán hàng. CRM tích hợp Zalo, Facebook, Email, Phone.",
};

export default function CRM() {
  return (
    <ServiceDetailTemplate
      title="Lập trình CRM"
      subtitle="Hệ thống quản lý khách hàng tùy chỉnh, tăng hiệu quả bán hàng"
      heroDesc="VMST Solutions phát triển phần mềm CRM tùy chỉnh theo ngành nghề và quy trình riêng của doanh nghiệp. Không giống CRM có sẵn, hệ thống CRM của VMST được thiết kế chính xác theo nhu cầu, tích hợp đa kênh (Zalo, Facebook, Email, Phone), giúp doanh nghiệp quản lý khách hàng hiệu quả và tăng doanh thu."
      problemTitle="Vấn đề trong quản lý khách hàng"
      problems={[
        "Dữ liệu khách hàng phân tán trên Excel, Zalo, Facebook, không tập trung quản lý",
        "Sales team không follow-up đúng hạn, bỏ lỡ nhiều cơ hội bán hàng tiềm năng",
        "Không biết khách hàng đang ở giai đoạn nào trong sales pipeline, khó dự báo doanh thu",
        "CRM có sẵn (Salesforce, HubSpot) quá đắt hoặc quá phức tạp, nhân viên không muốn sử dụng",
        "Không có automation: gửi email, SMS, notification nhắc nhở thủ công, mất thời gian",
      ]}
      solutionTitle="Giải pháp CRM từ VMST"
      solutions={[
        "Tập trung toàn bộ dữ liệu khách hàng vào 1 hệ thống, truy cập từ mọi thiết bị",
        "Tự động nhắc nhở follow-up, gửi email/SMS theo lịch, không bỏ lỡ cơ hội nào",
        "Visual sales pipeline drag-and-drop, dễ theo dõi tiến trình và dự báo doanh thu",
        "Giao diện đơn giản, tùy chỉnh theo quy trình riêng, nhân viên dễ sử dụng ngay",
        "Automation workflow: auto assign lead, auto send email, auto create task, scoring lead",
        "Tích hợp Zalo OA, Facebook Messenger, Email, VoIP: quản lý đa kênh tại 1 nơi",
      ]}
      features={[
        { title: "Customer 360°", desc: "Xem toàn bộ thông tin khách hàng: lịch sử giao dịch, tương tác, support ticket, payment tại một màn hình duy nhất." },
        { title: "Sales Pipeline", desc: "Drag-and-drop visual pipeline. Tùy chỉnh các stage, auto-move, probability scoring. Dự báo doanh thu chính xác." },
        { title: "Multi-channel Integration", desc: "Tích hợp Zalo OA, Facebook Messenger, Email, SMS, VoIP. Mọi conversation được lưu trữ tự động trong CRM." },
        { title: "Marketing Automation", desc: "Email drip campaigns, lead scoring, segmentation, personalized messaging. Nurture lead tự động đến khi ready to buy." },
        { title: "Reporting & Analytics", desc: "Dashboard real-time: conversion rate, sales velocity, team performance, revenue forecast. Export PDF/Excel báo cáo." },
        { title: "Mobile App", desc: "Ứng dụng mobile native iOS/Android. Sales team quản lý khách hàng, check-in, cập nhật deal mọi lúc mọi nơi." },
      ]}
      process={[
        { num: "01", title: "Phân tích nghiệp vụ", desc: "Khảo sát quy trình bán hàng, chăm sóc khách hàng hiện tại. Xác định yêu cầu, KPI mong muốn." },
        { num: "02", title: "Thiết kế & Phát triển", desc: "Thiết kế UI/UX, database, API. Phát triển các module theo sprint, demo mỗi 2 tuần." },
        { num: "03", title: "Testing & Migration", desc: "UAT testing, performance testing. Import dữ liệu khách hàng từ hệ thống cũ/Excel vào CRM mới." },
        { num: "04", title: "Đào tạo & Go-live", desc: "Đào tạo nhân viên sử dụng, hỗ trợ on-site tuần đầu, bug fixing, tối ưu liên tục." },
      ]}
      contentBlocks={[
        {
          heading: "CRM là gì? Tại sao doanh nghiệp cần CRM?",
          body: `CRM (Customer Relationship Management) là hệ thống quản lý quan hệ khách hàng, giúp doanh nghiệp theo dõi mọi tương tác với khách hàng từ lần tiếp xúc đầu tiên đến sau bán hàng. Một hệ thống CRM tốt giúp tăng hiệu quả bán hàng, cải thiện chất lượng dịch vụ, và giữ chân khách hàng.

Theo nghiên cứu, doanh nghiệp sử dụng CRM tăng 29% doanh thu, cải thiện 34% năng suất sales team, và tăng 42% customer retention rate. ROI trung bình của CRM là 871% - tức mỗi 1 đồng đầu tư mang lại 8.71 đồng lợi nhuận.

Tuy nhiên, 60% dự án CRM thất bại vì lý do: hệ thống quá phức tạp nhân viên không muốn dùng, không phù hợp quy trình thực tế, thiếu đào tạo, hoặc dữ liệu nhập không đầy đủ. Đó là lý do VMST phát triển CRM tùy chỉnh - thiết kế chính xác theo cách làm việc thực tế của từng doanh nghiệp, đơn giản hóa giao diện để nhân viên dễ sử dụng.`
        },
        {
          heading: "VMST CRM khác gì Salesforce, HubSpot?",
          body: `Salesforce và HubSpot là các CRM cloud nổi tiếng nhưng có nhiều hạn chế cho doanh nghiệp Việt Nam:

• Chi phí cao: Salesforce Enterprise $150/user/tháng, HubSpot Pro $800/tháng. Doanh nghiệp 20 nhân viên tốn $3000/tháng (~75 triệu VNĐ).

• Tùy chỉnh hạn chế: Phải theo workflow có sẵn, muốn custom phải thuê consultant giá cao, thời gian lâu.

• Không tích hợp Zalo: Zalo là kênh communication #1 tại Việt Nam nhưng Salesforce/HubSpot không hỗ trợ native.

• Ngôn ngữ: Giao diện chủ yếu tiếng Anh, nhân viên Việt Nam khó sử dụng.

VMST CRM giải quyết tất cả:
• Chi phí: Một lần đầu tư, sở hữu vĩnh viễn, không phí user hàng tháng
• Tùy chỉnh 100%: Thiết kế theo đúng quy trình của bạn, mọi field, workflow, dashboard
• Tích hợp Zalo OA, Facebook, call center Việt Nam
• Giao diện tiếng Việt, phù hợp văn hóa làm việc
• Data sovereignty: Dữ liệu lưu tại Việt Nam, kiểm soát hoàn toàn`
        },
        {
          heading: "Chi phí lập trình CRM tùy chỉnh",
          body: `Chi phí phụ thuộc vào: số module, mức độ phức tạp, số lượng integration, mobile app.

Gói CRM Basic: Từ 50 triệu - Contact management, deal tracking, basic pipeline, email integration. Phù hợp doanh nghiệp nhỏ 5-15 users.

Gói CRM Professional: Từ 120 triệu - Full pipeline, marketing automation, multi-channel (Zalo, Facebook, Email), reporting dashboard. Phù hợp SME 15-50 users.

Gói CRM Enterprise: Từ 250 triệu - Toàn bộ tính năng + mobile app, AI lead scoring, advanced analytics, API integration, custom workflow engine. Phù hợp doanh nghiệp lớn 50+ users.

So sánh: Với 50 users, Salesforce tốn ~90 triệu/năm (lặp lại mỗi năm). VMST CRM đầu tư 1 lần từ 120 triệu, sở hữu vĩnh viễn, tiết kiệm hàng trăm triệu trong 3-5 năm. Liên hệ ngay để nhận demo và báo giá.`
        },
      ]}
      faqs={[
        { q: "CRM tùy chỉnh mất bao lâu phát triển?", a: "Gói Basic: 2-3 tháng. Professional: 4-6 tháng. Enterprise: 6-12 tháng. VMST phát triển theo Agile/Sprint, demo mỗi 2 tuần để khách hàng review và feedback." },
        { q: "Có thể tích hợp với phần mềm hiện tại không?", a: "Có, VMST CRM được thiết kế với API mở, có thể tích hợp với bất kỳ phần mềm nào: ERP, Accounting, E-commerce, Payment gateway, 3rd party services." },
        { q: "Dữ liệu lưu ở đâu?", a: "Khách hàng chọn: Cloud (AWS/GCP Singapore) hoặc On-premise (server riêng). Data hoàn toàn thuộc sở hữu khách hàng." },
        { q: "Có hỗ trợ sau bàn giao không?", a: "Có, VMST cung cấp hỗ trợ kỹ thuật 12 tháng miễn phí sau bàn giao. Sau đó có gói bảo trì hàng năm với chi phí hợp lý." },
        { q: "Nhân viên không rành công nghệ có dùng được không?", a: "Hoàn toàn có thể. VMST thiết kế giao diện đơn giản, trực quan, phù hợp với người dùng không chuyên. Chúng tôi đào tạo trực tiếp và cung cấp tài liệu hướng dẫn chi tiết bằng tiếng Việt." },
      ]}
      pricingTiers={[
        { name: "CRM Lite", price: "500.000đ/th", features: ["5 users", "Quản lý lead cơ bản", "Email tích hợp", "Báo cáo tháng"] },
        { name: "CRM Pro", price: "2.000.000đ/th", highlight: true, features: ["20 users", "Pipeline bán hàng", "Tích hợp Zalo + FB", "Auto phân lead", "Dashboard real-time"] },
        { name: "CRM Enterprise", price: "8.000.000đ/th", features: ["Không giới hạn users", "API tùy chỉnh", "Mobile app riêng", "AI scoring lead", "Dedicated support", "On-premise option"] },
      ]}
      relatedServices={[
        { title: "ERP Odoo", path: "/dich-vu/erp-odoo" },
        { title: "Digital Marketing", path: "/dich-vu/digital-marketing" },
        { title: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
      ]}
    />
  );
}
