"use client";

import { setupLemonSqueezy } from "@lemonsqueezy/lemonsqueezy.js";

export function initLemonSqueezy() {
  setupLemonSqueezy({
    apiKey: process.env.NEXT_PUBLIC_LEMON_SQUEEZY_API_KEY || "",
    storeId: process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STORE_ID || "",
    options: {
      variant: {
        websiteUrl: typeof window !== "undefined" ? window.location.origin : "",
      },
      checkout: {
        embed: true,
        media: true,
        logo: true,
        dark: false,
        discount: true,
      },
    },
  });
}
