import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export default function Index() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="container py-4 sm:py-8 px-4 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Welcome to the Course Platform</h1>
        <Button variant="outline" onClick={handleSignOut} className="w-full sm:w-auto">
          Sign Out
        </Button>
      </div>
      
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div className="p-4 sm:p-6 border rounded-lg bg-card">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Browse Courses</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            Explore our collection of courses and start learning today.
          </p>
          <Button onClick={() => navigate("/courses")} className="w-full sm:w-auto">View Courses</Button>
        </div>
        
        <div className="p-4 sm:p-6 border rounded-lg bg-card">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">My Enrollments</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            Access your enrolled courses and continue learning.
          </p>
          <Button onClick={() => navigate("/enrollments")} className="w-full sm:w-auto">View Enrollments</Button>
        </div>
      </div>
    </div>
  );
}