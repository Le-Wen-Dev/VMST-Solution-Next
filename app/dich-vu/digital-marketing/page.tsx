import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing | VMST Solutions",
  description: "Chiến dịch marketing toàn diện, tăng ROI và doanh thu cho doanh nghiệp. Google Ads, Facebook Ads, Email Marketing, Content Marketing.",
};

export default function DigitalMarketing() {
  return (
    <ServiceDetailTemplate
      title="Digital Marketing"
      subtitle="Chiến dịch marketing toàn diện, tăng ROI và doanh thu cho doanh nghiệp"
      heroDesc="VMST Solutions cung cấp dịch vụ Digital Marketing trọn gói bao gồm Google Ads, Facebook Ads, Email Marketing, Content Marketing và Social Media Management. Với kinh nghiệm quản lý hàng trăm chiến dịch cho khách hàng tại Singapore, Úc, Mỹ và Việt Nam, chúng tôi cam kết mang lại kết quả đo lường được và ROI tối ưu."
      problemTitle="Thách thức doanh nghiệp đang đối mặt"
      problems={[
        "Chi phí quảng cáo ngày càng tăng nhưng hiệu quả không tương xứng, ROI thấp",
        "Không biết kênh marketing nào phù hợp nhất với ngành nghề và ngân sách",
        "Thiếu đội ngũ chuyên môn digital marketing in-house, phụ thuộc freelancer thiếu cam kết",
        "Không có hệ thống đo lường và báo cáo hiệu quả chiến dịch rõ ràng",
        "Content marketing thiếu chiến lược, không thu hút đúng đối tượng mục tiêu",
      ]}
      solutionTitle="Giải pháp Digital Marketing từ VMST"
      solutions={[
        "Phân tích thị trường, đối thủ và đối tượng mục tiêu trước khi triển khai",
        "Chiến lược marketing đa kênh tích hợp: Google, Facebook, Zalo, Email, Content",
        "Đội ngũ chuyên gia certified Google Ads, Facebook Blueprint, Google Analytics",
        "Dashboard báo cáo real-time, tracking chuyển đổi chính xác đến từng lead",
        "A/B testing liên tục để tối ưu chi phí và tăng conversion rate",
        "Content marketing chuẩn SEO, hỗ trợ branding và thought leadership",
      ]}
      features={[
        { title: "Google Ads Management", desc: "Quản lý chiến dịch Search, Display, Shopping, Video Ads. Tối ưu Quality Score, giảm CPC, tăng conversion." },
        { title: "Facebook & Instagram Ads", desc: "Target chính xác theo demographics, interests, behaviors. Retargeting, Lookalike Audience, Dynamic Ads." },
        { title: "Email Marketing Automation", desc: "Thiết kế email campaign, drip sequence, segmentation, A/B testing. Tích hợp CRM tự động nurture lead." },
        { title: "Content Marketing", desc: "Sáng tạo nội dung chuẩn SEO: blog, infographic, video, case study. Xây dựng authority trong ngành." },
        { title: "Social Media Management", desc: "Quản lý fanpage, tạo content calendar, community management, influencer collaboration." },
        { title: "Analytics & Reporting", desc: "Google Analytics 4, Google Tag Manager, conversion tracking. Báo cáo weekly/monthly chi tiết." },
      ]}
      process={[
        { num: "01", title: "Audit & Strategy", desc: "Phân tích hiện trạng, đối thủ, đối tượng mục tiêu. Xây dựng chiến lược marketing tổng thể." },
        { num: "02", title: "Setup & Launch", desc: "Cài đặt tracking, tạo chiến dịch, thiết kế creative, viết ad copy. A/B testing ban đầu." },
        { num: "03", title: "Optimize & Scale", desc: "Tối ưu liên tục dựa trên data. Scale chiến dịch hiệu quả, pause chiến dịch kém." },
        { num: "04", title: "Report & Consult", desc: "Báo cáo chi tiết, phân tích insight, đề xuất cải tiến. Meeting định kỳ với khách hàng." },
      ]}
      contentBlocks={[
        {
          heading: "Digital Marketing là gì? Tại sao quan trọng?",
          body: `Digital Marketing (tiếp thị số) là tổng hợp các hoạt động marketing sử dụng các kênh kỹ thuật số để tiếp cận và chuyển đổi khách hàng. Trong thời đại mà 80% hành trình mua hàng bắt đầu từ online, digital marketing không còn là lựa chọn mà là yêu cầu bắt buộc.

So với marketing truyền thống, digital marketing có nhiều ưu điểm vượt trội: đo lường chính xác đến từng đồng chi phí, target đúng đối tượng, tối ưu real-time, và khả năng scale nhanh chóng. Một chiến dịch Google Ads được tối ưu tốt có thể mang lại ROI gấp 5-10 lần so với quảng cáo truyền thống.

VMST Solutions đã quản lý thành công hàng trăm chiến dịch digital marketing cho doanh nghiệp đa ngành, từ bất động sản, F&B, giáo dục đến công nghệ, y tế. Kinh nghiệm quốc tế tại Singapore (Nooknook), Nhật Bản (Iyakaza Tomo) giúp chúng tôi hiểu sâu về hành vi người tiêu dùng đa văn hóa.`
        },
        {
          heading: "Các kênh Digital Marketing hiệu quả nhất 2024",
          body: `Mỗi kênh digital marketing phù hợp với mục tiêu kinh doanh khác nhau. VMST tư vấn lựa chọn kênh phù hợp:

• Google Search Ads: Hiệu quả nhất cho lead generation. Tiếp cận khách hàng đang chủ động tìm kiếm sản phẩm/dịch vụ. Cost per lead thấp, conversion rate cao.

• Google Display Network: Branding, remarketing. Hiển thị banner quảng cáo trên hàng triệu website trong mạng lưới Google.

• Facebook & Instagram Ads: Phù hợp cho B2C, brand awareness, engagement. Target chi tiết theo demographics, interests, behaviors.

• Zalo Ads: Kênh hiệu quả tại Việt Nam với 70+ triệu người dùng. Phù hợp cho local business, O2O marketing.

• LinkedIn Ads: Kênh B2B hiệu quả nhất. Target theo job title, company size, industry. Phù hợp cho SaaS, consulting, recruitment.

• Email Marketing: ROI cao nhất (42:1). Nurture lead, retention marketing, cross-sell/upsell. Chi phí thấp nhưng hiệu quả cao.

• TikTok Ads: Kênh mới nổi với reach cực lớn. Phù hợp cho Gen Z targeting, viral marketing, product launch.

VMST sẽ phân tích ngành nghề, ngân sách và mục tiêu của bạn để đề xuất marketing mix tối ưu, đảm bảo mỗi đồng chi phí đều mang lại giá trị.`
        },
        {
          heading: "Case study: Chiến dịch thành công",
          body: `Campaign Google Ads Nooknook Singapore: Trong 6 tháng, VMST đã giúp Nooknook Singapore tăng 250% traffic organic, giảm 40% cost per acquisition (CPA), và tăng 180% doanh thu từ kênh online. Chiến lược bao gồm Google Search Ads targeting từ khóa high-intent, Display Ads remarketing, và Shopping Ads cho sản phẩm.

Campaign Facebook Ads Iyakaza Tomo: Chiến dịch 6 tháng tập trung vào brand awareness và lead generation cho thị trường Việt Nam - Nhật Bản. Kết quả: 500+ leads qualified, cost per lead giảm 60% so với benchmark ngành, engagement rate tăng 300%.

Mỗi chiến dịch đều được VMST thiết kế riêng biệt, không áp dụng template có sẵn. Chúng tôi tin rằng mỗi doanh nghiệp có đặc thù riêng và cần chiến lược marketing phù hợp.`
        },
      ]}
      faqs={[
        { q: "Ngân sách tối thiểu để chạy Digital Marketing?", a: "Ngân sách ads tối thiểu khuyến nghị: Google Ads từ 10 triệu/tháng, Facebook Ads từ 5 triệu/tháng. Phí management VMST tùy thuộc vào scope dịch vụ." },
        { q: "Bao lâu thì thấy kết quả?", a: "Google Ads/Facebook Ads: thấy kết quả sau 1-2 tuần. SEO: 3-6 tháng. Content Marketing: 3-12 tháng. Chúng tôi cam kết báo cáo minh bạch từ ngày đầu." },
        { q: "VMST có cam kết KPI không?", a: "Có, chúng tôi cam kết KPI rõ ràng trong hợp đồng: số lượng lead, CPA, ROAS tùy thuộc vào ngành nghề và ngân sách. Nếu không đạt KPI, miễn phí tháng tiếp theo." },
        { q: "Tôi có thể theo dõi chiến dịch real-time không?", a: "Có, khách hàng được cấp access vào dashboard báo cáo real-time, xem chi tiết chi phí, impressions, clicks, conversions bất kỳ lúc nào." },
      ]}
      pricingTiers={[
        { name: "Basic", price: "5.000.000đ/th", features: ["1 nền tảng quảng cáo", "Báo cáo hàng tháng", "Ngân sách ads < 10tr"] },
        { name: "Growth", price: "15.000.000đ/th", highlight: true, features: ["Google + Facebook Ads", "Báo cáo hàng tuần", "A/B Testing", "CRO tối ưu", "Ngân sách ads < 50tr"] },
        { name: "Scale", price: "40.000.000đ/th", features: ["Đa nền tảng (5+)", "Account Manager riêng", "Báo cáo real-time", "Creative team", "Ngân sách không giới hạn", "KPI cam kết"] },
      ]}
      relatedServices={[
        { title: "Dịch vụ SEO", path: "/dich-vu/seo" },
        { title: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
        { title: "Lập trình CRM", path: "/dich-vu/crm" },
      ]}
    />
  );
}
