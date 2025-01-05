import { Shield } from "lucide-react";

const benefits = [
  "Enhanced safety and security for seniors",
  "Peace of mind for family members",
  "Early detection of health issues",
  "Improved quality of life",
  "Reduced caregiver burden",
  "Cost-effective care management"
];

export default function ElderlyBenefitsSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Platform?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Shield className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}