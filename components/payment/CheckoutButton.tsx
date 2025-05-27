"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createCheckout } from "@lemonsqueezy/lemonsqueezy.js";

interface CheckoutButtonProps {
  productId: string;
  variantId: string;
  buttonText: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  fullWidth?: boolean;
}

export default function CheckoutButton({
  productId,
  variantId,
  buttonText,
  variant = "default",
  size = "default",
  fullWidth = false,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const checkout = await createCheckout({
        storeId: process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STORE_ID || "",
        variantId,
        checkoutOptions: {
          embed: true,
          media: true,
          logo: true,
          quantity: false,
          discount: true,
          redirectTo: `${window.location.origin}/thank-you`,
        },
      });

      checkout.open();
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={loading}
      variant={variant}
      size={size}
      className={fullWidth ? "w-full" : ""}
    >
      {loading ? "Loading..." : buttonText}
    </Button>
  );
}
