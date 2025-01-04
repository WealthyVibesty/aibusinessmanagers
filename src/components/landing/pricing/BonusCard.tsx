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
      className="group p-6 sm:p-8 animate-slideUp hover:shadow-lg transition-all duration-300 w-full overflow-hidden bg-gradient-to-br from-white to-primary/5"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-4">
        <Gift className="h-6 w-6 sm:h-7 sm:w-7 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
        <div className="space-y-4 min-w-0">
          <div>
            <h3 className="text-lg sm:text-xl font-bold leading-tight mb-2 break-words group-hover:text-primary transition-colors">
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
                <li key={j} className="flex items-start gap-3 group/item">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-base sm:text-lg leading-relaxed break-words">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
}