import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  productId: string;
  variantId: string;
}

function PricingPlan({
  name,
  price,
  description,
  features,
  popular,
  productId,
  variantId,
}: PricingPlanProps) {
  return (
    <div
      className={`border rounded-lg overflow-hidden ${
        popular
          ? "ring-2 ring-primary shadow-lg scale-105 z-10"
          : "bg-background"
      }`}
    >
      {popular && (
        <div className="bg-primary py-1 text-primary-foreground text-center text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold">{price}</span>
          <span className="ml-1 text-muted-foreground">EUR</span>
        </div>
        <p className="mt-2 text-muted-foreground">{description}</p>

        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div
                className={`flex-shrink-0 h-5 w-5 ${
                  feature.included ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {feature.included ? (
                  <Check size={20} />
                ) : (
                  <span className="text-lg">-</span>
                )}
              </div>
              <span
                className={`ml-3 ${
                  feature.included ? "" : "text-muted-foreground"
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link href={`/checkout?product=${productId}&variant=${variantId}`}>
            <Button
              variant={popular ? "default" : "outline"}
              className="w-full"
              size="lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "29.99",
      description: "Essential visa application assistance",
      popular: false,
      productId: "prod_basic",
      variantId: "var_basic",
      features: [
        { text: "Smart form auto-filling", included: true },
        { text: "Basic document checklist", included: true },
        { text: "Standard application review", included: true },
        { text: "Email support", included: true },
        { text: "Priority processing", included: false },
        { text: "Premium document templates", included: false },
        { text: "Application tracking", included: false },
        { text: "Personalized consultation", included: false },
      ],
    },
    {
      name: "Premium",
      price: "49.99",
      description: "Complete application package with priority service",
      popular: true,
      productId: "prod_premium",
      variantId: "var_premium",
      features: [
        { text: "Smart form auto-filling", included: true },
        { text: "Comprehensive document checklist", included: true },
        { text: "Detailed application review", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "Priority processing", included: true },
        { text: "Premium document templates", included: true },
        { text: "Application tracking", included: true },
        { text: "Personalized consultation", included: false },
      ],
    },
    {
      name: "Enterprise",
      price: "99.99",
      description: "Full-service solution with personalized assistance",
      popular: false,
      productId: "prod_enterprise",
      variantId: "var_enterprise",
      features: [
        { text: "Smart form auto-filling", included: true },
        { text: "Comprehensive document checklist", included: true },
        { text: "Expert application review", included: true },
        { text: "Priority email, chat & phone support", included: true },
        { text: "VIP processing", included: true },
        { text: "Premium document templates", included: true },
        { text: "Real-time application tracking", included: true },
        { text: "Personalized consultation", included: true },
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core
            features to simplify your visa application process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              productId={plan.productId}
              variantId={plan.variantId}
            />
          ))}
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p>
            All prices are in Euro (EUR). VAT may apply depending on your
            country of residence.
          </p>
        </div>
      </div>
    </section>
  );
}
