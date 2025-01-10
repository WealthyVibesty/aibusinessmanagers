import { Card } from "@/components/ui/card";
import { Target, Users, Heart, Globe } from "lucide-react";

export default function Mission() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible in healthcare through AI."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Accessibility",
      description: "Making quality healthcare available to everyone, everywhere."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Compassion",
      description: "Putting people first in everything we do."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Impact",
      description: "Creating meaningful change in global healthcare."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Mission</h1>
          <p className="text-xl text-muted-foreground mb-8">
            To transform healthcare through artificial intelligence, making it more accessible, efficient, and effective for everyone.
          </p>
          <p className="text-lg text-muted-foreground">
            We envision a future where advanced AI technology enhances every aspect of healthcare delivery, 
            improving patient outcomes and making quality care accessible to all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}