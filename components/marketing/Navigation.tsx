"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          VisaEase
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/features" className="hover:text-primary">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-primary">
            Pricing
          </Link>
          <Link href="/faq" className="hover:text-primary">
            FAQ
          </Link>
        </nav>
        <Button>
          <Link href="/form">Get Started</Link>
        </Button>
      </div>
    </header>
  );
}
