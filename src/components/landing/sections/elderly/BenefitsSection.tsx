import { Shield, Check } from "lucide-react";

const benefits = [
  "Reduce caregiver workload with automated voice assistance",
  "Improve medication adherence through voice reminders",
  "Enable instant emergency response via voice commands",
  "Enhance senior independence with voice-controlled support",
  "Provide 24/7 companionship and assistance",
  "Streamline communication between seniors and caregivers"
];

export default function ElderlyBenefitsSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of Voice AI in Elder Care
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Check className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}