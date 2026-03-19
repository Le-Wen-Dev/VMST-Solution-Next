import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Automation Workflow - Tự động hóa Quy trình Kinh doanh | VMST Solutions",
  description: "Dịch vụ tự động hóa quy trình kinh doanh với n8n, Zapier, custom workflow. Giảm 80% công việc thủ công, tăng hiệu suất vận hành doanh nghiệp.",
};

export default function AutomationWorkflow() {
  return (
    <ServiceDetailTemplate
      title="Automation Workflow"
      subtitle="Tự động hóa quy trình kinh doanh - Giảm thủ công, tăng hiệu suất"
      heroDesc="VMST Solutions cung cấp dịch vụ tự động hóa quy trình kinh doanh (Business Process Automation) sử dụng n8n, Zapier, Make và các giải pháp custom workflow. Chúng tôi giúp doanh nghiệp loại bỏ công việc lặp đi lặp lại, kết nối hệ thống rời rạc và tối ưu hóa toàn bộ vận hành từ bán hàng, marketing đến chăm sóc khách hàng."
      problemTitle="Vấn đề doanh nghiệp đang gặp phải"
      problems={[
        "Nhân viên mất hàng giờ mỗi ngày cho công việc thủ công lặp đi lặp lại: copy dữ liệu, gửi email, cập nhật báo cáo",
        "Dữ liệu phân tán trên nhiều hệ thống (CRM, kế toán, kho hàng, email) không đồng bộ, dễ sai sót",
        "Quy trình phê duyệt chậm chạp, phụ thuộc vào con người, gây tắc nghẽn trong vận hành",
        "Không có hệ thống cảnh báo tự động khi xảy ra sự cố, dẫn đến phản ứng chậm và thiệt hại",
        "Chi phí nhân sự cao cho các tác vụ có thể tự động hóa, ảnh hưởng đến lợi nhuận doanh nghiệp",
      ]}
      solutionTitle="Giải pháp Automation từ VMST"
      solutions={[
        "Phân tích và lập bản đồ toàn bộ quy trình kinh doanh, xác định điểm tắc nghẽn và cơ hội tự động hóa",
        "Xây dựng workflow tự động kết nối các hệ thống: CRM, ERP, email, Slack, Google Workspace, Zalo",
        "Tự động hóa quy trình bán hàng: từ lead capture, nurturing đến onboarding khách hàng mới",
        "Tích hợp hệ thống kế toán, kho hàng, vận chuyển - đồng bộ dữ liệu real-time không cần can thiệp thủ công",
        "Thiết lập hệ thống cảnh báo và báo cáo tự động, gửi thông báo qua email/Slack/Zalo khi có sự kiện quan trọng",
        "Đào tạo đội ngũ vận hành và bàn giao tài liệu kỹ thuật đầy đủ để doanh nghiệp tự quản lý",
      ]}
      features={[
        { title: "n8n Self-hosted", desc: "Triển khai n8n trên server riêng của doanh nghiệp, đảm bảo dữ liệu nội bộ không rời khỏi hệ thống, phù hợp yêu cầu bảo mật cao." },
        { title: "Zapier & Make Integration", desc: "Kết nối 5000+ ứng dụng phổ biến qua Zapier và Make (Integromat), triển khai nhanh không cần lập trình phức tạp." },
        { title: "Custom Workflow Engine", desc: "Xây dựng engine tự động hóa tùy chỉnh hoàn toàn cho quy trình đặc thù, tích hợp sâu với hệ thống nội bộ của doanh nghiệp." },
        { title: "API Integration", desc: "Kết nối bất kỳ hệ thống nào có API: ERP, CRM, phần mềm kế toán, sàn thương mại điện tử, cổng thanh toán." },
        { title: "Monitoring & Alerting", desc: "Dashboard theo dõi trạng thái workflow real-time, cảnh báo ngay khi có lỗi, log chi tiết để debug và audit." },
        { title: "Scheduled Automation", desc: "Lên lịch chạy tự động theo thời gian: báo cáo hàng ngày, đồng bộ dữ liệu hàng giờ, backup định kỳ, gửi email theo chiến dịch." },
      ]}
      process={[
        { num: "01", title: "Khảo sát & Phân tích quy trình", desc: "Làm việc với các phòng ban để lập bản đồ quy trình hiện tại, xác định điểm đau, ưu tiên các tác vụ có ROI cao nhất khi tự động hóa." },
        { num: "02", title: "Thiết kế & Lập kế hoạch", desc: "Thiết kế kiến trúc workflow, chọn công nghệ phù hợp (n8n, Zapier, custom), lập kế hoạch triển khai theo từng giai đoạn." },
        { num: "03", title: "Phát triển & Kiểm thử", desc: "Xây dựng workflow, tích hợp hệ thống, kiểm thử kỹ lưỡng với dữ liệu thực tế, xử lý các trường hợp ngoại lệ và lỗi." },
        { num: "04", title: "Triển khai & Đào tạo", desc: "Go-live theo giai đoạn, đào tạo đội ngũ vận hành, bàn giao tài liệu, hỗ trợ kỹ thuật trong giai đoạn ổn định hệ thống." },
      ]}
      contentBlocks={[
        {
          heading: "Tại sao doanh nghiệp cần Automation Workflow?",
          body: `Trong bối cảnh cạnh tranh ngày càng khốc liệt, doanh nghiệp nào vận hành hiệu quả hơn sẽ có lợi thế quyết định. Theo nghiên cứu của McKinsey, khoảng 45% công việc hiện tại có thể được tự động hóa với công nghệ hiện có, tương đương hàng nghìn giờ lao động mỗi năm cho một doanh nghiệp vừa.

Automation Workflow không chỉ giúp tiết kiệm thời gian mà còn loại bỏ sai sót do con người, đảm bảo quy trình được thực hiện nhất quán 24/7 mà không cần giám sát. Một nhân viên kinh doanh thay vì mất 2 giờ mỗi ngày nhập liệu CRM có thể tập trung hoàn toàn vào việc tư vấn và chốt hợp đồng.

Đặc biệt với sự phát triển của các nền tảng no-code/low-code như n8n và Zapier, chi phí triển khai automation đã giảm đáng kể so với trước đây. Doanh nghiệp vừa và nhỏ hoàn toàn có thể tiếp cận công nghệ từng chỉ dành cho tập đoàn lớn, với thời gian triển khai tính bằng tuần thay vì tháng.`
        },
        {
          heading: "Các quy trình phổ biến được tự động hóa",
          body: `VMST Solutions đã triển khai automation cho nhiều loại quy trình kinh doanh khác nhau:

• Quy trình bán hàng & CRM: Tự động tạo lead từ form website, phân loại và gán cho sales phù hợp, gửi email chào mừng, nhắc nhở follow-up, cập nhật trạng thái deal, tạo báo giá tự động.

• Quy trình Marketing: Đồng bộ danh sách email từ nhiều nguồn, trigger email sequence theo hành vi người dùng, tự động đăng bài lên mạng xã hội, báo cáo hiệu suất chiến dịch hàng tuần.

• Quy trình Kế toán & Tài chính: Tự động tạo hóa đơn khi đơn hàng hoàn thành, nhắc nhở công nợ, đồng bộ giao dịch ngân hàng vào phần mềm kế toán, báo cáo dòng tiền hàng ngày.

• Quy trình Nhân sự: Onboarding nhân viên mới tự động (tạo tài khoản, gửi tài liệu, lên lịch training), tổng hợp chấm công, nhắc nhở review định kỳ.

• Quy trình Vận hành & Kho hàng: Cảnh báo tồn kho thấp, tự động tạo đơn đặt hàng nhà cung cấp, đồng bộ đơn hàng từ sàn TMĐT vào hệ thống quản lý, cập nhật trạng thái vận chuyển cho khách hàng.`
        },
        {
          heading: "n8n - Nền tảng Automation tự host cho doanh nghiệp",
          body: `n8n là nền tảng workflow automation mã nguồn mở hàng đầu, cho phép doanh nghiệp tự host trên server riêng - điều mà Zapier hay Make không thể làm được. Đây là lợi thế cực kỳ quan trọng với các doanh nghiệp có yêu cầu bảo mật dữ liệu cao như tài chính, y tế, pháp lý.

Với n8n, dữ liệu khách hàng, thông tin tài chính và quy trình nội bộ hoàn toàn nằm trong hạ tầng của doanh nghiệp, không đi qua server bên thứ ba. Đồng thời, n8n hỗ trợ hơn 400 integration sẵn có và cho phép viết custom code (JavaScript/Python) cho các logic phức tạp.

VMST Solutions là đối tác triển khai n8n có kinh nghiệm, từ cài đặt, cấu hình bảo mật, đến xây dựng workflow phức tạp và đào tạo đội ngũ. Chúng tôi cũng hỗ trợ migrate từ Zapier/Make sang n8n để tiết kiệm chi phí subscription hàng tháng trong dài hạn.`
        },
        {
          heading: "ROI và lợi ích đo lường được từ Automation",
          body: `Đầu tư vào automation workflow mang lại ROI rõ ràng và đo lường được:

Tiết kiệm thời gian: Trung bình mỗi nhân viên tiết kiệm 2-4 giờ/ngày từ các tác vụ thủ công. Với đội ngũ 10 người, đó là 20-40 giờ/ngày - tương đương 2-4 nhân sự full-time.

Giảm sai sót: Quy trình tự động thực hiện chính xác 100% theo logic đã định nghĩa, loại bỏ hoàn toàn sai sót do nhập liệu thủ công, quên bước, hay hiểu nhầm quy trình.

Tăng tốc độ phản hồi: Khách hàng nhận phản hồi trong vài giây thay vì vài giờ. Lead mới được xử lý ngay lập tức thay vì chờ nhân viên online. Đơn hàng được xác nhận và xử lý tự động 24/7.

Mở rộng không cần tăng nhân sự: Khi doanh nghiệp tăng trưởng gấp đôi lượng đơn hàng, hệ thống automation xử lý tự động mà không cần tuyển thêm nhân sự vận hành.

Chi phí đầu tư một lần, lợi ích lâu dài: Khác với thuê nhân sự phải trả lương hàng tháng, workflow automation hoạt động liên tục với chi phí vận hành thấp sau khi đã triển khai.`
        },
      ]}
      faqs={[
        { q: "Doanh nghiệp nhỏ có cần automation workflow không?", a: "Hoàn toàn phù hợp. Doanh nghiệp nhỏ thường có ít nhân sự hơn nên mỗi giờ tiết kiệm được có giá trị lớn hơn. Chúng tôi có gói Starter phù hợp ngân sách, tập trung vào 2-3 quy trình mang lại ROI cao nhất trước." },
        { q: "Mất bao lâu để triển khai một hệ thống automation?", a: "Workflow đơn giản (kết nối 2-3 ứng dụng): 1-2 tuần. Hệ thống automation toàn diện cho doanh nghiệp: 1-3 tháng. Chúng tôi triển khai theo giai đoạn để doanh nghiệp thấy kết quả sớm." },
        { q: "Nếu workflow bị lỗi thì sao?", a: "Hệ thống có cơ chế xử lý lỗi tự động, retry logic và cảnh báo ngay lập tức qua email/Slack khi có sự cố. Chúng tôi cung cấp hỗ trợ kỹ thuật và SLA cam kết thời gian phản hồi." },
        { q: "Dữ liệu có an toàn khi dùng Zapier/Make không?", a: "Zapier và Make là các nền tảng uy tín với chứng chỉ SOC 2, GDPR. Tuy nhiên nếu doanh nghiệp yêu cầu dữ liệu không rời khỏi hệ thống nội bộ, chúng tôi khuyến nghị dùng n8n self-hosted." },
        { q: "Sau khi bàn giao, doanh nghiệp có tự quản lý được không?", a: "Có. Chúng tôi đào tạo đội ngũ vận hành, bàn giao tài liệu chi tiết và video hướng dẫn. Với n8n, giao diện trực quan giúp nhân viên không chuyên kỹ thuật vẫn có thể chỉnh sửa workflow cơ bản." },
      ]}
      pricingTiers={[
        { name: "Starter", price: "5.000.000đ", features: ["3 workflow cơ bản", "Kết nối tối đa 5 ứng dụng", "Zapier/Make setup", "Hỗ trợ 3 tháng"] },
        { name: "Business", price: "15.000.000đ", highlight: true, features: ["10 workflow phức tạp", "n8n self-hosted", "Kết nối không giới hạn ứng dụng", "Dashboard monitoring", "Hỗ trợ 6 tháng", "Đào tạo đội ngũ"] },
        { name: "Enterprise", price: "50.000.000đ", features: ["Automation toàn diện", "Custom workflow engine", "Tích hợp ERP/CRM nội bộ", "SLA cam kết 99.9%", "Hỗ trợ 12 tháng", "Đội ngũ riêng"] },
      ]}
      relatedServices={[
        { title: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
        { title: "Cloud VPS", path: "/dich-vu/cloud-vps" },
        { title: "Digital Marketing", path: "/dich-vu/digital-marketing" },
      ]}
    />
  );
}
