import { Check } from "lucide-react";
import CheckoutButton from "./CheckoutButton";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  productId: string;
  variantId: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular,
  productId,
  variantId,
}: PricingCardProps) {
  return (
    <div
      className={`border rounded-lg overflow-hidden ${
        popular ? "ring-2 ring-primary shadow-lg" : "bg-background"
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
          <CheckoutButton
            productId={productId}
            variantId={variantId}
            buttonText="Get Started"
            variant={popular ? "default" : "outline"}
            fullWidth
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
