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
      className="p-4 sm:p-6 animate-slideUp hover:shadow-lg transition-all w-full overflow-hidden bg-white"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-3 sm:gap-4">
        <Gift className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
        <div className="space-y-3 min-w-0">
          <div>
            <h3 className="text-lg sm:text-xl font-bold leading-tight mb-2 break-words">
              Bonus #{index + 1}: {title}
            </h3>
            <p className="text-primary font-semibold text-base sm:text-lg">
              Value: ${value}
            </p>
          </div>
          
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed break-words">
            {description}
          </p>
          
          {features && (
            <ul className="space-y-3 pt-2">
              {features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base sm:text-lg leading-relaxed break-words">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
}