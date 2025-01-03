import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ 
  session: null, 
  user: null,
  loading: true 
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log("AuthProvider - Current path:", location.pathname);
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("AuthProvider - Initial session:", session ? "exists" : "none");
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("AuthProvider - Auth state changed:", _event);
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    session,
    user: session?.user ?? null,
    loading
  };

  console.log("AuthProvider - Rendering with state:", value);
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}