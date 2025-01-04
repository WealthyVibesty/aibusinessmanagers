import { Card } from "@/components/ui/card";
import { Check, Gift } from "lucide-react";

interface BonusProps {
  index: number;
  title: string;
  value: number;
  description: string;
  features?: string[];
}

export default function BonusCard({ index, title, value, description, features }: BonusProps) {
  return (
    <Card 
      className="p-6 sm:p-8 animate-slideUp hover:shadow-lg transition-shadow"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <Gift className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Bonus #{index + 1}: {title}
          </h3>
          <p className="text-primary font-semibold mb-3 text-base sm:text-lg">
            Value: ${value}
          </p>
          <p className="text-muted-foreground mb-4 text-base">{description}</p>
          {features && (
            <ul className="space-y-3">
              {features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
}