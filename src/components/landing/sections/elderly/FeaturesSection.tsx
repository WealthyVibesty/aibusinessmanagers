import { Card } from "@/components/ui/card";
import { 
  Mic, 
  Bell, 
  Clock, 
  Shield,
  Phone,
  MessageSquare
} from "lucide-react";

const features = [
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: "Voice-Activated Assistance",
    description: "Natural language interactions for seniors to request help, information, or emergency services"
  },
  {
    icon: <Bell className="h-8 w-8 text-primary" />,
    title: "Smart Reminders",
    description: "AI-powered medication and appointment reminders with voice confirmation"
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "24/7 Availability",
    description: "Round-the-clock voice support for seniors and caregivers"
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Emergency Response",
    description: "Voice-activated emergency alerts with instant caregiver notification"
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: "Family Connection",
    description: "Easy voice commands to connect with family members and caregivers"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Multilingual Support",
    description: "Voice assistance in multiple languages for diverse care environments"
  }
];

export default function ElderlyFeaturesSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Voice AI Solutions for Elder Care
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}