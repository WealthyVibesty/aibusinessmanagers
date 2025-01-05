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
import VoiceAgentsMarketplace from "@/pages/VoiceAgentsMarketplace";
import TelemedicineLanding from "@/pages/TelemedicineLanding";
import ElderlyCare from "@/pages/ElderlyCare";
import MentalHealthLanding from "@/pages/MentalHealthLanding";
import ChronicDiseaseLanding from "@/pages/ChronicDiseaseLanding";

function App() {
  useEffect(() => {
    // Add close button to ElevenLabs widget
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'elevenlabs-close-btn';
      closeBtn.onclick = () => {
        widget.classList.add('hidden');
      };
      widget.appendChild(closeBtn);
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/voice-agents" element={<VoiceAgentsMarketplace />} />
          <Route path="/telemedicine" element={<TelemedicineLanding />} />
          <Route path="/mental-health" element={<MentalHealthLanding />} />
          <Route path="/elderly-care" element={<ElderlyCare />} />
          <Route path="/chronic-disease" element={<ChronicDiseaseLanding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckoutFlow />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            
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