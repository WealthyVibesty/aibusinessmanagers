import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface OfferingProps {
  index: number;
  title: string;
  value: number;
  features: string[];
}

export default function OfferingCard({ index, title, value, features }: OfferingProps) {
  return (
    <Card 
      className="border-2 border-primary/20 bg-primary/5 animate-slideUp w-full overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-3 sm:p-4">
        <div className="flex flex-col gap-2 sm:gap-3">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 break-words">
              {index + 1}. {title}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-2 sm:mb-3">
              Value: ${value.toLocaleString()}
            </p>
          </div>
          <ul className="space-y-2">
            {features.map((feature, j) => (
              <li key={j} className="flex items-start gap-2">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base break-words">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}