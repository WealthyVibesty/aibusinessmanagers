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
      className="p-4 sm:p-6 animate-slideUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            {index + 1}. {title}
          </h3>
          <p className="text-muted-foreground mb-3">
            Value: ${value.toLocaleString()}
          </p>
        </div>
        <ul className="space-y-2">
          {features.map((feature, j) => (
            <li key={j} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}