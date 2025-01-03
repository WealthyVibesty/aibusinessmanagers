import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogIn, Home } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [view, setView] = useState<'sign_in' | 'sign_up'>('sign_up');

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/");
      }
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  // Get the current URL for redirect
  const redirectTo = `${window.location.origin}/`;
  console.log("Redirect URL:", redirectTo); // Debug log

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 space-y-8 shadow-lg animate-fadeIn">
        <div className="text-center space-y-4">
          <Button 
            variant="ghost" 
            className="absolute top-4 left-4"
            onClick={() => navigate("/")}
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <LogIn className="w-16 h-16 text-primary relative animate-slideUp" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight animate-slideUp [animation-delay:100ms]">
            {view === 'sign_up' ? 'Sign Up' : 'Sign In'}
          </h1>
          <p className="text-muted-foreground text-lg animate-slideUp [animation-delay:200ms]">
            {view === 'sign_up' 
              ? 'Sign up to get started or sign in if you already have an account'
              : 'Welcome back! Please sign in to your account'
            }
          </p>
        </div>

        <div className="animate-slideUp [animation-delay:300ms]">
          <Auth
            supabaseClient={supabase}
            view={view}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'hsl(var(--primary))',
                    brandAccent: 'hsl(var(--primary))',
                    inputBackground: 'transparent',
                    inputText: 'inherit',
                  },
                  space: {
                    inputPadding: '1rem',
                    buttonPadding: '1rem',
                  },
                  borderWidths: {
                    buttonBorderWidth: '1px',
                    inputBorderWidth: '1px',
                  },
                  radii: {
                    borderRadiusButton: '0.5rem',
                    buttonBorderRadius: '0.5rem',
                    inputBorderRadius: '0.5rem',
                  },
                }
              },
              className: {
                container: 'w-full space-y-4',
                button: 'w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors',
                input: 'w-full bg-background border border-input hover:border-primary/50 focus:border-primary transition-colors',
                label: 'text-sm font-medium text-foreground',
                loader: 'animate-spin',
              }
            }}
            providers={[]}
            redirectTo={redirectTo}
          />
        </div>
      </Card>
    </div>
  );
}