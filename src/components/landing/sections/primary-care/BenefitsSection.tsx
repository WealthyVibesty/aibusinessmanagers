import { Check } from "lucide-react";

export default function PrimaryCareBenefitsSection() {
  const benefits = [
    "Reduce administrative workload by 40%",
    "Improve patient satisfaction scores",
    "Decrease no-show rates significantly",
    "Enable 24/7 patient support",
    "Streamline appointment scheduling",
    "Enhance care coordination"
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits for Your Practice
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
              <Check className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}