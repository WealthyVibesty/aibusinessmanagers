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
      className="p-3 sm:p-4 animate-slideUp hover:shadow-lg transition-shadow w-full overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-2 sm:gap-3">
        <Gift className="h-4 w-4 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
        <div className="space-y-1 sm:space-y-2 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold break-words">
            Bonus #{index + 1}: {title}
          </h3>
          <p className="text-primary font-semibold text-xs sm:text-sm">
            Value: ${value}
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm break-words">{description}</p>
          {features && (
            <ul className="space-y-1 sm:space-y-2 mt-1 sm:mt-2">
              {features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm break-words">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
}