import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface UpsellItemProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  priceId: string;
  isSelected: boolean;
  onToggle: (priceId: string) => void;
  animationDelay?: string;
  disabled?: boolean;
}

export function UpsellItem({ 
  title, 
  description, 
  features, 
  price, 
  priceId, 
  isSelected, 
  onToggle,
  animationDelay,
  disabled = false
}: UpsellItemProps) {
  return (
    <Card 
      className="p-6 border-primary/20 animate-slideUp" 
      style={{ animationDelay }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-4 flex-1">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <ul className="space-y-2">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-xl font-bold text-primary">{price}</p>
        </div>

        <Button
          variant={isSelected ? "default" : "outline"}
          onClick={() => onToggle(priceId)}
          disabled={disabled}
          className="min-w-[120px]"
        >
          {isSelected ? 'Added' : 'Add This'}
        </Button>
      </div>
    </Card>
  );
}