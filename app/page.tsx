import Hero from "@/components/home/hero/Hero";
import TechStack from "@/components/home/techstack/TechStack";
import ServicesPage from "@/components/service/service";

export default function Page() {
  return (
    <div>
      <Hero />
      <ServicesPage />
      <TechStack />
    </div>
  );
}
