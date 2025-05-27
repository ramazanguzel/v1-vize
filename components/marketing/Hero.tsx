import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Simplify Your Schengen Visa Application
            </h1>
            <p className="text-xl text-muted-foreground">
              VisaEase automates your Schengen visa application process, saving
              you time, reducing errors, and increasing your approval chances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/form">
                <Button size="lg">Start Your Application</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[500px] bg-muted rounded-lg overflow-hidden">
            {/* Placeholder for hero image - will be replaced with actual image */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Visa Application Form Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
