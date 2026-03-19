"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimate = ({ children, className = "", delay = 0 }: ScrollAnimateProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("animate-fade-in-up");
            el.style.opacity = "1";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default ScrollAnimate;
