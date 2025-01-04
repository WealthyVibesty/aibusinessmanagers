import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

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
      className="p-4 sm:p-6 animate-slideUp bg-background"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <h3 className="text-base sm:text-lg font-semibold mb-2">
        Bonus #{index + 1}: {title}
      </h3>
      <p className="text-primary font-semibold mb-2 text-sm sm:text-base">
        Value: ${value}
      </p>
      <p className="text-muted-foreground mb-3 text-sm sm:text-base">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, j) => (
            <li key={j} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}