import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="p-8 bg-white shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join the Future of Primary Care Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let outdated systems hold your practice back. Embrace the power of AI voice agents 
            and take your patient care to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate("/checkout")}
              className="text-lg px-8"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Your patients deserve better. Your staff deserves better. Your practice deserves better.
          </p>
        </Card>
      </div>
    </section>
  );
}