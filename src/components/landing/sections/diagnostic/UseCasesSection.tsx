import { Card } from "@/components/ui/card";
import { Calendar, FileText, Clock, MessageSquare } from "lucide-react";

export default function DiagnosticUseCasesSection() {
  const useCases = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Efficient Scheduling",
      description: "Automate imaging appointment bookings and send reminders to reduce no-shows."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Prep Instructions",
      description: "Provide clear preparation guidelines for different imaging procedures."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Results Management",
      description: "Securely deliver and explain imaging results to patients."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Answer common questions about procedures and preparations anytime."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          How AI Voice Agents Transform Diagnostic Centers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, i) => (
            <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
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