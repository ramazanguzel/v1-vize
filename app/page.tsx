import MarketingLayout from "@/components/marketing/MarketingLayout";
import Hero from "@/components/marketing/Hero";
import Features from "@/components/marketing/Features";
import Pricing from "@/components/marketing/Pricing";
import FAQ from "@/components/marketing/FAQ";
import Testimonials from "@/components/marketing/Testimonials";

export default function Home() {
  return (
    <MarketingLayout>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
    </MarketingLayout>
  );
}
