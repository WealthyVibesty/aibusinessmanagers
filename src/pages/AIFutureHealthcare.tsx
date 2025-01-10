import { Card } from "@/components/ui/card";
import { Sparkles, Stethoscope, Users, Clock } from "lucide-react";

export default function AIFutureHealthcare() {
  const predictions = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Personalized Medicine",
      description: "AI will enable truly personalized treatment plans based on individual genetic profiles and health histories."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "Preventive Care",
      description: "Advanced predictive analytics will help identify health risks before they become serious issues."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Accessible Healthcare",
      description: "AI-powered solutions will make quality healthcare accessible to underserved populations."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Real-time Monitoring",
      description: "Continuous health monitoring and instant feedback will revolutionize patient care."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">AI's Future in Healthcare</h1>
          <p className="text-xl text-muted-foreground">
            Exploring the transformative potential of artificial intelligence in shaping the future of healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {predictions.map((prediction, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">{prediction.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{prediction.title}</h3>
              <p className="text-muted-foreground">{prediction.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}