import AboutSection from "components/home/AboutSection";
import HeroSlider from "components/home/HeroSlider";
import StatsCounterSection from "components/home/StatsCounterSectionl";
import WhyNinjaSection from "components/home/WhyNinjaSection";
import ServicesSection from "components/home/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <StatsCounterSection />
      <WhyNinjaSection />
      <ServicesSection />
    </div>
  );
}
