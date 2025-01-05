import { Card } from "@/components/ui/card";
import { Calendar, Pill, Stethoscope, Bell } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Appointment Scheduling",
      description: "Let patients book, reschedule, or cancel appointments seamlessly through natural, conversational AI."
    },
    {
      icon: <Pill className="h-8 w-8 text-primary" />,
      title: "Prescription Refill Requests",
      description: "Patients can request refills effortlessly, with all necessary details collected automatically."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      title: "Symptom Triage",
      description: "Guide patients through symptom-checking protocols to determine urgency and ensure proper care."
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Follow-Up Reminders",
      description: "Automate post-visit follow-ups, medication reminders, and preventive care notifications."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          What Can AI Voice Agents Do for Your Practice?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}