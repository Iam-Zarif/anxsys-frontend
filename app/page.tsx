import Hero from "@/components/home/hero/Hero";
import Portfolio from "@/components/home/Portfolio/Portfolio";
import TechStack from "@/components/home/techstack/TechStack";
import WhyChooseUsMinimal from "@/components/home/WhyChooseUsMinimal/WhyChooseUsMinimal";
import ServicesPage from "@/components/service/service";

export default function Page() {
  return (
    <div>
      <Hero />
      <ServicesPage />
      <WhyChooseUsMinimal />
      <TechStack />
      <Portfolio />
    </div>
  );
}
