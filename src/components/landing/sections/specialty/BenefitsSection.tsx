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
    <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
              <Check className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-gray-700">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}