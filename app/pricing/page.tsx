import MarketingLayout from "@/components/marketing/MarketingLayout";
import Pricing from "@/components/marketing/Pricing";
import FAQ from "@/components/marketing/FAQ";

export const metadata = {
  title: "Pricing - VisaEase",
  description:
    "Choose the plan that fits your needs. All plans include our core features to simplify your visa application process.",
};

export default function PricingPage() {
  return (
    <MarketingLayout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core
            features to simplify your visa application process.
          </p>
        </div>
      </div>
      <Pricing />
      <FAQ />
    </MarketingLayout>
  );
}
