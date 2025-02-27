
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  title: string;
  features: Feature[];
  showSocialProof?: boolean;
}

export default function FeatureList({ title, features, showSocialProof = true }: FeatureListProps) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">{title}</h2>
        
        {showSocialProof && (
          <div className="mb-10">
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-center mb-4">
                <div className="flex mb-2 md:mb-0 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-center md:text-left md:ml-3 text-gray-700 font-medium">
                  4.9 out of 5 stars from 200+ customer reviews
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-primary text-xl font-bold">2,000+</p>
                  <p className="text-gray-600 text-sm">Clients</p>
                </div>
                <div>
                  <p className="text-primary text-xl font-bold">98%</p>
                  <p className="text-gray-600 text-sm">Satisfaction</p>
                </div>
                <div>
                  <p className="text-primary text-xl font-bold">40%</p>
                  <p className="text-gray-600 text-sm">Cost Reduction</p>
                </div>
                <div>
                  <p className="text-primary text-xl font-bold">24/7</p>
                  <p className="text-gray-600 text-sm">Support</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
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
        
        {/* Social Proof Testimonial */}
        {showSocialProof && (
          <div className="mt-12 mb-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-start">
              <img 
                src="/lovable-uploads/d10dd79d-414a-4e5e-bfc7-7ff92e56f12f.png" 
                alt="Client" 
                className="w-16 h-16 rounded-full object-cover mr-4" 
              />
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-3">
                  "This solution has completely transformed how we operate. Our team is more productive, 
                  our customers are happier, and our costs are down significantly."
                </p>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-gray-600">Marketing Director, GrowthTech Solutions</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-center">
          <Button 
            size={isMobile ? "default" : "lg"}
            onClick={() => navigate("/sales")}
            className={isMobile ? "text-base px-4" : "text-lg px-8"}
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
