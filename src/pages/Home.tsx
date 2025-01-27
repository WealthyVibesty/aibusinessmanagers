import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-center">Welcome to Our AI Solutions</h1>
      <p className="text-lg text-center mt-4">Transform your business with our innovative AI-driven solutions.</p>
      <Button 
        onClick={() => navigate("/solutions")}
        className="text-lg px-8 py-6 h-auto rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all group"
      >
        Get Started Now
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}
