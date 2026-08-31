import { AiSection } from "@/components/ai-section";
import { CapabilityMarquee } from "@/components/capability-marquee";
import { CtaSection } from "@/components/cta-section";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { InteractiveDemo } from "@/components/interactive-demo";
import { ProductShowcase } from "@/components/product-showcase";
import { Roles } from "@/components/roles";

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <CapabilityMarquee />
      <ProductShowcase />
      <Features />
      <InteractiveDemo />
      <Roles />
      <HowItWorks />
      <AiSection />
      <Gallery />
      <CtaSection />
    </main>
  );
}
