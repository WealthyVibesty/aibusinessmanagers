import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SurgicalCTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Ready to Transform Your Surgical Practice?
        </h2>
        <p className="text-xl text-gray-600">
          Join leading surgical practices in delivering exceptional care with AI support
        </p>
        <div className="pt-4">
          <Button 
            size="lg"
            onClick={() => navigate("/checkout")}
            className="text-lg px-8 py-6 h-auto"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}