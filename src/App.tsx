import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "@/components/landing/Header";
import ScrollToTop from "@/components/ScrollToTop";
import VoiceAgentsMarketplace from "@/pages/VoiceAgentsMarketplace";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import CheckoutFlow from "@/components/checkout/CheckoutFlow";
import ProtectedRoute from "@/components/ProtectedRoute";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

// Solutions
import AIVoiceAgents from "@/pages/solutions/AIVoiceAgents";
import CallRouting from "@/pages/solutions/CallRouting";
import TaskAutomation from "@/pages/solutions/TaskAutomation";
import ActionableInsights from "@/pages/solutions/ActionableInsights";
import CostEffectiveCallCenters from "@/pages/solutions/CostEffectiveCallCenters";
import HIPAACompliant from "@/pages/solutions/HIPAACompliant";
import ProactiveEngagement from "@/pages/solutions/ProactiveEngagement";

// Industries
import HospitalsHealthSystems from "@/pages/industries/HospitalsHealthSystems";
import ClinicsPrivatePractices from "@/pages/industries/ClinicsPrivatePractices";
import TelehealthProviders from "@/pages/industries/TelehealthProviders";
import SpecialtyCare from "@/pages/industries/SpecialtyCare";
import Pharmaceuticals from "@/pages/industries/Pharmaceuticals";

// Resources
import CaseStudies from "@/pages/CaseStudies";
import Whitepapers from "@/pages/Whitepapers";
import Blog from "@/pages/Blog";
import FAQs from "@/pages/FAQs";

// Company
import AboutUs from "@/pages/AboutUs";
import WhyChooseUs from "@/pages/WhyChooseUs";
import OurTeam from "@/pages/OurTeam";
import Contact from "@/pages/Contact";

import FooterSection from "@/components/landing/sections/FooterSection";

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

      // Auto-hide widget after 7 seconds if call not started
      const hideTimeout = setTimeout(() => {
        const isCallStarted = widget.getAttribute('data-call-started') === 'true';
        if (!isCallStarted) {
          console.log('Auto-hiding AI assistant after 7 seconds of inactivity');
          widget.classList.add('hidden');
        }
      }, 7000);

      // Cleanup timeout on unmount
      return () => clearTimeout(hideTimeout);
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
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<CheckoutFlow />} />
              
              {/* Solutions Routes */}
              <Route path="/voice-agents" element={<AIVoiceAgents />} />
              <Route path="/call-routing" element={<CallRouting />} />
              <Route path="/task-automation" element={<TaskAutomation />} />
              <Route path="/actionable-insights" element={<ActionableInsights />} />
              <Route path="/cost-effective-call-centers" element={<CostEffectiveCallCenters />} />
              <Route path="/hipaa-compliant" element={<HIPAACompliant />} />
              <Route path="/proactive-engagement" element={<ProactiveEngagement />} />
              
              {/* Industry Routes */}
              <Route path="/industries/hospitals-health-systems" element={<HospitalsHealthSystems />} />
              <Route path="/industries/clinics-private-practices" element={<ClinicsPrivatePractices />} />
              <Route path="/industries/telehealth-providers" element={<TelehealthProviders />} />
              <Route path="/industries/specialty-care" element={<SpecialtyCare />} />
              <Route path="/industries/pharmaceuticals" element={<Pharmaceuticals />} />
              
              {/* Resources Routes */}
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/whitepapers" element={<Whitepapers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faqs" element={<FAQs />} />
              
              {/* Company Routes */}
              <Route path="/about" element={<AboutUs />} />
              <Route path="/why-us" element={<WhyChooseUs />} />
              <Route path="/team" element={<OurTeam />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
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
