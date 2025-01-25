import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  title: string;
  features: Feature[];
}

export default function FeatureList({ title, features }: FeatureListProps) {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg"
            onClick={() => navigate("/sales")}
            className="text-lg px-8"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}