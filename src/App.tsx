import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/landing/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import CheckoutFlow from "@/components/checkout/CheckoutFlow";
import ProtectedRoute from "@/components/ProtectedRoute";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import AIVoiceAgents from "@/pages/solutions/AIVoiceAgents";
import CallRouting from "@/pages/solutions/CallRouting";
import TaskAutomation from "@/pages/solutions/TaskAutomation";
import ActionableInsights from "@/pages/solutions/ActionableInsights";
import CostEffectiveCallCenters from "@/pages/solutions/CostEffectiveCallCenters";
import HIPAACompliant from "@/pages/solutions/HIPAACompliant";
import ProactiveEngagement from "@/pages/solutions/ProactiveEngagement";
import VoiceAgentsMarketplace from "@/pages/VoiceAgentsMarketplace";
import HospitalsHealthSystems from "@/pages/industries/HospitalsHealthSystems";
import ClinicsPrivatePractices from "@/pages/industries/ClinicsPrivatePractices";
import TelehealthProviders from "@/pages/industries/TelehealthProviders";
import SpecialtyCare from "@/pages/industries/SpecialtyCare";
import Pharmaceuticals from "@/pages/industries/Pharmaceuticals";
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
              
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<CheckoutFlow />} />
              
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