import { HeroSection } from "@/components/about/HeroSection";
import { MissionSection } from "@/components/about/MissionSection";
import { VisionSection } from "@/components/about/VisionSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { ApproachSection } from "@/components/about/ApproachSection";
import { ComplianceSection } from "@/components/about/ComplianceSection";
import { RoadmapSection } from "@/components/about/RoadmapSection";
import { colors } from "@/constants/color";
import { ValueAccordion } from "@/components/about/CoreValuesSection";
import { aboutData } from "@/constants/aboutData";

export default function AboutPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background.light }}
    >
      <HeroSection />
      <MissionSection />
      <VisionSection />
      <ValueAccordion values={aboutData.values} />
      <LeadershipSection />
      <ApproachSection />
      <ComplianceSection />
      <RoadmapSection />
    </div>
  );
}
