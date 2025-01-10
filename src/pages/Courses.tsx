import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section with Video */}
      <section className="container max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-slideUp">
            Transform Your Healthcare Practice with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slideUp">
            Learn how our AI-powered platform can revolutionize your healthcare marketing 
            and patient communication strategy.
          </p>
        </div>

        {/* Video Card */}
        <Card className="relative aspect-video mb-12 overflow-hidden group animate-slideUp">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 text-white border-white hover:text-white hover:border-white hover:bg-white/20"
            >
              <Play className="w-6 h-6" />
              Watch Overview
            </Button>
          </div>
          <img 
            src="/placeholder.svg" 
            alt="Platform Overview" 
            className="w-full h-full object-cover"
          />
        </Card>

        {/* CTA Section */}
        <div className="text-center space-y-6 animate-slideUp">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create your AI Marketing Profile and discover how we can help optimize 
            your healthcare practice's digital presence.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/checkout")}
            className="text-lg px-8 py-6 rounded-full group"
          >
            Get Your AI Marketing Profile
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}