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

  return (
    <>
      <SEO 
        title="Healthcare AI Platform Dashboard | Medical Voice Agents"
        description="Access your healthcare AI voice agent dashboard. Manage courses, enrollments, and streamline patient communication with our intelligent platform."
        path="/"
      />
      
      <div className="container py-8 sm:py-12 px-4 space-y-8 sm:space-y-12 animate-fadeIn">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text">
              Welcome to the Course Platform
            </h1>
            <p className="text-muted-foreground">
              Explore our courses and start learning today
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleSignOut} 
            className="w-full sm:w-auto hover-scale group"
          >
            <LogOut className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            Sign Out
          </Button>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <Card className="glass-card p-6 sm:p-8 hover-scale group">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold gradient-text">
                  Browse Courses
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Explore our collection of courses and start learning today.
                </p>
              </div>
              <Button 
                onClick={() => navigate("/courses")} 
                className="w-full sm:w-auto group-hover:shadow-lg transition-shadow"
              >
                View Courses
              </Button>
            </div>
          </Card>
          
          <Card className="glass-card p-6 sm:p-8 hover-scale group">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold gradient-text">
                  My Enrollments
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Access your enrolled courses and continue learning.
                </p>
              </div>
              <Button 
                onClick={() => navigate("/enrollments")} 
                className="w-full sm:w-auto group-hover:shadow-lg transition-shadow"
              >
                View Enrollments
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
