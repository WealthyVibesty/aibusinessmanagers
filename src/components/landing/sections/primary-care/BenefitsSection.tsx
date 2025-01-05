import { Card } from "@/components/ui/card";
import { Clock, Users, Sun, BarChart } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Reduce Call Wait Times",
      description: "Handle routine inquiries instantly, cutting wait times and improving patient satisfaction."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Free Up Your Staff",
      description: "Let your team focus on complex cases, patient interactions, and practice growth."
    },
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      title: "24/7 Availability",
      description: "Provide assistance around the clock, even after office hours."
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Enhance Staff Productivity",
      description: "Streamline operations and reduce administrative burdens."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Why Your Practice Needs AI Voice Agents
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}