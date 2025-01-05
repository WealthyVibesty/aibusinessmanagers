import { Card } from "@/components/ui/card";
import { Puzzle, Settings, LineChart } from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      icon: <Puzzle className="h-8 w-8 text-primary" />,
      title: "Seamless Integration",
      description: "Our AI voice agents integrate effortlessly with your existing practice management software."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Customizable Workflows",
      description: "Tailor the AI to match your practice's unique needs and protocols."
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Real-Time Analytics",
      description: "Track performance, patient interactions, and outcomes with detailed reports."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}