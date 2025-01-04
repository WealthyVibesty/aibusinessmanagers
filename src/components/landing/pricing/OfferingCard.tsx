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
      className="group border-2 border-primary/20 bg-gradient-to-br from-white to-primary/5 animate-slideUp hover:shadow-lg transition-all duration-300 w-full overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6 sm:p-8">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-primary font-bold text-lg sm:text-xl bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <h3 className="text-lg sm:text-xl font-bold leading-tight break-words group-hover:text-primary transition-colors">
                {title}
              </h3>
            </div>
            <p className="text-primary font-semibold text-base sm:text-lg mb-4">
              Value: ${value.toLocaleString()}
            </p>
          </div>
          <ul className="space-y-3">
            {features.map((feature, j) => (
              <li key={j} className="flex items-start gap-3 group/item">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                <span className="text-base sm:text-lg leading-relaxed break-words">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}