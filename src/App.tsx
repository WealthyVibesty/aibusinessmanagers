import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/components/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "@/lib/react-query";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import Forum from "@/pages/Forum";
import ForumCategory from "@/pages/ForumCategory";
import ForumTopic from "@/pages/ForumTopic";
import NewTopic from "@/pages/NewTopic";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider>
          <Routes>
            {/* Public routes outside AuthProvider */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected routes wrapped in AuthProvider */}
            <Route path="/*" element={
              <AuthProvider>
                <Routes>
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/forum"
                    element={
                      <ProtectedRoute>
                        <Forum />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/forum/category/:categoryId"
                    element={
                      <ProtectedRoute>
                        <ForumCategory />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/forum/topic/:topicId"
                    element={
                      <ProtectedRoute>
                        <ForumTopic />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/forum/new-topic"
                    element={
                      <ProtectedRoute>
                        <NewTopic />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </AuthProvider>
            } />
          </Routes>
          <Toaster />
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;