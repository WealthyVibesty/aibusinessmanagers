import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import AutomationLanding from "@/components/landing/AutomationLanding";
import Courses from "@/pages/Courses";
import CourseDetails from "@/pages/CourseDetails";
import CreateCourse from "@/pages/CreateCourse";
import Enrollments from "@/pages/Enrollments";
import Forum from "@/pages/Forum";
import ForumCategory from "@/pages/ForumCategory";
import ForumTopic from "@/pages/ForumTopic";
import NewTopic from "@/pages/NewTopic";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Dashboard from "@/pages/Dashboard";
import Index from "@/pages/Index";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/automation" element={<AutomationLanding />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/index" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/courses/create" element={<CreateCourse />} />
          <Route path="/enrollments" element={<Enrollments />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/category/:id" element={<ForumCategory />} />
          <Route path="/forum/topic/:id" element={<ForumTopic />} />
          <Route path="/forum/new-topic" element={<NewTopic />} />
        </Route>
      </Routes>
    </Router>
  );
}