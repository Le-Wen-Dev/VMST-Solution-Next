import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Cloud VPS | VMST Solutions",
  description: "Server ảo hiệu năng cao, uptime 99.9%, bảo mật tối đa. Datacenter tier 3+ tại Singapore và Việt Nam.",
};

export default function CloudVPS() {
  return (
    <ServiceDetailTemplate
      title="Cloud VPS"
      subtitle="Server ảo hiệu năng cao, uptime 99.9%, bảo mật tối đa"
      heroDesc="VMST Solutions cung cấp dịch vụ Cloud VPS hiệu năng cao cho doanh nghiệp, website, ứng dụng. Với hạ tầng datacenter tier 3+ tại Singapore và Việt Nam, chúng tôi cam kết uptime 99.9%, băng thông không giới hạn, hỗ trợ kỹ thuật 24/7. Phù hợp cho mọi nhu cầu từ hosting website đến chạy ứng dụng enterprise."
      problemTitle="Vấn đề hosting thường gặp"
      problems={[
        "Shared hosting chậm, ảnh hưởng tốc độ website, giảm thứ hạng SEO trên Google",
        "Server thường xuyên downtime, mất dữ liệu, ảnh hưởng nghiêm trọng đến kinh doanh",
        "Không có backup tự động, khi bị hack hoặc lỗi thì mất toàn bộ dữ liệu",
        "Không scale được khi traffic tăng đột biến, website sập vào giờ cao điểm",
        "Đơn vị hosting hiện tại hỗ trợ chậm, không có kỹ thuật viên trực 24/7",
      ]}
      solutionTitle="Giải pháp Cloud VPS từ VMST"
      solutions={[
        "VPS NVMe SSD tốc độ đọc/ghi 3500MB/s, nhanh gấp 10 lần HDD thông thường",
        "Uptime cam kết 99.9% SLA, hoàn tiền nếu không đạt. Monitoring 24/7 tự động",
        "Auto backup hàng ngày, lưu trữ 30 ngày, restore 1-click trong 5 phút",
        "Scale linh hoạt: tăng RAM, CPU, storage chỉ trong vài phút, không downtime",
        "Hỗ trợ kỹ thuật 24/7 qua Zalo, Phone, Ticket. Thời gian phản hồi dưới 15 phút",
        "DDoS Protection, Firewall, SSL miễn phí, IP riêng cho mỗi VPS",
      ]}
      features={[
        { title: "NVMe SSD Storage", desc: "Ổ cứng NVMe SSD tốc độ 3500MB/s. Website tải trang dưới 1 giây. IOPS cao gấp 20 lần HDD thông thường." },
        { title: "99.9% Uptime SLA", desc: "Cam kết uptime 99.9% trong SLA. Hệ thống monitoring Nagios/Zabbix giám sát 24/7, alert tự động khi có sự cố." },
        { title: "Auto Backup Daily", desc: "Sao lưu tự động hàng ngày, lưu trữ 30 snapshots. Restore 1-click trong 5 phút. Backup offsite bổ sung." },
        { title: "DDoS Protection", desc: "Chống tấn công DDoS layer 3/4/7 lên đến 100Gbps. Firewall iptables + CSF. Fail2Ban chống brute force." },
        { title: "Managed Service", desc: "VMST quản lý toàn bộ: cài đặt OS, web server, database, security, update. Khách hàng chỉ cần upload code." },
        { title: "Free Migration", desc: "Chuyển đổi miễn phí từ hosting/VPS cũ sang VMST Cloud VPS. Không downtime, đảm bảo dữ liệu toàn vẹn." },
      ]}
      process={[
        { num: "01", title: "Tư vấn cấu hình", desc: "Phân tích nhu cầu: traffic, storage, database. Đề xuất cấu hình VPS tối ưu về hiệu năng và chi phí." },
        { num: "02", title: "Provisioning", desc: "Khởi tạo VPS trong 5 phút. Cài đặt OS, LEMP/LAMP stack, bảo mật cơ bản, SSL certificate." },
        { num: "03", title: "Migration & Setup", desc: "Chuyển dữ liệu từ hosting cũ, cấu hình DNS, email server, monitoring, backup schedule." },
        { num: "04", title: "Monitoring & Support", desc: "Giám sát 24/7, auto-alert, xử lý sự cố. Hỗ trợ kỹ thuật qua Zalo, Phone, Ticket." },
      ]}
      contentBlocks={[
        {
          heading: "Cloud VPS là gì? Khác gì Shared Hosting và Dedicated Server?",
          body: `Cloud VPS (Virtual Private Server) là máy chủ ảo chạy trên hạ tầng cloud, có tài nguyên (CPU, RAM, Storage) riêng biệt, không chia sẻ với website khác. So với các giải pháp hosting khác:

Shared Hosting: Rẻ nhất nhưng chia sẻ tài nguyên với hàng trăm website khác. Một website bị hack hoặc quá tải ảnh hưởng tất cả. Không phù hợp cho website doanh nghiệp nghiêm túc.

VPS truyền thống: Tài nguyên riêng nhưng chạy trên 1 server vật lý. Nếu server hỏng, VPS cũng hỏng theo.

Cloud VPS: Chạy trên cluster nhiều server vật lý. Nếu 1 server hỏng, VPS tự động migrate sang server khác, không downtime. Scale linh hoạt, trả theo dùng.

Dedicated Server: Máy chủ vật lý riêng, hiệu năng cao nhất nhưng chi phí rất cao ($200-2000/tháng), không linh hoạt scale.

Cloud VPS là lựa chọn tối ưu cho 90% doanh nghiệp: hiệu năng cao, chi phí hợp lý, scale linh hoạt, uptime cao.`
        },
        {
          heading: "Hạ tầng Cloud VPS tại VMST",
          body: `VMST Cloud VPS được xây dựng trên hạ tầng enterprise-grade:

• Datacenter: Tier 3+ tại Singapore (Equinix SG1) và Việt Nam (Viettel IDC). Redundant power, cooling, network.

• Hardware: CPU Intel Xeon Gold / AMD EPYC. RAM DDR4 ECC. Storage Samsung NVMe SSD enterprise.

• Network: Bandwidth 1Gbps unmetered. Peering trực tiếp với VNPT, Viettel, FPT. Latency Việt Nam < 5ms, Singapore < 30ms.

• Virtualization: KVM hypervisor, full hardware virtualization. Mỗi VPS có CPU, RAM, storage riêng biệt, không overselling.

• Security: Hardware firewall Juniper SRX. DDoS mitigation Arbor Networks. IDS/IPS Snort. 2FA cho management panel.

• Backup: Automated daily backup, lưu trữ 30 ngày. Offsite backup tại datacenter thứ 2. RPO < 24h, RTO < 1h.

Tất cả VPS đều được monitor 24/7 bởi đội ngũ NOC (Network Operation Center) của VMST, đảm bảo xử lý sự cố trong thời gian ngắn nhất.`
        },
        {
          heading: "Bảng giá Cloud VPS tại VMST Solutions",
          body: `VMST cung cấp nhiều gói Cloud VPS phù hợp mọi nhu cầu:

Gói VPS Basic: 200.000đ/tháng - 1 vCPU, 1GB RAM, 20GB NVMe SSD, 1TB bandwidth. Phù hợp website WordPress, blog, landing page.

Gói VPS Standard: 400.000đ/tháng - 2 vCPU, 2GB RAM, 40GB NVMe SSD, 2TB bandwidth. Phù hợp website doanh nghiệp, WooCommerce nhỏ.

Gói VPS Professional: 800.000đ/tháng - 4 vCPU, 4GB RAM, 80GB NVMe SSD, unlimited bandwidth. Phù hợp website traffic cao, multiple sites.

Gói VPS Business: 1.500.000đ/tháng - 6 vCPU, 8GB RAM, 160GB NVMe SSD, unlimited bandwidth. Phù hợp ứng dụng web, ERP, CRM.

Gói VPS Enterprise: 3.000.000đ/tháng - 8 vCPU, 16GB RAM, 320GB NVMe SSD, unlimited bandwidth. Phù hợp enterprise application, high-traffic ecommerce.

Tất cả gói bao gồm: Managed service, SSL miễn phí, daily backup, DDoS protection, 24/7 support. Thanh toán hàng tháng hoặc hàng năm (giảm 20%). Custom configuration theo yêu cầu.`
        },
      ]}
      faqs={[
        { q: "Chuyển từ hosting cũ sang VMST VPS có bị downtime không?", a: "Không. VMST thực hiện migration zero-downtime: setup VPS mới, clone data, test kỹ, rồi switch DNS. Website không bị gián đoạn." },
        { q: "VPS có quản trị sẵn (Managed) không?", a: "Có, tất cả VPS tại VMST đều là Managed. Chúng tôi cài đặt, cấu hình, bảo mật, update, backup. Khách hàng chỉ cần upload code và quản lý nội dung." },
        { q: "Có thể upgrade/downgrade VPS không?", a: "Có, upgrade chỉ mất 5 phút, không downtime. Downgrade có thể thực hiện khi renew. Scale linh hoạt theo nhu cầu thực tế." },
        { q: "Thanh toán như thế nào?", a: "Hỗ trợ chuyển khoản ngân hàng, MoMo, ZaloPay, VNPAY. Hóa đơn VAT đầy đủ. Thanh toán hàng tháng hoặc hàng năm." },
        { q: "Có dùng thử miễn phí không?", a: "Có, VMST cung cấp 7 ngày dùng thử miễn phí cho tất cả gói VPS. Không cần thẻ tín dụng, không cam kết." },
      ]}
      pricingTiers={[
        { name: "VPS Basic", price: "200.000đ/th", features: ["1 vCPU, 1GB RAM", "20GB SSD", "Bandwidth 1TB", "Auto backup tuần"] },
        { name: "VPS Business", price: "800.000đ/th", highlight: true, features: ["4 vCPU, 8GB RAM", "100GB NVMe SSD", "Bandwidth không giới hạn", "DDoS Protection", "Backup hàng ngày"] },
        { name: "Dedicated Server", price: "5.000.000đ/th", features: ["16 vCPU, 32GB RAM", "500GB NVMe SSD", "IP riêng", "Firewall nâng cao", "Hỗ trợ 24/7 ưu tiên", "SLA 99.99%"] },
      ]}
      relatedServices={[
        { title: "Thiết kế Website", path: "/dich-vu/thiet-ke-website" },
        { title: "Dịch vụ SEO", path: "/dich-vu/seo" },
        { title: "ERP Odoo", path: "/dich-vu/erp-odoo" },
      ]}
    />
  );
}
