import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CheckoutProductProps {
  title: string;
  description: string;
  features: string[];
  price: string;
}

export function CheckoutProduct({ title, description, features, price }: CheckoutProductProps) {
  return (
    <Card className="p-6 space-y-6 animate-fadeIn">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
        
        <div className="space-y-2">
          <h3 className="font-semibold">What's Included:</h3>
          <ul className="space-y-2">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <p className="text-2xl font-bold text-primary">{price}</p>
        </div>
      </div>
    </Card>
  );
}