import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Problem } from "@/components/sections/problem";
import { Transformation } from "@/components/sections/transformation";
import { ProductPreview } from "@/components/sections/product-preview";
import { Benefits } from "@/components/sections/benefits";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { HowItWorks } from "@/components/sections/how-it-works";
import { JourneyTimeline } from "@/components/sections/journey-timeline";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Waitlist } from "@/components/sections/waitlist";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 shadow-elevated transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <Problem />
        <Transformation />
        <ProductPreview />
        <Benefits />
        <WhoItsFor />
        <HowItWorks />
        <JourneyTimeline />
        <Testimonials />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
