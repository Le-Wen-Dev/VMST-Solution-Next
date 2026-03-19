import Link from "next/link";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Globe,
  Megaphone,
  Search,
  Database,
  Users,
  Cloud,
  Zap,
  Shield,
  BarChart3,
  Headphones,
  Smartphone,
  Gauge,
  Workflow,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  { icon: Globe, title: "Thiết kế Website", desc: "Website chuyên nghiệp, chuẩn UI/UX, tối ưu SEO & tốc độ. Phục vụ 200+ doanh nghiệp tại Mỹ, Singapore, Úc.", link: "/dich-vu/thiet-ke-website", image: "/images/services/web-design.jpg", highlight: true },
  { icon: Megaphone, title: "Digital Marketing", desc: "Chiến dịch Google Ads, Facebook Ads toàn diện. Tối ưu ROI, giảm CPA đến 40%.", link: "/dich-vu/digital-marketing", image: "/images/services/digital-marketing.jpg", highlight: false },
  { icon: Search, title: "Dịch vụ SEO", desc: "Nâng cao xếp hạng Google, tăng traffic organic bền vững với chiến lược SEO chuyên sâu.", link: "/dich-vu/seo", image: "/images/services/seo.jpg", highlight: false },
  { icon: Database, title: "ERP Odoo", desc: "Hệ thống quản lý doanh nghiệp toàn diện: bán hàng, kho, kế toán, HR tự động hóa.", link: "/dich-vu/erp-odoo", image: "/images/services/erp.jpg", highlight: true },
  { icon: Users, title: "Lập trình CRM", desc: "Phần mềm quản lý khách hàng tùy chỉnh, tích hợp đa kênh Zalo, Facebook, Email.", link: "/dich-vu/crm", image: "/images/services/crm.jpg", highlight: false },
  { icon: Cloud, title: "Cloud VPS", desc: "Server ảo hiệu năng cao, uptime 99.9%, bảo mật DDoS, backup tự động hàng ngày.", link: "/dich-vu/cloud-vps", image: "/images/services/cloud-vps.jpg", highlight: true },
  { icon: Smartphone, title: "Lập trình Mobile App", desc: "Ứng dụng iOS & Android cross-platform (React Native/Flutter), tích hợp ERP/CRM.", link: "/dich-vu/mobile-app", image: "/images/services/mobile-app.jpg", highlight: false },
  { icon: Gauge, title: "Tối ưu tốc độ Website", desc: "Tăng PageSpeed Score 90+, Core Web Vitals xanh, giảm bounce rate và cải thiện SEO.", link: "/dich-vu/toi-uu-toc-do", image: "/images/services/speed-optimization.jpg", highlight: false },
  { icon: Workflow, title: "Automation Workflow", desc: "Tự động hóa quy trình doanh nghiệp: marketing, sales, HR, tài chính. Tiết kiệm 70% thời gian.", link: "/dich-vu/automation-workflow", image: "/images/services/automation.jpg", highlight: false },
];

const moreServices = [
  "Đăng ký tên miền",
  "Web Hosting cao cấp",
  "Mua SSL cho website",
  "Dịch vụ quản trị website",
  "Quảng cáo Google Ads",
  "Quảng cáo Facebook Ads",
  "Email Doanh Nghiệp",
  "VMST AI Platform",
];

const whyUs = [
  { icon: Zap, title: "Triển khai nhanh", desc: "Từ 2 tuần cho website, 4 tuần cho hệ thống ERP/CRM cơ bản." },
  { icon: Shield, title: "Bảo mật tối đa", desc: "SSL, WAF, DDoS Protection và monitoring 24/7 cho mọi dự án." },
  { icon: BarChart3, title: "Đo lường hiệu quả", desc: "Dashboard real-time, báo cáo KPI rõ ràng và minh bạch." },
  { icon: Headphones, title: "Hỗ trợ 24/7", desc: "Đội ngũ kỹ thuật túc trực, phản hồi trong vòng 30 phút." },
];

const steps = [
  { num: "01", title: "Tư vấn", desc: "Lắng nghe nhu cầu, phân tích mục tiêu kinh doanh của doanh nghiệp." },
  { num: "02", title: "Phân tích", desc: "Khảo sát thị trường, đề xuất chiến lược và giải pháp tối ưu." },
  { num: "03", title: "Triển khai", desc: "Thiết kế, phát triển, kiểm thử toàn diện theo tiêu chuẩn quốc tế." },
  { num: "04", title: "Bàn giao", desc: "Bàn giao sản phẩm, đào tạo sử dụng & hỗ trợ kỹ thuật liên tục." },
];

const faqs = [
  // ERP Odoo (5)
  { q: "ERP Odoo là gì và phù hợp với doanh nghiệp nào?", a: "Odoo là phần mềm ERP mã nguồn mở phổ biến nhất thế giới với 30+ module quản lý. Phù hợp cho doanh nghiệp sản xuất, thương mại, dịch vụ, bán lẻ từ 10-5000 nhân viên. VMST chuyên triển khai Odoo tại Việt Nam." },
  { q: "Triển khai ERP Odoo mất bao lâu?", a: "Gói cơ bản 3-5 module: 1-2 tháng. Gói chuyên nghiệp 5-10 module: 3-6 tháng. Gói enterprise full module: 6-12 tháng. Phụ thuộc vào mức độ tùy chỉnh và quy mô doanh nghiệp." },
  { q: "Chi phí triển khai ERP Odoo bao nhiêu?", a: "Gói Starter từ 20 triệu (3 module cơ bản), gói Business từ 60 triệu (10 module), gói Full Suite từ 200 triệu (toàn bộ 30+ module). Bao gồm khảo sát, tùy chỉnh, data migration, đào tạo." },
  { q: "Odoo Community hay Enterprise, nên chọn bản nào?", a: "Odoo Community miễn phí, phù hợp doanh nghiệp nhỏ cần tính năng cơ bản. Enterprise có Studio, reporting nâng cao, IoT, mobile app. VMST tư vấn phiên bản phù hợp với nhu cầu thực tế." },
  { q: "Có chuyển dữ liệu từ phần mềm cũ sang Odoo được không?", a: "Có, VMST hỗ trợ migrate dữ liệu từ Excel, SAP, MISA, Fast, 1C và mọi phần mềm khác sang Odoo. Đảm bảo dữ liệu chính xác, không mất mát, có kiểm tra đối chiếu." },
  // Thiết kế Website (5)
  { q: "Thiết kế website doanh nghiệp giá bao nhiêu?", a: "Website landing page từ 5 triệu, website doanh nghiệp 5-10 trang từ 15 triệu, website e-commerce từ 30 triệu, webapp tùy chỉnh báo giá theo dự án. Tất cả bao gồm hosting, SSL, bảo trì." },
  { q: "Thời gian thiết kế website mất bao lâu?", a: "Landing page: 1-2 tuần. Website doanh nghiệp: 2-4 tuần. E-commerce: 4-8 tuần. Webapp phức tạp: 2-4 tháng. VMST cam kết deadline trong hợp đồng, demo thiết kế trước khi lập trình." },
  { q: "Website có chuẩn SEO và responsive không?", a: "Tất cả website VMST thiết kế đều chuẩn SEO on-page (meta tags, schema markup, sitemap, URL friendly), responsive hoàn hảo trên mobile/tablet/desktop, tốc độ tải dưới 3 giây." },
  { q: "Có được sở hữu source code website không?", a: "Có, khách hàng sở hữu toàn bộ source code và dữ liệu website sau khi thanh toán đầy đủ. VMST bàn giao kèm tài liệu hướng dẫn quản trị chi tiết." },
  { q: "VMST thiết kế website bằng công nghệ gì?", a: "Tùy nhu cầu: WordPress cho website doanh nghiệp, Shopify/WooCommerce cho e-commerce, React/Next.js cho webapp hiệu năng cao, custom PHP/Laravel cho hệ thống phức tạp." },
  // Hosting VPS (5)
  { q: "Cloud VPS khác gì shared hosting?", a: "Cloud VPS có CPU/RAM riêng biệt, NVMe SSD 3500MB/s, uptime 99.9%, DDoS Protection. Shared hosting chia sẻ tài nguyên với hàng trăm website, tốc độ chậm, dễ bị ảnh hưởng bởi website khác." },
  { q: "Cloud VPS có quản trị sẵn (managed) không?", a: "Có, tất cả VPS tại VMST đều là Managed VPS. Chúng tôi cài đặt OS, web server, database, SSL, bảo mật, backup, monitoring. Khách hàng chỉ cần upload code." },
  { q: "VPS có auto backup không?", a: "Có, VMST backup tự động hàng ngày, lưu trữ 30 snapshots. Restore 1-click trong 5 phút. Có thêm offsite backup tại datacenter thứ 2 đảm bảo an toàn dữ liệu tuyệt đối." },
  { q: "Có dùng thử VPS miễn phí không?", a: "Có, VMST cung cấp 7 ngày dùng thử miễn phí cho tất cả gói Cloud VPS. Không cần thẻ tín dụng, không cam kết. Đội ngũ hỗ trợ setup và migration miễn phí." },
  { q: "VPS đặt ở datacenter nào?", a: "VMST sử dụng datacenter Tier 3+ tại Singapore (Equinix SG1) và Việt Nam (Viettel IDC). Latency Việt Nam < 5ms, Singapore < 30ms, bandwidth 1Gbps unmetered." },
  // Bảo hành (5)
  { q: "VMST bảo hành dự án bao lâu?", a: "Bảo hành miễn phí 6-12 tháng tùy gói dịch vụ. Bao gồm sửa lỗi, cập nhật bảo mật, hỗ trợ kỹ thuật 24/7. Sau bảo hành có gói bảo trì hàng năm chi phí hợp lý." },
  { q: "Hỗ trợ kỹ thuật qua kênh nào?", a: "VMST hỗ trợ qua Zalo, Hotline, Email, Ticket system. Thời gian phản hồi dưới 30 phút trong giờ hành chính, dưới 2 giờ ngoài giờ. Đội ngũ kỹ thuật trực 24/7." },
  { q: "Nếu website bị hack thì VMST xử lý thế nào?", a: "VMST xử lý trong vòng 2-4 giờ: quét malware, khôi phục từ backup sạch, vá lỗi bảo mật, cập nhật firewall, báo cáo chi tiết nguyên nhân và biện pháp phòng ngừa." },
  { q: "Có cam kết uptime không?", a: "Có, VMST cam kết uptime 99.9% SLA cho tất cả dịch vụ hosting và Cloud VPS. Nếu không đạt, hoàn tiền theo tỷ lệ downtime. Monitoring 24/7 tự động alert khi có sự cố." },
  { q: "Sau bảo hành muốn nâng cấp thêm tính năng thì sao?", a: "VMST cung cấp gói bảo trì & nâng cấp hàng năm. Hoặc báo giá theo yêu cầu cụ thể. Ưu đãi 20-30% cho khách hàng cũ. Đội ngũ hiểu rõ hệ thống nên triển khai nhanh chóng." },
  // SEO (5)
  { q: "Dịch vụ SEO bao lâu thì thấy kết quả?", a: "Từ khóa long-tail: 1-3 tháng. Từ khóa cạnh tranh trung bình: 3-6 tháng. Từ khóa cạnh tranh cao: 6-12 tháng. SEO là đầu tư dài hạn, kết quả tích lũy và bền vững theo thời gian." },
  { q: "VMST có cam kết lên top Google không?", a: "VMST cam kết KPI cụ thể trong hợp đồng: số từ khóa top 10, mức tăng traffic, conversion rate. Áp dụng SEO white-hat chuẩn Google Guidelines. Nếu không đạt KPI, miễn phí tháng tiếp theo." },
  { q: "SEO on-page và off-page khác nhau thế nào?", a: "On-page: tối ưu nội dung, meta tags, heading, internal link, tốc độ trang ngay trên website. Off-page: xây dựng backlink chất lượng, brand mention, social signals từ bên ngoài website." },
  { q: "Chi phí dịch vụ SEO hàng tháng bao nhiêu?", a: "Gói Local SEO từ 3 triệu/tháng (10 từ khóa), gói SEO Pro từ 10 triệu/tháng (30 từ khóa + content), gói Enterprise từ 30 triệu/tháng (không giới hạn từ khóa + team riêng)." },
  { q: "VMST sử dụng công cụ SEO nào?", a: "Ahrefs, SEMrush, Google Search Console, Google Analytics 4, Screaming Frog, PageSpeed Insights, Schema Markup Generator, Surfer SEO và nhiều công cụ chuyên dụng khác." },
  // ADS (5)
  { q: "Chạy Google Ads cần ngân sách tối thiểu bao nhiêu?", a: "Ngân sách ads tối thiểu khuyến nghị: Google Ads từ 10 triệu/tháng, Facebook Ads từ 5 triệu/tháng. Phí quản lý VMST từ 5 triệu/tháng tùy scope. Tối ưu để đạt ROI cao nhất." },
  { q: "Google Ads và Facebook Ads, nên chọn kênh nào?", a: "Google Ads phù hợp lead generation (khách đang tìm kiếm). Facebook Ads phù hợp brand awareness, B2C. VMST tư vấn kết hợp cả hai để tối ưu marketing funnel toàn diện." },
  { q: "Bao lâu thấy kết quả khi chạy quảng cáo?", a: "Google Ads/Facebook Ads thấy kết quả ngay tuần đầu tiên. Sau 2-4 tuần tối ưu A/B testing, hiệu quả ổn định. VMST cung cấp dashboard real-time để theo dõi từng click, lead, conversion." },
  { q: "VMST có cam kết KPI quảng cáo không?", a: "Có, VMST cam kết KPI rõ ràng trong hợp đồng: số lượng lead, CPA (cost per acquisition), ROAS (return on ad spend). Báo cáo minh bạch hàng tuần, tối ưu liên tục." },
  { q: "Có chạy quảng cáo TikTok, Zalo không?", a: "Có, VMST quản lý quảng cáo đa nền tảng: Google, Facebook, Instagram, TikTok, Zalo, LinkedIn, YouTube. Tư vấn kênh phù hợp nhất với ngành nghề và đối tượng mục tiêu." },
  // Mobile App (7)
  { q: "Nên phát triển app native hay cross-platform?", a: "Cross-platform (React Native/Flutter) tiết kiệm 40-50% chi phí, 1 codebase cho iOS + Android. Native phù hợp app game, AR/VR cần hiệu năng tối đa. VMST tư vấn giải pháp phù hợp từng dự án." },
  { q: "App mobile VMST phát triển có hoạt động offline không?", a: "Có, VMST hỗ trợ offline mode với local database (SQLite/Realm). Dữ liệu sync tự động khi có internet. Phù hợp app kiểm kho, bán hàng, chấm công ngoài hiện trường." },
  { q: "VMST có thiết kế UI/UX cho app mobile không?", a: "Có, VMST có đội designer chuyên UI/UX mobile: wireframe, prototype trên Figma, user testing. Thiết kế theo Material Design (Android) và Human Interface Guidelines (iOS)." },
  { q: "App có tích hợp thanh toán online được không?", a: "Có, VMST tích hợp thanh toán MoMo, ZaloPay, VNPAY, Stripe, Apple Pay, Google Pay vào mobile app. Đảm bảo bảo mật PCI DSS, trải nghiệm thanh toán mượt mà." },
  { q: "App mobile có push notification không?", a: "Có, tất cả gói Business trở lên đều có push notification qua Firebase Cloud Messaging (FCM). Hỗ trợ notification theo nhóm, scheduled, geo-based, và in-app messaging." },
  { q: "VMST có bảo trì và cập nhật app sau khi ra mắt không?", a: "Có, VMST cung cấp gói bảo trì app: monitoring crash (Sentry/Firebase Crashlytics), cập nhật SDK, fix bug, thêm tính năng mới. Gói từ 3-10 triệu/tháng tùy quy mô." },
  { q: "Có thể convert website thành mobile app không?", a: "Có, VMST hỗ trợ: (1) PWA — chạy như app từ trình duyệt, chi phí thấp. (2) WebView wrapper — đóng gói website thành app. (3) Native app — phát triển từ đầu, hiệu năng tốt nhất." },
  // Tối ưu tốc độ (7)
  { q: "Website chậm do đâu?", a: "Nguyên nhân phổ biến: ảnh chưa nén (40%), JS/CSS chưa minify (20%), server chậm (15%), không có cache (15%), plugin nặng (10%). VMST audit miễn phí để xác định nguyên nhân cụ thể cho website của bạn." },
  { q: "Tối ưu tốc độ có cần thay hosting không?", a: "Không nhất thiết. VMST tối ưu code, ảnh, cache trước. Nếu server vẫn chậm (TTFB > 800ms), VMST tư vấn upgrade hosting phù hợp. Nhiều trường hợp chỉ cần CDN là đủ cải thiện." },
  { q: "Lazy loading là gì? Có ảnh hưởng SEO không?", a: "Lazy loading chỉ tải ảnh khi user cuộn đến, giảm thời gian load trang ban đầu. Google hỗ trợ lazy loading, không ảnh hưởng SEO nếu implement đúng cách với proper markup." },
  { q: "CDN là gì và có cần cho website Việt Nam không?", a: "CDN (Content Delivery Network) cache nội dung tại nhiều server toàn cầu. Website chỉ phục vụ khách Việt Nam vẫn nên dùng CDN để giảm tải server, chống DDoS, và tải nhanh hơn 30-50%." },
  { q: "Website e-commerce có tối ưu được không?", a: "Có, VMST chuyên tối ưu website e-commerce (WooCommerce, Shopify, custom): nén ảnh sản phẩm, cache database queries, lazy load catalog, optimize checkout flow. Giảm 60% thời gian tải." },
  { q: "Tối ưu tốc độ có mất dữ liệu không?", a: "Không, VMST backup toàn bộ website trước khi tối ưu. Chỉ thay đổi kỹ thuật (cache, nén, minify), không thay đổi nội dung hay chức năng. Rollback ngay nếu có bất kỳ vấn đề nào." },
  { q: "Sau tối ưu, tốc độ có giữ được lâu dài không?", a: "Có nếu tuân thủ quy tắc: nén ảnh trước khi upload, không cài plugin thừa, dọn database định kỳ. VMST cung cấp checklist bảo trì tốc độ và gói monitoring từ 500K/tháng." },
  // Automation Workflow (6)
  { q: "Quy trình nào nên tự động hóa đầu tiên?", a: "Ưu tiên quy trình lặp lại hàng ngày: gửi email xác nhận đơn hàng, sync lead từ Facebook vào CRM, tạo invoice tự động, báo cáo doanh thu cuối ngày. VMST khảo sát miễn phí để xác định quy trình ROI cao nhất." },
  { q: "n8n khác gì Zapier?", a: "n8n: self-hosted (bảo mật cao), không giới hạn workflow, chi phí thấp dài hạn. Zapier: cloud-based, dễ dùng, 5000+ tích hợp sẵn, phí hàng tháng theo usage. VMST tư vấn tool phù hợp quy mô." },
  { q: "Automation có an toàn cho dữ liệu doanh nghiệp không?", a: "Có, VMST triển khai n8n self-hosted trên VPS riêng, dữ liệu không qua bên thứ 3. Mã hóa API keys, audit log mọi hoạt động, phân quyền user. Tuân thủ tiêu chuẩn bảo mật doanh nghiệp." },
  { q: "Automation có thể kết nối Shopee, Lazada không?", a: "Có, VMST tích hợp Shopee, Lazada, Tiki, Sendo qua API: đồng bộ đơn hàng, tồn kho, giá bán, đánh giá. Tự động cập nhật stock, tạo vận đơn, gửi thông báo cho khách hàng." },
  { q: "Bao lâu thì triển khai xong automation?", a: "Gói Starter (3 workflow): 1-2 tuần. Gói Business (10 workflow): 2-4 tuần. Gói Enterprise (custom): 1-2 tháng. VMST demo workflow mẫu trước khi triển khai để khách hàng duyệt." },
  { q: "Có đào tạo nhân viên quản lý automation không?", a: "Có, VMST đào tạo 1-2 buổi cho nhân viên: cách giám sát workflow, xử lý lỗi cơ bản, chỉnh sửa trigger/action đơn giản. Tài liệu hướng dẫn tiếng Việt, video recording." },
  // Phổ biến khác (4)
  { q: "VMST Solutions là công ty gì?", a: "VMST Solutions là công ty cung cấp dịch vụ thiết kế website, SEO, Digital Marketing, triển khai ERP Odoo, lập trình CRM và Cloud VPS. Phục vụ hơn 200 doanh nghiệp tại Việt Nam, Singapore, Mỹ, Úc." },
  { q: "VMST có phục vụ khách hàng quốc tế không?", a: "Có, VMST đã hoàn thành 172 dự án website LLC tại Mỹ, 50+ website tại Singapore, 30+ dự án tại Úc. Giao tiếp tiếng Anh, hỗ trợ timezone linh hoạt." },
  { q: "Quy trình làm việc với VMST như thế nào?", a: "4 bước: (1) Tư vấn & khảo sát nhu cầu, (2) Phân tích & đề xuất giải pháp, (3) Triển khai & kiểm thử, (4) Bàn giao & hỗ trợ. Mỗi bước có milestone và review rõ ràng." },
  { q: "Làm sao liên hệ VMST Solutions?", a: "Liên hệ qua: Hotline, Email, Zalo OA, hoặc form trên website. Đội ngũ tư vấn phản hồi trong vòng 30 phút giờ hành chính. Tư vấn miễn phí, không cam kết." },
];

const comparisonData = [
  { service: "Thiết kế Website", link: "/dich-vu/thiet-ke-website", startPrice: "5 triệu", timeline: "2-8 tuần", bestFor: "Mọi doanh nghiệp cần hiện diện online" },
  { service: "Dịch vụ SEO", link: "/dich-vu/seo", startPrice: "3 triệu/th", timeline: "3-6 tháng", bestFor: "Tăng traffic organic từ Google" },
  { service: "Digital Marketing", link: "/dich-vu/digital-marketing", startPrice: "5 triệu/th", timeline: "1-2 tuần", bestFor: "Tăng doanh thu nhanh qua quảng cáo" },
  { service: "ERP Odoo", link: "/dich-vu/erp-odoo", startPrice: "20 triệu", timeline: "1-6 tháng", bestFor: "Doanh nghiệp sản xuất, thương mại" },
  { service: "Lập trình CRM", link: "/dich-vu/crm", startPrice: "500K/th", timeline: "2-6 tháng", bestFor: "Quản lý khách hàng, sales pipeline" },
  { service: "Cloud VPS", link: "/dich-vu/cloud-vps", startPrice: "200K/th", timeline: "Ngay lập tức", bestFor: "Hosting website, ứng dụng web" },
  { service: "Mobile App", link: "/dich-vu/mobile-app", startPrice: "30 triệu", timeline: "1-4 tháng", bestFor: "App iOS & Android cho doanh nghiệp" },
  { service: "Tối ưu tốc độ", link: "/dich-vu/toi-uu-toc-do", startPrice: "3 triệu", timeline: "2-7 ngày", bestFor: "Website chậm, cần cải thiện SEO" },
  { service: "Automation Workflow", link: "/dich-vu/automation-workflow", startPrice: "5 triệu", timeline: "1-4 tuần", bestFor: "Tự động hóa quy trình doanh nghiệp" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Services = () => {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/3" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />

        <div className="container relative text-center">
          <ScrollAnimate>
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4">
              Our Services
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight leading-tight">
              Dịch vụ <span className="text-primary">thiết kế website</span>,{" "}
              <span className="text-primary">SEO</span> &{" "}
              <span className="text-primary">giải pháp CNTT</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
              VMST Solutions cung cấp trọn gói dịch vụ thiết kế website chuyên nghiệp, dịch vụ SEO Google, quảng cáo Google Ads & Facebook Ads,
              triển khai hệ thống ERP Odoo, lập trình CRM tùy chỉnh và Cloud VPS hiệu năng cao —
              phục vụ hơn 200 doanh nghiệp tại Việt Nam, Singapore, Mỹ và Úc.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild className="shadow-lg shadow-primary/25">
                <Link href="/lien-he">
                  Nhận tư vấn miễn phí <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">Xem dịch vụ</a>
              </Button>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <ScrollAnimate>
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
                Dịch vụ chính
              </span>
              <h2 className="text-2xl md:text-4xl font-bold">
                9 nhóm dịch vụ <span className="text-primary">cốt lõi</span>
              </h2>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollAnimate key={s.title} delay={i * 80}>
                <Link
                  href={s.link}
                  className={`group relative block rounded-2xl overflow-hidden border bg-card hover:shadow-2xl transition-all duration-300 h-full ${
                    s.highlight
                      ? "border-primary/30 ring-1 ring-primary/10 shadow-lg shadow-primary/5"
                      : "hover:border-primary/20"
                  }`}
                >
                  {s.highlight && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-md">
                        <Zap className="h-3 w-3" /> Nổi bật
                      </span>
                    </div>
                  )}
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <s.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`font-bold text-lg mb-2 group-hover:text-primary transition-colors ${s.highlight ? "text-primary" : ""}`}>
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Xem chi tiết <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container">
          <ScrollAnimate>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Dịch vụ bổ sung</h2>
                <p className="text-muted-foreground">Các dịch vụ hỗ trợ giúp doanh nghiệp hoạt động hiệu quả hơn</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {moreServices.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-background border hover:border-primary/20 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollAnimate>
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
                Why VMST
              </span>
              <h2 className="text-2xl md:text-4xl font-bold">
                Tại sao chọn <span className="text-primary">VMST Solutions?</span>
              </h2>
            </div>
          </ScrollAnimate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <ScrollAnimate key={item.title} delay={i * 100}>
                <div className="text-center p-6 rounded-2xl border bg-card hover:shadow-lg hover:border-primary/15 transition-all duration-300 h-full">
                  <div className="mx-auto h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <ScrollAnimate>
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
                Process
              </span>
              <h2 className="text-2xl md:text-4xl font-bold">
                Quy trình <span className="text-primary">4 bước</span>
              </h2>
            </div>
          </ScrollAnimate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <ScrollAnimate key={s.num} delay={i * 120}>
                <div className="relative text-center p-6 rounded-2xl bg-background border hover:shadow-lg hover:border-primary/15 transition-all duration-300 h-full">
                  <div className="mx-auto h-14 w-14 rounded-full bg-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/25">
                    <span className="text-sm font-bold text-primary-foreground">{s.num}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-5 z-10">
                      <ArrowRight className="h-5 w-5 text-primary/40" />
                    </div>
                  )}
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollAnimate>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-3">
                So sánh <span className="text-primary">tất cả dịch vụ</span> VMST Solutions
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Bảng tổng hợp giúp doanh nghiệp nhanh chóng chọn dịch vụ thiết kế website, SEO, ERP Odoo, CRM hoặc Cloud VPS phù hợp nhất.
              </p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate>
            <div className="overflow-x-auto rounded-2xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-secondary/60">
                    <th className="text-left p-4 font-semibold">Dịch vụ</th>
                    <th className="text-left p-4 font-semibold">Giá từ</th>
                    <th className="text-left p-4 font-semibold">Thời gian</th>
                    <th className="text-left p-4 font-semibold hidden md:table-cell">Phù hợp cho</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.service} className={`border-b last:border-0 ${i % 2 === 0 ? "" : "bg-secondary/20"}`}>
                      <td className="p-4 font-medium">
                        <Link href={row.link} className="text-primary hover:underline">{row.service}</Link>
                      </td>
                      <td className="p-4 font-semibold whitespace-nowrap">{row.startPrice}</td>
                      <td className="p-4 text-muted-foreground whitespace-nowrap">{row.timeline}</td>
                      <td className="p-4 text-muted-foreground hidden md:table-cell">{row.bestFor}</td>
                      <td className="p-4">
                        <Button asChild variant="outline" size="sm">
                          <Link href={row.link}>Chi tiết <ArrowRight className="ml-1 h-3 w-3" /></Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container max-w-4xl">
          <ScrollAnimate>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Dịch vụ công nghệ thông tin trọn gói tại VMST Solutions
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong>VMST Solutions</strong> là đơn vị cung cấp dịch vụ{" "}
                <Link href="/dich-vu/thiet-ke-website" className="text-primary hover:underline font-medium">thiết kế website chuyên nghiệp</Link>,{" "}
                <Link href="/dich-vu/seo" className="text-primary hover:underline font-medium">dịch vụ SEO</Link>,{" "}
                <Link href="/dich-vu/digital-marketing" className="text-primary hover:underline font-medium">Digital Marketing</Link>,{" "}
                triển khai <Link href="/dich-vu/erp-odoo" className="text-primary hover:underline font-medium">hệ thống ERP Odoo</Link>,{" "}
                <Link href="/dich-vu/crm" className="text-primary hover:underline font-medium">lập trình CRM tùy chỉnh</Link> và{" "}
                <Link href="/dich-vu/cloud-vps" className="text-primary hover:underline font-medium">Cloud VPS hiệu năng cao</Link> cho doanh nghiệp Việt Nam và quốc tế.
              </p>
              <p>
                Với hơn 200 dự án đã hoàn thành tại Mỹ, Singapore, Úc, Hong Kong, VMST Solutions hiểu rõ nhu cầu của doanh nghiệp trong môi trường kinh doanh đa quốc gia.
                Từ <strong>thiết kế website doanh nghiệp</strong> chuẩn SEO, responsive, tốc độ cao cho đến triển khai hệ thống <strong>quản lý ERP Odoo</strong> toàn diện với 30+ module —
                VMST đồng hành cùng doanh nghiệp ở mọi giai đoạn chuyển đổi số.
              </p>
              <p>
                Dịch vụ <strong>SEO website</strong> của VMST giúp doanh nghiệp tăng thứ hạng trên Google, thu hút traffic organic bền vững. Kết hợp với chiến dịch <strong>Google Ads, Facebook Ads</strong> được tối ưu CPA,
                doanh nghiệp có thể tăng trưởng doanh thu nhanh chóng. Hệ thống <strong>CRM tùy chỉnh</strong> tích hợp Zalo, Facebook Messenger giúp quản lý khách hàng hiệu quả,
                trong khi <strong>Cloud VPS</strong> với uptime 99.9% đảm bảo mọi ứng dụng hoạt động ổn định 24/7.
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollAnimate>
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
                FAQ
              </span>
              <h2 className="text-2xl md:text-4xl font-bold">Câu hỏi thường gặp về dịch vụ VMST</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                40 câu hỏi phổ biến nhất về thiết kế website, SEO, ERP Odoo, Cloud VPS, quảng cáo và bảo hành tại VMST Solutions
              </p>
            </div>
          </ScrollAnimate>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScrollAnimate>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.slice(0, 20).map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card rounded-xl border px-5 hover:border-primary/15 transition-colors data-[state=open]:border-primary/20 data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[0.9rem] hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollAnimate>
            <ScrollAnimate delay={100}>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.slice(20, 40).map((f, i) => (
                  <AccordionItem
                    key={i + 20}
                    value={`faq-${i + 20}`}
                    className="bg-card rounded-xl border px-5 hover:border-primary/15 transition-colors data-[state=open]:border-primary/20 data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[0.9rem] hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="container relative text-center">
          <ScrollAnimate>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5">
              Bắt đầu dự án của bạn
              <br className="hidden md:block" /> ngay hôm nay
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
              Liên hệ để nhận tư vấn miễn phí và báo giá chi tiết cho dự án của bạn.
            </p>
            <Button size="lg" variant="secondary" asChild className="shadow-xl hover:scale-[1.03] transition-transform">
              <Link href="/lien-he">
                Liên hệ ngay <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </ScrollAnimate>
        </div>
      </section>
    </>
  );
};

export default Services;
