import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, LogOut } from "lucide-react";
import SEO from "@/components/SEO";

export default function Index() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const handleGetStarted = () => {
    navigate("/solutions");
  };

  return (
    <>
      <SEO 
        title="Healthcare AI Platform Dashboard | Medical Voice Agents"
        description="Access your healthcare AI voice agent dashboard. Manage courses, enrollments, and streamline patient communication with our intelligent platform."
        path="/"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50">
        <div className="container py-12 sm:py-16 px-4 space-y-10 sm:space-y-14 animate-fadeIn">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative">
            <div className="space-y-3 w-full sm:w-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-blue-600 text-transparent bg-clip-text">
                Welcome to the Course Platform
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl font-medium">
                Explore our courses and start learning today
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleSignOut} 
              className="w-full sm:w-auto hover:bg-primary/5 transition-all duration-300 group"
            >
              <LogOut className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              Sign Out
            </Button>
          </div>
          
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
            <Card className="group overflow-hidden relative p-6 sm:p-8 md:p-10 hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white via-white to-blue-50/50 border border-blue-100/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-3 text-center">
                  <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                    Browse Courses
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Explore our collection of courses and start learning today.
                  </p>
                </div>
                <Button 
                  onClick={() => navigate("/courses")} 
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity group-hover:shadow-lg"
                >
                  View Courses
                </Button>
              </div>
            </Card>
            
            <Card className="group overflow-hidden relative p-6 sm:p-8 md:p-10 hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white via-white to-purple-50/50 border border-purple-100/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <div className="space-y-3 text-center">
                  <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-accent to-pink-600 text-transparent bg-clip-text">
                    My Enrollments
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Access your enrolled courses and continue learning.
                  </p>
                </div>
                <Button 
                  onClick={() => navigate("/enrollments")} 
                  className="w-full bg-gradient-to-r from-accent to-pink-600 hover:opacity-90 transition-opacity group-hover:shadow-lg"
                >
                  View Enrollments
                </Button>
              </div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              onClick={() => navigate("/forum")}
              variant="outline"
              className="w-full sm:w-auto hover:bg-primary/5 transition-all duration-300"
            >
              Visit Forum
            </Button>
            <Button 
              onClick={() => navigate("/contact")}
              variant="outline"
              className="w-full sm:w-auto hover:bg-primary/5 transition-all duration-300"
            >
              Contact Support
            </Button>
          </div>

          {/* Transform Your Business Section */}
          <div className="text-center space-y-8 py-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get a live demo of our AI Business Manager today and see the difference it can make for your operations.
            </p>
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="text-lg px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}