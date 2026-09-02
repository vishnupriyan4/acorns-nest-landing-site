import { AiSection } from "@/components/ai-section";
import { CapabilityMarquee } from "@/components/capability-marquee";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { InteractiveDemo } from "@/components/interactive-demo";
import { Roles } from "@/components/roles";
import { StorySections } from "@/components/story-sections";
import { resolveAllShots } from "@/lib/screenshots";

export default function HomePage() {
  const shots = resolveAllShots();

  return (
    <main id="top">
      <Hero
        classroomsSrc={shots.classrooms}
        parentHomeSrc={shots["parent-home"]}
      />
      <CapabilityMarquee />
      <StorySections shots={shots} />
      <InteractiveDemo />
      <Roles />
      <HowItWorks />
      <AiSection />
      <CtaSection />
    </main>
  );
}
