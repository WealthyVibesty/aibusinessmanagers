import { Card } from "@/components/ui/card";
import { Building2, HandshakeIcon, Hospital, Microscope } from "lucide-react";

export default function Partners() {
  const partnerTypes = [
    {
      icon: <Hospital className="w-8 h-8 text-primary" />,
      title: "Healthcare Providers",
      description: "Leading hospitals and clinics implementing our AI solutions."
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Technology Companies",
      description: "Strategic partnerships with innovative tech companies."
    },
    {
      icon: <Microscope className="w-8 h-8 text-primary" />,
      title: "Research Institutions",
      description: "Collaborations with top medical research facilities."
    },
    {
      icon: <HandshakeIcon className="w-8 h-8 text-primary" />,
      title: "Industry Alliances",
      description: "Working together with healthcare industry leaders."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Partners</h1>
          <p className="text-xl text-muted-foreground">
            Collaborating with leading organizations to revolutionize healthcare through AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partnerTypes.map((partner, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">{partner.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{partner.title}</h3>
              <p className="text-muted-foreground">{partner.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}