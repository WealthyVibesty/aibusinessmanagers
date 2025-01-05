import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, Clock, Shield } from "lucide-react";

export default function PrimaryCareFeaturesSection() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Smart Scheduling",
      description: "Automate appointment booking and send intelligent reminders to reduce no-shows."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "24/7 Patient Support",
      description: "Answer common questions and provide care instructions anytime."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Efficient Follow-ups",
      description: "Automate routine check-ins and medication reminders."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "HIPAA Compliant",
      description: "Secure, compliant communication for peace of mind."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features That Transform Primary Care
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}