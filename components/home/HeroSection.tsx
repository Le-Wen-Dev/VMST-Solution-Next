import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="py-16 md:py-24 lg:py-28">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-6">
          <p className="text-primary font-medium text-sm">
            Đối tác chuyển đổi số cho doanh nghiệp
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight">
            Giải pháp công nghệ giúp doanh nghiệp bạn{" "}
            <span className="text-primary">phát triển bền vững</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            Từ thiết kế website, digital marketing đến hệ thống ERP & CRM — chúng tôi đồng hành
            cùng hơn 200 doanh nghiệp tại Việt Nam, Singapore, Úc và Mỹ.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button size="lg" asChild>
              <Link href="/lien-he">
                Nhận tư vấn miễn phí <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="/gioi-thieu">Xem dự án đã triển khai</Link>
            </Button>
          </div>
          <div className="flex gap-8 pt-4 text-sm">
            <div>
              <div className="text-2xl font-bold text-foreground">172+</div>
              <div className="text-muted-foreground">dự án hoàn thành</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">4+</div>
              <div className="text-muted-foreground">quốc gia triển khai</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">99%</div>
              <div className="text-muted-foreground">khách hàng hài lòng</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/assets/hero-illustration.jpg"
              alt="Đội ngũ VMST Solutions làm việc cùng khách hàng"
              className="w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
