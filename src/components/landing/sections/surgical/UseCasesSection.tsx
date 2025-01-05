import { Card } from "@/components/ui/card";
import { Calendar, Bell, MessageSquare, Heart } from "lucide-react";

export default function SurgicalUseCasesSection() {
  const useCases = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Pre-surgery Instructions",
      description: "Automatically deliver detailed preparation guidelines and reminders to patients before procedures."
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Post-op Follow-ups",
      description: "Send timely reminders and check-ins to monitor patient recovery progress."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Procedure FAQs",
      description: "Answer common questions about surgical procedures and recovery expectations 24/7."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Patient Support",
      description: "Provide continuous support and guidance throughout the surgical journey."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          How AI Enhances Surgical Care
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}