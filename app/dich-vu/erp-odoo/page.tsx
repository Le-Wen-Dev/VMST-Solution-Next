import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Triển khai ERP Odoo Doanh Nghiệp | VMST Solutions",
  description: "Dịch vụ triển khai ERP Odoo toàn diện: quản lý kế toán, kho hàng, bán hàng, nhân sự, sản xuất. Tư vấn, cài đặt, tùy chỉnh và đào tạo chuyên sâu.",
};

export default function ErpOdoo() {
  return (
    <ServiceDetailTemplate
      title="Triển khai ERP Odoo Doanh Nghiệp"
      subtitle="Giải pháp quản trị doanh nghiệp toàn diện trên nền tảng Odoo – mã nguồn mở hàng đầu thế giới"
      heroDesc="VMST Solutions cung cấp dịch vụ tư vấn, triển khai và tùy chỉnh hệ thống ERP Odoo cho doanh nghiệp vừa và lớn tại Việt Nam. Với đội ngũ chuyên gia Odoo được chứng nhận, chúng tôi giúp doanh nghiệp số hóa toàn bộ quy trình vận hành – từ kế toán, kho hàng, bán hàng đến nhân sự và sản xuất – trên một nền tảng thống nhất, tiết kiệm chi phí và tăng hiệu quả hoạt động."
      problemTitle="Vấn đề doanh nghiệp đang gặp phải"
      problems={[
        "Dữ liệu phân tán trên nhiều phần mềm rời rạc (kế toán, kho, bán hàng), gây sai lệch và mất thời gian tổng hợp báo cáo",
        "Quy trình thủ công, nhập liệu trùng lặp nhiều lần, dễ xảy ra sai sót và khó kiểm soát",
        "Thiếu báo cáo thời gian thực, ban lãnh đạo không có dữ liệu kịp thời để ra quyết định",
        "Chi phí bản quyền phần mềm ERP truyền thống (SAP, Oracle) quá cao, không phù hợp doanh nghiệp vừa",
        "Khó mở rộng hệ thống khi doanh nghiệp tăng trưởng, thêm chi nhánh hoặc mảng kinh doanh mới",
      ]}
      solutionTitle="Giải pháp ERP Odoo từ VMST"
      solutions={[
        "Tích hợp toàn bộ nghiệp vụ trên một nền tảng duy nhất: kế toán, kho, mua hàng, bán hàng, nhân sự, sản xuất",
        "Tự động hóa quy trình phê duyệt, luồng công việc, giảm thiểu nhập liệu thủ công và sai sót",
        "Dashboard và báo cáo thời gian thực, trực quan hóa dữ liệu giúp lãnh đạo ra quyết định nhanh",
        "Chi phí triển khai hợp lý với mã nguồn mở Odoo Community hoặc Enterprise tùy nhu cầu",
        "Kiến trúc module linh hoạt, dễ dàng bổ sung tính năng và mở rộng khi doanh nghiệp phát triển",
        "Tùy chỉnh sâu theo đặc thù ngành nghề và quy trình riêng của từng doanh nghiệp Việt Nam",
      ]}
      features={[
        { title: "Kế toán & Tài chính", desc: "Quản lý sổ cái, công nợ, thuế VAT, báo cáo tài chính chuẩn VAS/IFRS, tích hợp ngân hàng và xuất hóa đơn điện tử." },
        { title: "Quản lý Kho hàng", desc: "Theo dõi tồn kho đa kho, quản lý lô/serial, nhập xuất tự động, cảnh báo tồn kho tối thiểu, kiểm kê định kỳ." },
        { title: "Bán hàng & CRM", desc: "Quản lý pipeline bán hàng, báo giá, đơn hàng, hợp đồng, chăm sóc khách hàng và phân tích hiệu suất đội ngũ kinh doanh." },
        { title: "Mua hàng & Nhà cung cấp", desc: "Quản lý yêu cầu mua hàng, đấu thầu, đơn đặt hàng, nhận hàng và đối soát hóa đơn nhà cung cấp tự động." },
        { title: "Nhân sự & Chấm công", desc: "Quản lý hồ sơ nhân viên, chấm công, tính lương, bảo hiểm xã hội, đánh giá hiệu suất và quản lý tuyển dụng." },
        { title: "Sản xuất & MRP", desc: "Lập kế hoạch sản xuất, quản lý BOM, lệnh sản xuất, theo dõi tiến độ và kiểm soát chất lượng sản phẩm." },
      ]}
      process={[
        { num: "01", title: "Khảo sát & Phân tích", desc: "Tìm hiểu quy trình nghiệp vụ hiện tại, xác định pain point, lập bản đồ quy trình tương lai và đề xuất giải pháp Odoo phù hợp." },
        { num: "02", title: "Cấu hình & Tùy chỉnh", desc: "Cài đặt, cấu hình các module theo yêu cầu, phát triển tùy chỉnh đặc thù, tích hợp hệ thống bên thứ ba và di chuyển dữ liệu." },
        { num: "03", title: "Kiểm thử & Đào tạo", desc: "Kiểm thử UAT với người dùng thực tế, đào tạo chuyên sâu cho từng bộ phận, xây dựng tài liệu hướng dẫn sử dụng." },
        { num: "04", title: "Go-live & Hỗ trợ", desc: "Triển khai chính thức, hỗ trợ sát sao giai đoạn đầu vận hành, bảo trì định kỳ và nâng cấp phiên bản Odoo." },
      ]}
      contentBlocks={[
        {
          heading: "Tại sao chọn Odoo cho doanh nghiệp Việt Nam?",
          body: `Odoo là nền tảng ERP mã nguồn mở phổ biến nhất thế giới với hơn 12 triệu người dùng tại 150+ quốc gia. Điểm mạnh vượt trội của Odoo so với các giải pháp ERP truyền thống là chi phí hợp lý, giao diện hiện đại, dễ sử dụng và khả năng tùy chỉnh linh hoạt.

Với doanh nghiệp Việt Nam, Odoo đặc biệt phù hợp vì có thể tùy chỉnh theo chuẩn kế toán Việt Nam (VAS), hỗ trợ hóa đơn điện tử theo Nghị định 123/2020/NĐ-CP, và tích hợp với các ngân hàng nội địa. VMST Solutions đã Việt hóa và bổ sung nhiều tính năng đặc thù cho thị trường Việt Nam.

So với SAP hay Oracle, chi phí triển khai Odoo thấp hơn 60-80% trong khi vẫn đáp ứng đầy đủ nhu cầu quản trị của doanh nghiệp vừa và lớn. Đây là lý do ngày càng nhiều doanh nghiệp Việt Nam chuyển sang Odoo như một giải pháp ERP chiến lược dài hạn.`
        },
        {
          heading: "Các module Odoo phổ biến nhất tại Việt Nam",
          body: `VMST Solutions triển khai đầy đủ hệ sinh thái module Odoo, được phân nhóm theo nhu cầu doanh nghiệp:

Nhóm Tài chính – Kế toán:
• Accounting & Finance: Sổ cái, công nợ phải thu/phải trả, thuế VAT, báo cáo tài chính
• Invoicing: Hóa đơn bán hàng, hóa đơn điện tử tích hợp VNPT/MISA
• Expense: Quản lý chi phí nhân viên, phê duyệt và hoàn ứng

Nhóm Vận hành – Chuỗi cung ứng:
• Inventory: Quản lý kho đa địa điểm, theo dõi lô hàng, serial number
• Purchase: Quy trình mua hàng từ yêu cầu đến thanh toán
• Manufacturing: Lập kế hoạch sản xuất, BOM, work center

Nhóm Kinh doanh – Khách hàng:
• CRM: Quản lý khách hàng tiềm năng, pipeline, dự báo doanh thu
• Sales: Báo giá, đơn hàng, hợp đồng, chiết khấu
• eCommerce: Cửa hàng online tích hợp trực tiếp với kho và kế toán

Nhóm Nhân sự:
• HR & Payroll: Hồ sơ nhân viên, tính lương, BHXH theo quy định Việt Nam
• Attendance: Chấm công tích hợp máy chấm công, ứng dụng mobile
• Recruitment: Quản lý tuyển dụng, phỏng vấn, onboarding`
        },
        {
          heading: "Kinh nghiệm triển khai Odoo của VMST Solutions",
          body: `VMST Solutions có đội ngũ chuyên gia Odoo với kinh nghiệm triển khai cho nhiều ngành nghề khác nhau tại Việt Nam:

Ngành Thương mại – Phân phối: Triển khai Odoo cho doanh nghiệp phân phối hàng tiêu dùng với hệ thống quản lý kho đa cấp, theo dõi lô hàng, hạn sử dụng và tích hợp với đội ngũ bán hàng dã ngoại qua ứng dụng mobile.

Ngành Sản xuất: Cấu hình module Manufacturing với BOM nhiều cấp, lập kế hoạch sản xuất theo MRP, quản lý chất lượng và tích hợp với hệ thống máy móc qua IoT.

Ngành Dịch vụ – Tư vấn: Triển khai Odoo Project, Timesheet và Invoicing giúp doanh nghiệp dịch vụ theo dõi tiến độ dự án, tính giờ công và xuất hóa đơn tự động.

Ngành Bất động sản: Tùy chỉnh Odoo CRM và Sales cho quy trình bán bất động sản, quản lý hợp đồng, tiến độ thanh toán và chăm sóc khách hàng sau bán.

Mỗi dự án đều được VMST Solutions phân tích kỹ lưỡng và tùy chỉnh phù hợp với đặc thù ngành nghề, đảm bảo hệ thống ERP thực sự phục vụ được nhu cầu thực tế của doanh nghiệp.`
        },
        {
          heading: "Lộ trình triển khai ERP Odoo thành công",
          body: `Triển khai ERP là dự án quan trọng ảnh hưởng đến toàn bộ hoạt động doanh nghiệp. VMST Solutions áp dụng phương pháp triển khai theo giai đoạn (phased rollout) để giảm thiểu rủi ro và đảm bảo thành công:

Giai đoạn 1 – Nền tảng (1-2 tháng): Triển khai các module cốt lõi như Kế toán, Kho hàng, Mua hàng. Đây là nền tảng dữ liệu cho toàn bộ hệ thống.

Giai đoạn 2 – Mở rộng (1-2 tháng): Bổ sung CRM, Bán hàng, Nhân sự. Kết nối dữ liệu giữa các bộ phận, tạo luồng thông tin liên thông.

Giai đoạn 3 – Tối ưu (1 tháng): Tinh chỉnh quy trình dựa trên phản hồi thực tế, xây dựng báo cáo tùy chỉnh, tích hợp các hệ thống bên ngoài.

Giai đoạn 4 – Vận hành ổn định: Hỗ trợ kỹ thuật liên tục, đào tạo nhân viên mới, cập nhật tính năng và nâng cấp phiên bản Odoo định kỳ.

Cam kết của VMST: Tỷ lệ thành công dự án 95%+, thời gian triển khai đúng tiến độ, chi phí không phát sinh ngoài hợp đồng.`
        },
      ]}
      faqs={[
        { q: "Odoo Community và Odoo Enterprise khác nhau như thế nào?", a: "Odoo Community là phiên bản mã nguồn mở miễn phí, phù hợp doanh nghiệp nhỏ với nhu cầu cơ bản. Odoo Enterprise có thêm nhiều tính năng nâng cao (kế toán đa tiền tệ, mobile app, hỗ trợ chính thức từ Odoo SA) với chi phí bản quyền theo số người dùng. VMST tư vấn lựa chọn phù hợp với ngân sách và nhu cầu của từng doanh nghiệp." },
        { q: "Thời gian triển khai Odoo mất bao lâu?", a: "Phụ thuộc vào quy mô và số lượng module. Gói cơ bản (3-4 module): 1-2 tháng. Gói trung bình (6-8 module): 2-4 tháng. Gói toàn diện (10+ module, tùy chỉnh nhiều): 4-6 tháng. VMST cam kết tiến độ trong hợp đồng." },
        { q: "Có thể di chuyển dữ liệu từ phần mềm cũ sang Odoo không?", a: "Có, VMST Solutions có kinh nghiệm di chuyển dữ liệu từ nhiều hệ thống: MISA, Fast Accounting, Excel, SAP, và các phần mềm kế toán khác. Dữ liệu được làm sạch, chuẩn hóa và import vào Odoo đảm bảo tính chính xác." },
        { q: "Odoo có hỗ trợ hóa đơn điện tử theo quy định Việt Nam không?", a: "Có, VMST đã tích hợp Odoo với các nhà cung cấp hóa đơn điện tử phổ biến tại Việt Nam như VNPT Invoice, MISA meInvoice, Viettel-CA. Hệ thống tự động phát hành và gửi hóa đơn điện tử theo Nghị định 123/2020/NĐ-CP." },
        { q: "Sau khi triển khai, VMST có hỗ trợ lâu dài không?", a: "Có, VMST cung cấp gói bảo trì và hỗ trợ kỹ thuật hàng tháng bao gồm: xử lý sự cố, cập nhật bảo mật, đào tạo nhân viên mới, tư vấn tối ưu quy trình và nâng cấp phiên bản Odoo. Đội ngũ hỗ trợ làm việc trong giờ hành chính, xử lý khẩn cấp 24/7." },
      ]}
      pricingTiers={[
        { name: "Starter", price: "20.000.000đ", features: ["3 module cơ bản", "Tối đa 5 người dùng", "Kế toán + Kho + Mua hàng", "Di chuyển dữ liệu cơ bản", "Đào tạo 2 ngày", "Hỗ trợ 3 tháng"] },
        { name: "Business", price: "60.000.000đ", highlight: true, features: ["6-8 module toàn diện", "Tối đa 20 người dùng", "Tùy chỉnh theo quy trình", "Tích hợp hóa đơn điện tử", "Di chuyển dữ liệu đầy đủ", "Đào tạo chuyên sâu 5 ngày", "Hỗ trợ 12 tháng"] },
        { name: "Enterprise", price: "200.000.000đ", features: ["Không giới hạn module", "Không giới hạn người dùng", "Tùy chỉnh sâu theo ngành", "Tích hợp hệ thống bên thứ ba", "Multi-company, đa chi nhánh", "Đào tạo toàn bộ nhân sự", "Hỗ trợ ưu tiên 24/7", "SLA cam kết"] },
      ]}
      relatedServices={[
        { title: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
        { title: "Cloud VPS", path: "/dich-vu/cloud-vps" },
        { title: "Digital Marketing", path: "/dich-vu/digital-marketing" },
      ]}
    />
  );
}
