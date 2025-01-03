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
            {/* Public routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected routes */}
            <Route element={<AuthProvider><ProtectedRoute>Dashboard</ProtectedRoute></AuthProvider>}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            
            {/* Forum routes */}
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/category/:categoryId" element={<ForumCategory />} />
            <Route path="/forum/topic/:topicId" element={<ForumTopic />} />
            <Route path="/forum/new-topic" element={<NewTopic />} />
            
            {/* Catch-all route redirects to Landing */}
            <Route path="*" element={<Landing />} />
          </Routes>
          <Toaster />
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;