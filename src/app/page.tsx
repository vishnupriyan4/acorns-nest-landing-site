import { AiSection } from "@/components/ai-section";
import { AppStores } from "@/components/app-stores";
import { CapabilityMarquee } from "@/components/capability-marquee";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { InteractiveDemo } from "@/components/interactive-demo";
import { Roles } from "@/components/roles";
import { StorySections } from "@/components/story-sections";
import { HomepageSchema } from "@/components/structured-data";
import { resolveAllShots } from "@/lib/screenshots";

export default function HomePage() {
  const shots = resolveAllShots();

  return (
    <main id="top">
      <HomepageSchema />
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
      <FaqSection />
      <AppStores />
    </main>
  );
}
