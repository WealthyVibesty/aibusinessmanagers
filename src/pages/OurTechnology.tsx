import { Card } from "@/components/ui/card";
import { Code2, Shield, Cpu, Network } from "lucide-react";

export default function OurTechnology() {
  const technologies = [
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Advanced Machine Learning",
      description: "State-of-the-art algorithms that continuously learn and improve from healthcare data."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure Infrastructure",
      description: "HIPAA-compliant systems ensuring the highest level of data protection and privacy."
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      title: "Scalable Architecture",
      description: "Cloud-native platform designed to handle millions of healthcare interactions."
    },
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "API Integration",
      description: "Seamless integration with existing healthcare systems and workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Technology</h1>
          <p className="text-xl text-muted-foreground">
            Built on cutting-edge AI and machine learning, our platform is designed to revolutionize healthcare delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}