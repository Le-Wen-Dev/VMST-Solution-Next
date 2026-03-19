"use client";

import ScrollAnimate from "@/components/ScrollAnimate";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ServiceDetailsSection from "@/components/home/ServiceDetailsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HomeFAQSection from "@/components/home/HomeFAQSection";
import TechStackSection from "@/components/home/TechStackSection";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollAnimate>
        <ServicesSection />
      </ScrollAnimate>
      <ServiceDetailsSection />
      <ScrollAnimate>
        <WhyUsSection />
      </ScrollAnimate>
      <ScrollAnimate>
        <ProjectsSection />
      </ScrollAnimate>
      <ScrollAnimate>
        <TestimonialsSection />
      </ScrollAnimate>
      <TechStackSection />
      <HomeFAQSection />
      <ScrollAnimate>
        <HomeBlogSection />
      </ScrollAnimate>
      <CTASection />
    </>
  );
}
