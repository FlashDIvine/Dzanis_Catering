import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <Gallery />
        <ServiceAreas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
