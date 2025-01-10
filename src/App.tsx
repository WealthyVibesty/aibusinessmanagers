import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "@/components/landing/Header";
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
import FooterSection from "@/components/landing/sections/FooterSection";
import VoiceAgentsMarketplace from "@/pages/VoiceAgentsMarketplace";
import TelemedicineLanding from "@/pages/TelemedicineLanding";
import ElderlyCare from "@/pages/ElderlyCare";
import MentalHealthLanding from "@/pages/MentalHealthLanding";
import ChronicDiseaseLanding from "@/pages/ChronicDiseaseLanding";
import PharmaceuticalsLanding from "@/pages/PharmaceuticalsLanding";
import HealthInsuranceLanding from "@/pages/HealthInsuranceLanding";
import HospitalOperationsLanding from "@/pages/HospitalOperationsLanding";
import PublicHealthLanding from "@/pages/PublicHealthLanding";
import RehabilitationLanding from "@/pages/RehabilitationLanding";
import MedicalResearchLanding from "@/pages/MedicalResearchLanding";
import HomeHealthcareLanding from "@/pages/HomeHealthcareLanding";
import PediatricsLanding from "@/pages/PediatricsLanding";
import DentalCareLanding from "@/pages/DentalCareLanding";
import NutritionWellnessLanding from "@/pages/NutritionWellnessLanding";
import EmergencyServicesLanding from "@/pages/EmergencyServicesLanding";
import PrimaryCare from "@/pages/PrimaryCare";
import DermatologyLanding from "@/pages/DermatologyLanding";
import SurgicalPracticesLanding from "@/pages/SurgicalPracticesLanding";
import DiagnosticImagingLanding from "@/pages/DiagnosticImagingLanding";
import CardiologyLanding from "@/pages/CardiologyLanding";
import ObGynLanding from "@/pages/ObGynLanding";
import ContentLibrary from "@/pages/ContentLibrary";
import SupportCenter from "@/pages/SupportCenter";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import SiteMap from "@/pages/SiteMap";
import WhyHealthAI from "@/pages/WhyHealthAI";
import OurTechnology from "@/pages/OurTechnology";
import AIFutureHealthcare from "@/pages/AIFutureHealthcare";
import Careers from "@/pages/Careers";
import Mission from "@/pages/Mission";
import Partners from "@/pages/Partners";
import Press from "@/pages/Press";
import PatientSupport from "@/pages/PatientSupport";
import VoiceAgents from "@/pages/solutions/VoiceAgents";
import CallRouting from "@/pages/solutions/CallRouting";
import TaskAutomation from "@/pages/solutions/TaskAutomation";
import BookDemo from "@/pages/BookDemo";

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
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow page-content">
            <Routes>
              <Route path="/" element={<VoiceAgentsMarketplace />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/voice-agents" element={<VoiceAgents />} />
              <Route path="/call-routing" element={<CallRouting />} />
              <Route path="/task-automation" element={<TaskAutomation />} />
              <Route path="/patient-support" element={<PatientSupport />} />
              <Route path="/telemedicine" element={<TelemedicineLanding />} />
              <Route path="/dermatology" element={<DermatologyLanding />} />
              <Route path="/cardiology" element={<CardiologyLanding />} />
              <Route path="/obgyn" element={<ObGynLanding />} />
              <Route path="/mental-health" element={<MentalHealthLanding />} />
              <Route path="/elderly-care" element={<ElderlyCare />} />
              <Route path="/primary-care" element={<PrimaryCare />} />
              <Route path="/chronic-disease" element={<ChronicDiseaseLanding />} />
              <Route path="/pharmaceuticals" element={<PharmaceuticalsLanding />} />
              <Route path="/health-insurance" element={<HealthInsuranceLanding />} />
              <Route path="/hospital-operations" element={<HospitalOperationsLanding />} />
              <Route path="/public-health" element={<PublicHealthLanding />} />
              <Route path="/rehabilitation" element={<RehabilitationLanding />} />
              <Route path="/medical-research" element={<MedicalResearchLanding />} />
              <Route path="/home-healthcare" element={<HomeHealthcareLanding />} />
              <Route path="/pediatrics" element={<PediatricsLanding />} />
              <Route path="/dental-care" element={<DentalCareLanding />} />
              <Route path="/nutrition-wellness" element={<NutritionWellnessLanding />} />
              <Route path="/emergency-services" element={<EmergencyServicesLanding />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<CheckoutFlow />} />
              
              {/* Public Forum Routes */}
              <Route path="/forum" element={<Forum />} />
              <Route path="/forum/category/:categoryId" element={<ForumCategory />} />
              <Route path="/forum/topic/:topicId" element={<ForumTopic />} />
              
              {/* Public Course Routes */}
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDetails />} />
              
              {/* Company Pages */}
              <Route path="/why-healthai" element={<WhyHealthAI />} />
              <Route path="/technology" element={<OurTechnology />} />
              <Route path="/ai-future" element={<AIFutureHealthcare />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/press" element={<Press />} />
              
              {/* Resource Pages */}
              <Route path="/content-library" element={<ContentLibrary />} />
              <Route path="/support" element={<SupportCenter />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/site-map" element={<SiteMap />} />
              
              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/courses/new" element={<CreateCourse />} />
                <Route path="/forum/new-topic" element={<NewTopic />} />
              </Route>
              <Route path="/surgical-practices" element={<SurgicalPracticesLanding />} />
              <Route path="/diagnostic-imaging" element={<DiagnosticImagingLanding />} />
              <Route path="/book-demo" element={<BookDemo />} />
            </Routes>
          </div>
          <FooterSection />
        </div>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
