import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Lập trình Mobile App Chuyên Nghiệp | VMST Solutions",
  description: "Dịch vụ lập trình ứng dụng mobile iOS & Android với React Native và Flutter. Giao diện đẹp, hiệu suất cao, tích hợp đầy đủ tính năng cho doanh nghiệp.",
};

export default function MobileApp() {
  return (
    <ServiceDetailTemplate
      title="Lập trình Mobile App Chuyên Nghiệp"
      subtitle="Phát triển ứng dụng iOS & Android với React Native và Flutter, hiệu suất cao, trải nghiệm người dùng vượt trội"
      heroDesc="VMST Solutions cung cấp dịch vụ lập trình ứng dụng mobile chuyên nghiệp cho doanh nghiệp. Sử dụng công nghệ React Native và Flutter, chúng tôi xây dựng ứng dụng chạy mượt mà trên cả iOS và Android, tiết kiệm chi phí phát triển mà vẫn đảm bảo chất lượng native app."
      problemTitle="Vấn đề doanh nghiệp gặp phải"
      problems={[
        "Không có ứng dụng mobile, mất lợi thế cạnh tranh khi 80% người dùng truy cập qua điện thoại",
        "App cũ chậm, hay crash, giao diện lỗi thời khiến khách hàng gỡ cài đặt và chuyển sang đối thủ",
        "Chi phí phát triển riêng biệt cho iOS và Android quá cao, vượt ngân sách doanh nghiệp",
        "Thiếu tính năng offline, push notification, và tích hợp thanh toán khiến trải nghiệm người dùng kém",
        "Không có đội ngũ kỹ thuật để bảo trì, cập nhật app khi hệ điều hành iOS/Android ra phiên bản mới",
      ]}
      solutionTitle="Giải pháp từ VMST"
      solutions={[
        "Phát triển cross-platform với React Native/Flutter, một codebase chạy cả iOS và Android, tiết kiệm 40-60% chi phí",
        "Thiết kế UI/UX theo Material Design và Human Interface Guidelines, đảm bảo trải nghiệm native trên từng nền tảng",
        "Tích hợp push notification, offline mode, deep linking, và các tính năng nâng cao theo yêu cầu",
        "Tích hợp cổng thanh toán VNPay, Momo, ZaloPay, Stripe cho ứng dụng thương mại điện tử",
        "Hỗ trợ publish lên App Store và Google Play, bảo trì và cập nhật định kỳ theo phiên bản OS mới",
        "Tích hợp analytics, crash reporting, A/B testing để liên tục cải thiện hiệu suất ứng dụng",
      ]}
      features={[
        { title: "Cross-Platform", desc: "Một codebase React Native hoặc Flutter chạy native trên cả iOS và Android, giảm chi phí và thời gian phát triển." },
        { title: "UI/UX Chuẩn Native", desc: "Giao diện tuân thủ Material Design (Android) và Human Interface Guidelines (iOS), mang lại trải nghiệm quen thuộc cho người dùng." },
        { title: "Offline Mode", desc: "Ứng dụng hoạt động không cần internet nhờ local database SQLite/Realm, đồng bộ dữ liệu khi có kết nối trở lại." },
        { title: "Push Notification", desc: "Hệ thống thông báo đẩy thông minh qua Firebase Cloud Messaging, tăng tỷ lệ giữ chân người dùng lên đến 3 lần." },
        { title: "Bảo mật & Xác thực", desc: "Xác thực đa yếu tố, mã hóa dữ liệu end-to-end, biometric login (Face ID, Touch ID), tuân thủ OWASP Mobile Security." },
        { title: "Analytics & Monitoring", desc: "Tích hợp Firebase Analytics, Crashlytics, Sentry để theo dõi hành vi người dùng và phát hiện lỗi theo thời gian thực." },
      ]}
      process={[
        { num: "01", title: "Phân tích & Lên kế hoạch", desc: "Khảo sát nhu cầu, xác định tính năng cốt lõi, lựa chọn công nghệ phù hợp, lập kế hoạch sprint và timeline chi tiết." },
        { num: "02", title: "Thiết kế UI/UX", desc: "Wireframe, prototype tương tác, thiết kế giao diện pixel-perfect, duyệt với khách hàng và điều chỉnh trước khi code." },
        { num: "03", title: "Phát triển & Kiểm thử", desc: "Lập trình theo từng sprint, unit test, integration test, kiểm thử trên nhiều thiết bị thực tế iOS và Android." },
        { num: "04", title: "Publish & Hỗ trợ", desc: "Submit lên App Store và Google Play, hỗ trợ quá trình review, theo dõi sau launch, bảo trì và cập nhật định kỳ." },
      ]}
      contentBlocks={[
        {
          heading: "Tại sao doanh nghiệp cần ứng dụng mobile riêng?",
          body: `Theo thống kê năm 2024, người dùng Việt Nam dành trung bình 4,5 giờ mỗi ngày trên điện thoại, trong đó 90% thời gian là sử dụng ứng dụng mobile thay vì trình duyệt. Đây là lý do tại sao ứng dụng mobile không còn là lợi thế mà đã trở thành yêu cầu bắt buộc cho doanh nghiệp muốn cạnh tranh trong thị trường số.

Ứng dụng mobile mang lại kênh tương tác trực tiếp với khách hàng thông qua push notification, giúp tăng tỷ lệ quay lại mua hàng lên đến 3 lần so với website thông thường. Khách hàng có app trên điện thoại có xu hướng trung thành hơn và chi tiêu nhiều hơn 30% so với khách hàng chỉ dùng website.

Ngoài ra, ứng dụng mobile cho phép tận dụng các tính năng phần cứng của điện thoại như camera, GPS, cảm biến sinh trắc học, tạo ra những trải nghiệm không thể có trên web. Từ đặt xe, giao đồ ăn, đến quản lý tài chính cá nhân, mobile app đang định hình lại cách doanh nghiệp phục vụ khách hàng.`
        },
        {
          heading: "React Native vs Flutter: VMST chọn công nghệ nào cho bạn?",
          body: `VMST Solutions sử dụng cả React Native và Flutter tùy theo yêu cầu cụ thể của từng dự án:

React Native - Lựa chọn tối ưu khi:
• Doanh nghiệp đã có đội ngũ JavaScript/TypeScript hoặc website React
• Cần tích hợp sâu với hệ sinh thái npm và các thư viện JavaScript phong phú
• Ứng dụng cần nhiều tính năng native module tùy chỉnh
• Dự án cần tái sử dụng logic từ web app hiện có

Flutter - Lựa chọn tối ưu khi:
• Yêu cầu giao diện pixel-perfect, animation mượt mà 60fps
• Cần hiệu suất cao cho ứng dụng đồ họa, game, hoặc xử lý dữ liệu phức tạp
• Muốn mở rộng sang web và desktop từ cùng một codebase
• Dự án mới không phụ thuộc vào hệ sinh thái JavaScript

Cả hai công nghệ đều cho phép phát triển một lần, chạy trên cả iOS và Android, giúp tiết kiệm 40-60% chi phí so với phát triển native riêng biệt. Đội ngũ VMST sẽ tư vấn lựa chọn phù hợp nhất dựa trên ngân sách, timeline và yêu cầu kỹ thuật của dự án.`
        },
        {
          heading: "Các loại ứng dụng mobile VMST phát triển",
          body: `VMST Solutions có kinh nghiệm phát triển đa dạng loại hình ứng dụng mobile:

• Ứng dụng thương mại điện tử (E-commerce App): Catalog sản phẩm, giỏ hàng, thanh toán đa cổng (VNPay, Momo, ZaloPay, thẻ quốc tế), quản lý đơn hàng, theo dõi vận chuyển real-time.

• Ứng dụng đặt lịch & dịch vụ: Booking hẹn, quản lý lịch, nhắc nhở tự động, thanh toán trước, đánh giá sau dịch vụ. Phù hợp cho spa, phòng khám, nhà hàng, khách sạn.

• Ứng dụng nội bộ doanh nghiệp: Quản lý nhân sự, chấm công, báo cáo, phê duyệt quy trình, giao tiếp nội bộ. Tích hợp với hệ thống ERP/CRM hiện có.

• Ứng dụng fintech & thanh toán: Ví điện tử, chuyển tiền, quản lý chi tiêu, đầu tư. Tuân thủ quy định bảo mật PCI DSS và Ngân hàng Nhà nước.

• Ứng dụng giáo dục & e-learning: Video bài giảng, bài tập tương tác, theo dõi tiến độ học, gamification, chứng chỉ số.

• Ứng dụng on-demand & marketplace: Kết nối cung cầu theo mô hình Grab, Airbnb với tính năng geolocation, matching algorithm, và hệ thống đánh giá.`
        },
        {
          heading: "Chi phí và thời gian phát triển mobile app tại VMST",
          body: `Chi phí phát triển ứng dụng mobile phụ thuộc vào độ phức tạp, số lượng tính năng, và nền tảng mục tiêu. VMST Solutions cam kết báo giá minh bạch, cố định theo dự án, không phát sinh chi phí ẩn.

Các yếu tố ảnh hưởng đến chi phí:
• Số lượng màn hình và tính năng
• Độ phức tạp của backend API và cơ sở dữ liệu
• Tích hợp bên thứ ba (thanh toán, bản đồ, mạng xã hội)
• Yêu cầu về bảo mật và tuân thủ quy định
• Thiết kế UI/UX tùy chỉnh hay sử dụng design system có sẵn

Thời gian phát triển điển hình:
• App đơn giản (5-10 màn hình): 6-10 tuần
• App trung bình (15-25 màn hình): 3-5 tháng
• App phức tạp (marketplace, fintech): 5-9 tháng

Tất cả dự án đều bao gồm: thiết kế UI/UX, phát triển iOS & Android, backend API, testing, publish lên store, và hỗ trợ kỹ thuật 3 tháng sau launch. Liên hệ ngay để nhận báo giá chi tiết và tư vấn miễn phí.`
        },
      ]}
      faqs={[
        { q: "Ứng dụng React Native/Flutter có hiệu suất bằng native app không?", a: "Với React Native và Flutter thế hệ mới, hiệu suất đạt 95-98% so với native app trong hầu hết trường hợp. Chỉ các ứng dụng đòi hỏi xử lý đồ họa cực cao như game 3D mới cần native thuần. Với ứng dụng doanh nghiệp thông thường, người dùng không thể phân biệt được sự khác biệt." },
        { q: "Mất bao lâu để app được duyệt trên App Store và Google Play?", a: "Google Play thường duyệt trong 1-3 ngày. App Store của Apple mất 1-7 ngày, đôi khi lâu hơn nếu cần bổ sung thông tin. VMST hỗ trợ toàn bộ quá trình submit và xử lý các yêu cầu từ store để đảm bảo app được duyệt nhanh nhất." },
        { q: "Sau khi bàn giao, tôi có thể tự cập nhật app không?", a: "Có, chúng tôi bàn giao toàn bộ source code và tài liệu kỹ thuật. Nếu bạn có đội ngũ developer, họ có thể tiếp tục phát triển. VMST cũng cung cấp gói bảo trì hàng tháng nếu bạn muốn chúng tôi tiếp tục hỗ trợ." },
        { q: "App có hỗ trợ tiếng Việt và đa ngôn ngữ không?", a: "Hoàn toàn có. Chúng tôi xây dựng hệ thống i18n (internationalization) từ đầu, hỗ trợ tiếng Việt, tiếng Anh và các ngôn ngữ khác theo yêu cầu. Nội dung có thể quản lý qua CMS mà không cần cập nhật code." },
        { q: "VMST có kinh nghiệm tích hợp thanh toán Việt Nam không?", a: "Có, chúng tôi đã tích hợp thành công VNPay, Momo, ZaloPay, VNPT Pay, và các cổng thanh toán quốc tế như Stripe, PayPal cho nhiều dự án. Đội ngũ có kinh nghiệm xử lý các yêu cầu bảo mật và tuân thủ quy định của Ngân hàng Nhà nước Việt Nam." },
      ]}
      pricingTiers={[
        { name: "Starter", price: "30.000.000đ", features: ["App đơn giản 5-8 màn hình", "iOS & Android (cross-platform)", "Đăng nhập & hồ sơ người dùng", "Push notification cơ bản", "Publish lên 2 store"] },
        { name: "Business", price: "80.000.000đ", highlight: true, features: ["App 15-20 màn hình", "Backend API & database", "Tích hợp thanh toán VN", "Offline mode & sync", "Analytics & crash reporting", "Hỗ trợ 6 tháng sau launch"] },
        { name: "Enterprise", price: "200.000.000đ", features: ["App không giới hạn tính năng", "Kiến trúc microservices", "Tích hợp ERP/CRM hiện có", "Bảo mật nâng cao & audit", "Đội ngũ riêng dedicated", "SLA & hỗ trợ 12 tháng"] },
      ]}
      relatedServices={[
        { title: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
        { title: "Phần mềm quản lý", path: "/dich-vu/phan-mem-quan-ly" },
        { title: "Cloud VPS", path: "/dich-vu/cloud-vps" },
      ]}
    />
  );
}
