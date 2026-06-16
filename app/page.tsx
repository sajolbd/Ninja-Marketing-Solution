import AboutSection from "components/home/AboutSection";
import HeroSlider from "components/home/HeroSlider";
import StatsCounterSection from "components/home/StatsCounterSectionl";
import WhyNinjaSection from "components/home/WhyNinjaSection";
import ServicesSection from "components/home/ServicesSection";
import PartnerLogos from "components/home/PartnerLogos";
import CaseStudiesSection from "components/home/CaseStudiesSection";
import IndustriesSection from "components/home/IndustriesSection";
import TestimonialsSection from "components/home/TestimonialsSection";
import HomeFaqsSection from "components/home/HomeFaqsSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <PartnerLogos />
      <AboutSection />
      <StatsCounterSection />
      <WhyNinjaSection />
      <ServicesSection />
      <CaseStudiesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <HomeFaqsSection />
    </div>
  );
}
