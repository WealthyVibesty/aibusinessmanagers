import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/");
      }
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl mb-8">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to Course Platform</h1>
          <p className="text-xl text-muted-foreground">Your gateway to knowledge and professional growth</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <BookOpen className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Quality Courses</h3>
            <p className="text-muted-foreground">Access a wide range of professional courses from expert instructors.</p>
          </div>
          
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <GraduationCap className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Learn at Your Pace</h3>
            <p className="text-muted-foreground">Study on your schedule with lifetime access to course materials.</p>
          </div>
          
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <Users className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <p className="text-muted-foreground">Join a community of learners and share your journey.</p>
          </div>
        </div>
      </div>

      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Sign in to your account</h2>
          <p className="text-muted-foreground">Start learning today</p>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: 'hsl(var(--primary))',
                  brandAccent: 'hsl(var(--primary))',
                }
              }
            },
            className: {
              container: 'w-full',
              button: 'w-full',
              anchor: 'text-primary hover:text-primary/80',
            }
          }}
          providers={[]}
          redirectTo={window.location.origin}
        />
      </Card>
    </div>
  );
}