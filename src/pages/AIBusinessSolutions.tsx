import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AISolutionFinder from "@/components/solutions/AISolutionFinder";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SEO from "@/components/SEO";

export default function AIBusinessSolutions() {
  const [isSolutionFinderOpen, setIsSolutionFinderOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEO 
        title="AI Business Solutions - Find Your Perfect AI Solution"
        description="Discover the perfect AI solution for your business needs. Get personalized recommendations based on your industry and requirements."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Maximize Revenue and Efficiency with AI Business Managers for Mid-Sized and Large Companies
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-slideUp">
            Transform your business operations with AI-powered solutions tailored to your specific needs.
            Get personalized recommendations in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slideUp">
            <Button 
              size="lg"
              variant="outline"
              onClick={() => setIsSolutionFinderOpen(true)}
              className="text-lg px-10 py-7 text-xl animate-pulse hover:animate-none"
            >
              Find Your AI Solution
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            
            <Button 
              size="lg"
              onClick={() => window.location.href = '/checkout'}
              className="text-lg px-10 py-7 text-xl"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Finder Dialog */}
      <Dialog open={isSolutionFinderOpen} onOpenChange={setIsSolutionFinderOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <AISolutionFinder onClose={() => setIsSolutionFinderOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}