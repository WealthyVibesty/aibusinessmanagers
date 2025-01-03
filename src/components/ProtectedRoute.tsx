import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("ProtectedRoute - Auth state:", { session, loading, path: location.pathname });
    
    // Only redirect if we're on a protected route and not loading
    if (!loading && !session) {
      console.log("ProtectedRoute - Redirecting to login");
      navigate("/login", { 
        state: { from: location.pathname }
      });
    }
  }, [session, loading, navigate, location]);

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Only render children if we have a session
  return session ? <>{children}</> : null;
}