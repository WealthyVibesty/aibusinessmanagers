import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import CheckoutFlow from "@/components/checkout/CheckoutFlow";
import ProtectedRoute from "@/components/ProtectedRoute";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Courses from "@/pages/Courses";
import CourseDetails from "@/pages/CourseDetails";
import CreateCourse from "@/pages/CreateCourse";
import Forum from "@/pages/Forum";
import ForumCategory from "@/pages/ForumCategory";
import ForumTopic from "@/pages/ForumTopic";
import NewTopic from "@/pages/NewTopic";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/checkout" element={<CheckoutFlow />} />
            
            {/* Course Routes */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/courses/new" element={<CreateCourse />} />
            
            {/* Forum Routes */}
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/category/:categoryId" element={<ForumCategory />} />
            <Route path="/forum/topic/:topicId" element={<ForumTopic />} />
            <Route path="/forum/new-topic" element={<NewTopic />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;