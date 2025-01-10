import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, Briefcase, GraduationCap, Heart } from "lucide-react";

export default function Careers() {
  const departments = [
    {
      title: "Engineering",
      positions: ["Senior AI Engineer", "Full Stack Developer", "Machine Learning Specialist"]
    },
    {
      title: "Healthcare",
      positions: ["Clinical Data Analyst", "Healthcare Integration Specialist", "Medical Content Writer"]
    },
    {
      title: "Operations",
      positions: ["Product Manager", "Customer Success Manager", "Technical Project Manager"]
    }
  ];

  const benefits = [
    { icon: <Heart />, title: "Comprehensive Healthcare" },
    { icon: <GraduationCap />, title: "Learning & Development" },
    { icon: <Briefcase />, title: "Flexible Work Options" },
    { icon: <BadgeCheck />, title: "Competitive Compensation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground">
            Help us transform healthcare through artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{dept.title}</h3>
              <ul className="space-y-2">
                {dept.positions.map((position, posIndex) => (
                  <li key={posIndex} className="flex items-center">
                    <Button variant="link" className="h-auto p-0">
                      {position}
                    </Button>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Benefits & Perks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-4 text-center">
                <div className="flex justify-center mb-2">{benefit.icon}</div>
                <p className="font-medium">{benefit.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}