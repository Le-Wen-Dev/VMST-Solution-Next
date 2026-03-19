import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => (
  <section className="py-16 md:py-24 bg-primary">
    <div className="container text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 max-w-2xl mx-auto leading-tight">
        Sẵn sàng nâng cấp hệ thống công nghệ cho doanh nghiệp?
      </h2>
      <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
        Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia VMST Solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg" variant="secondary" asChild>
          <Link href="/lien-he">
            Liên hệ ngay <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
        >
          <a href="tel:0822636676">
            <Phone className="mr-2 h-4 w-4" />
            0822 636 676
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
