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
    <div className="container py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome to the Course Platform</h1>
        <Button variant="outline" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 border rounded-lg bg-card">
          <h2 className="text-xl font-semibold mb-4">Browse Courses</h2>
          <p className="text-muted-foreground mb-4">
            Explore our collection of courses and start learning today.
          </p>
          <Button onClick={() => navigate("/courses")}>View Courses</Button>
        </div>
        
        <div className="p-6 border rounded-lg bg-card">
          <h2 className="text-xl font-semibold mb-4">My Enrollments</h2>
          <p className="text-muted-foreground mb-4">
            Access your enrolled courses and continue learning.
          </p>
          <Button onClick={() => navigate("/enrollments")}>View Enrollments</Button>
        </div>
      </div>
    </div>
  );
}