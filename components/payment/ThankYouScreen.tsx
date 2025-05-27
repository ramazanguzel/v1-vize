import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface ThankYouScreenProps {
  orderNumber?: string;
  customerEmail?: string;
}

export default function ThankYouScreen({
  orderNumber = "N/A",
  customerEmail,
}: ThankYouScreenProps) {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-background rounded-lg border p-8 text-center">
          <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full text-primary mb-6">
            <CheckCircle size={32} />
          </div>

          <h1 className="text-3xl font-bold mb-4">
            Thank You for Your Purchase!
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            Your VisaEase subscription has been activated successfully.
          </p>

          <div className="border rounded-lg p-6 bg-muted/20 mb-8">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="font-medium">{orderNumber}</p>
            </div>

            {customerEmail && (
              <div>
                <p className="text-sm text-muted-foreground">
                  Confirmation Email
                </p>
                <p className="font-medium">{customerEmail}</p>
              </div>
            )}
          </div>

          <p className="mb-8">
            We've sent a confirmation email with your receipt and access
            instructions. You can now start your visa application process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/form">Start Your Application</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
