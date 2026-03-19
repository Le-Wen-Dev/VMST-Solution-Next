"use client";

import { useEffect, useRef, useState } from "react";
import { Server, Globe2, Headphones, Award } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";

const stats = [
  { icon: Server, value: 172, suffix: "+", label: "Dự án hoàn thành" },
  { icon: Globe2, value: 4, suffix: "+", label: "Quốc gia triển khai" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Hỗ trợ kỹ thuật" },
  { icon: Award, value: 99, suffix: "%", label: "Khách hàng hài lòng" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-primary tabular-nums">
      {count}{suffix}
    </div>
  );
};

const WhyUsSection = () => (
  <section className="py-16 md:py-24 bg-secondary/60">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Con số nói lên tất cả</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Kinh nghiệm triển khai dự án quốc tế, cam kết chất lượng và hỗ trợ xuyên suốt.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <ScrollAnimate key={s.label} delay={i * 100}>
            <div className="text-center p-6 rounded-2xl bg-card border">
              <div className="mx-auto h-12 w-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <Counter target={s.value} suffix={s.suffix} />
              <div className="text-sm text-muted-foreground mt-1.5">{s.label}</div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
