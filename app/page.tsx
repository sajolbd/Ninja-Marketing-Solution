import AboutSection from "components/home/AboutSection";
import HeroSlider from "components/home/HeroSlider";
import StatsCounterSection from "components/home/StatsCounterSectionl";
import WhyNinjaSection from "components/home/WhyNinjaSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <StatsCounterSection />
      <WhyNinjaSection />
    </div>
  );
}
