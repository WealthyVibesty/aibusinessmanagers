import { Card } from "@/components/ui/card";
import { 
  HeartPulse, 
  Brain, 
  Bell, 
  Clock, 
  Activity,
  Stethoscope 
} from "lucide-react";

const features = [
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: "Health Monitoring",
    description: "24/7 vital signs tracking and health status updates"
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "Cognitive Support",
    description: "AI-powered activities for mental wellness"
  },
  {
    icon: <Bell className="h-8 w-8 text-primary" />,
    title: "Smart Alerts",
    description: "Immediate notifications for caregivers"
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Medication Management",
    description: "Automated reminders and tracking"
  },
  {
    icon: <Activity className="h-8 w-8 text-primary" />,
    title: "Activity Monitoring",
    description: "Real-time tracking of daily activities"
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    title: "Remote Care",
    description: "Virtual health check-ins and consultations"
  }
];

export default function ElderlyFeaturesSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Comprehensive Senior Care Solutions
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