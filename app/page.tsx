import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HardwareSection from "@/components/sections/HardwareSection";
import InvestorsSection from "@/components/sections/InvestorsSection";
import JoinSection from "@/components/sections/JoinSection";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <VisionSection />
      <ProjectsSection />
      {/* <HardwareSection /> */}
      <InvestorsSection />
      <JoinSection />
    </>
  );
}
