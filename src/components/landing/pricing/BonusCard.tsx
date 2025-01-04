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
      className="p-4 animate-slideUp hover:shadow-lg transition-shadow"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
        <Gift className="h-6 w-6 text-primary flex-shrink-0" />
        <div className="space-y-2">
          <h3 className="text-base font-semibold">
            Bonus #{index + 1}: {title}
          </h3>
          <p className="text-primary font-semibold text-sm">
            Value: ${value}
          </p>
          <p className="text-muted-foreground text-sm">{description}</p>
          {features && (
            <ul className="space-y-2 mt-2">
              {features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
}