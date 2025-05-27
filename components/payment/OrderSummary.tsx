import { formatCurrency } from "@/lib/utils";

interface OrderItem {
  name: string;
  price: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
  subtotal: number;
  discount?: number;
  tax?: number;
  total: number;
  currency?: string;
}

export default function OrderSummary({
  items,
  subtotal,
  discount = 0,
  tax = 0,
  total,
  currency = "EUR",
}: OrderSummaryProps) {
  return (
    <div className="border rounded-lg p-6">
      <h3 className="text-lg font-medium mb-4">Order Summary</h3>

      <div className="space-y-3 mb-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>{formatCurrency(item.price, currency)}</span>
          </div>
        ))}
      </div>

      <div className="border-t pt-3 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatCurrency(subtotal, currency)}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Discount</span>
            <span className="text-green-600">
              -{formatCurrency(discount, currency)}
            </span>
          </div>
        )}

        {tax > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span>{formatCurrency(tax, currency)}</span>
          </div>
        )}

        <div className="flex justify-between font-medium pt-2 border-t">
          <span>Total</span>
          <span>{formatCurrency(total, currency)}</span>
        </div>
      </div>
    </div>
  );
}
