import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Benefit {
  text: string;
}

interface BenefitsSectionProps {
  title: string;
  benefits: Benefit[];
}

export default function BenefitsSection({ title, benefits }: BenefitsSectionProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <p className="text-lg">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}