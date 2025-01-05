import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ElderlyCTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="p-8 bg-primary text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Senior Care?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join healthcare providers who are revolutionizing elderly care with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate("/checkout")}
            >
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-primary hover:bg-white/90"
            >
              Schedule Demo
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}