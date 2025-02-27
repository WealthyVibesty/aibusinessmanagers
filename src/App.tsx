
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "@/components/landing/Header";
import ScrollToTop from "@/components/ScrollToTop";
import VoiceAgentsMarketplace from "@/pages/VoiceAgentsMarketplace";
import AIVoiceAgents from "@/pages/solutions/AIVoiceAgents";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import CheckoutFlow from "@/components/checkout/CheckoutFlow";
import ProtectedRoute from "@/components/ProtectedRoute";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import SalesPage from "@/pages/SalesPage";
import CoreOffer from "@/pages/CoreOffer";
import AIBusinessSolutions from "@/pages/AIBusinessSolutions";
import AffiliateProgram from "@/pages/AffiliateProgram";
import FooterSection from "@/components/landing/sections/FooterSection";
import HealthcareWorkflowAutomation from "@/pages/HealthcareWorkflowAutomation";
import AboutUs from "@/pages/AboutUs";
import WhyChooseUs from "@/pages/WhyChooseUs";
import Home from "@/pages/Home";
import Demo from "@/pages/Demo";
// Import solutions
import AIChatbots from "@/pages/solutions/AIChatbots";
import AIWebsiteDevelopment from "@/pages/solutions/AIWebsiteDevelopment";
import InstagramAutomation from "@/pages/solutions/InstagramAutomation";
import SMSMarketing from "@/pages/solutions/SMSMarketing";
import HIPAACompliant from "@/pages/solutions/HIPAACompliant";
import CRMIntegration from "@/pages/solutions/CRMIntegration";
import CallRouting from "@/pages/solutions/CallRouting";
import MultilingualSupport from "@/pages/solutions/MultilingualSupport";
import PilotPrograms from "@/pages/solutions/PilotPrograms";
import ProactiveEngagement from "@/pages/solutions/ProactiveEngagement";
import TaskAutomation from "@/pages/solutions/TaskAutomation";
import ActionableInsights from "@/pages/solutions/ActionableInsights";
import CostEffectiveCallCenters from "@/pages/solutions/CostEffectiveCallCenters";
import Pricing from "@/pages/Pricing";
import PropertyManagement from "@/pages/PropertyManagement";
// Import industry pages
import Healthcare from "@/pages/industries/Healthcare";
import Restaurants from "@/pages/industries/Restaurants";
import Hospitality from "@/pages/industries/Hospitality";
import Transportation from "@/pages/industries/Transportation";
import Finance from "@/pages/industries/Finance";

import AIBusinessManagers from "@/pages/AIBusinessManagers";
import BusinessAutomation from "@/pages/BusinessAutomation";
import AIEbookSales from "@/pages/AIEbookSales";
import AIBusinessPartner from "@/pages/AIBusinessPartner";

function App() {
  const { toast } = useToast();

  useEffect(() => {
    // Add close button to ElevenLabs widget with improved animation
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      // Hide widget by default
      widget.classList.add('hidden');
      
      const closeBtn = document.createElement('button');
      closeBtn.className = 'elevenlabs-close-btn animate-fadeIn';
      closeBtn.onclick = () => {
        widget.classList.add('animate-fadeOut');
        setTimeout(() => {
          widget.classList.add('hidden');
          toast({
            title: "AI Assistant Hidden",
            description: "Click the chat button to bring it back anytime!",
            duration: 3000,
          });
        }, 300);
      };
      widget.appendChild(closeBtn);
      console.log('ElevenLabs widget initialized and hidden by default');
    }

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, [toast]);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
          <Header />
          <div className="flex-grow page-content">
            <Routes>
              {/* Add the new AI Business Partner route */}
              <Route path="/ai-business-partner" element={
                <div className="animate-fadeIn">
                  <AIBusinessPartner />
                </div>
              } />

              {/* Add the new BusinessAutomation route */}
              <Route path="/business-automation" element={
                <div className="animate-fadeIn">
                  <BusinessAutomation />
                </div>
              } />
              
              {/* Add the new AI Ebook Sales page */}
              <Route path="/ai-ebook" element={
                <div className="animate-fadeIn">
                  <AIEbookSales />
                </div>
              } />
              
              <Route path="/" element={
                <div className="animate-fadeIn">
                  <AIBusinessManagers />
                </div>
              } />
              
              {/* Main landing page content moved to /solutions */}
              <Route path="/solutions" element={
                <div className="animate-fadeIn">
                  <Home />
                </div>
              } />
              
              {/* Demo route */}
              <Route path="/demo" element={
                <div className="animate-fadeIn">
                  <Demo />
                </div>
              } />

              {/* User dashboard (protected) */}
              <Route path="/user-dashboard" element={<ProtectedRoute />}>
                <Route index element={
                  <div className="animate-fadeIn">
                    <Dashboard />
                  </div>
                } />
              </Route>

              {/* Add Property Management Route */}
              <Route path="/property-management" element={
                <div className="animate-fadeIn">
                  <PropertyManagement />
                </div>
              } />
              
              <Route path="/pricing" element={
                <div className="animate-fadeIn">
                  <Pricing />
                </div>
              } />
              
              {/* Main Routes */}
              <Route path="/ai-business-solutions" element={
                <div className="animate-fadeIn">
                  <AIBusinessSolutions />
                </div>
              } />
              
              {/* Marketplace and Core Routes */}
              <Route path="/voice-agents-marketplace" element={
                <div className="animate-slideUp">
                  <VoiceAgentsMarketplace />
                </div>
              } />
              <Route path="/voice-agents" element={
                <div className="animate-slideUp">
                  <AIVoiceAgents />
                </div>
              } />
              
              {/* Solution Routes */}
              <Route path="/solutions/ai-chatbots" element={
                <div className="animate-slideUp">
                  <AIChatbots />
                </div>
              } />
              <Route path="/solutions/ai-website-development" element={
                <div className="animate-slideUp">
                  <AIWebsiteDevelopment />
                </div>
              } />
              <Route path="/solutions/instagram-automation" element={
                <div className="animate-slideUp">
                  <InstagramAutomation />
                </div>
              } />
              <Route path="/solutions/sms-marketing" element={
                <div className="animate-slideUp">
                  <SMSMarketing />
                </div>
              } />
              <Route path="/solutions/hipaa-compliant" element={
                <div className="animate-slideUp">
                  <HIPAACompliant />
                </div>
              } />
              <Route path="/solutions/crm-integration" element={
                <div className="animate-slideUp">
                  <CRMIntegration />
                </div>
              } />
              <Route path="/solutions/call-routing" element={
                <div className="animate-slideUp">
                  <CallRouting />
                </div>
              } />
              <Route path="/solutions/multilingual-support" element={
                <div className="animate-slideUp">
                  <MultilingualSupport />
                </div>
              } />
              <Route path="/solutions/pilot-programs" element={
                <div className="animate-slideUp">
                  <PilotPrograms />
                </div>
              } />
              <Route path="/solutions/proactive-engagement" element={
                <div className="animate-slideUp">
                  <ProactiveEngagement />
                </div>
              } />
              <Route path="/solutions/task-automation" element={
                <div className="animate-slideUp">
                  <TaskAutomation />
                </div>
              } />
              <Route path="/solutions/actionable-insights" element={
                <div className="animate-slideUp">
                  <ActionableInsights />
                </div>
              } />
              <Route path="/solutions/cost-effective-call-centers" element={
                <div className="animate-slideUp">
                  <CostEffectiveCallCenters />
                </div>
              } />

              {/* Industry Routes */}
              <Route path="/industries/healthcare" element={
                <div className="animate-slideUp">
                  <Healthcare />
                </div>
              } />
              <Route path="/industries/restaurants" element={
                <div className="animate-slideUp">
                  <Restaurants />
                </div>
              } />
              <Route path="/industries/hospitality" element={
                <div className="animate-slideUp">
                  <Hospitality />
                </div>
              } />
              <Route path="/industries/transportation" element={
                <div className="animate-slideUp">
                  <Transportation />
                </div>
              } />
              <Route path="/industries/finance" element={
                <div className="animate-slideUp">
                  <Finance />
                </div>
              } />

              {/* Information Routes */}
              <Route path="/about" element={
                <div className="animate-slideUp">
                  <AboutUs />
                </div>
              } />
              <Route path="/why-us" element={
                <div className="animate-slideUp">
                  <WhyChooseUs />
                </div>
              } />
              
              {/* Checkout and Sales Routes */}
              <Route path="/checkout" element={
                <div className="animate-scale">
                  <CheckoutFlow />
                </div>
              } />
              <Route path="/sales" element={<Navigate to="/checkout" replace />} />
              
              {/* Authentication Routes */}
              <Route path="/login" element={
                <div className="animate-fadeIn">
                  <Login />
                </div>
              } />
              
              {/* Product Routes */}
              <Route path="/core-offer" element={
                <div className="animate-slideUp">
                  <CoreOffer />
                </div>
              } />
              <Route path="/healthcare-workflow-automation" element={
                <div className="animate-slideUp">
                  <HealthcareWorkflowAutomation />
                </div>
              } />
              
              {/* Protected Routes */}
              <Route path="/user-dashboard" element={<ProtectedRoute />}>
                <Route index element={
                  <div className="animate-fadeIn">
                    <Dashboard />
                  </div>
                } />
              </Route>
              <Route path="/affiliate-program" element={<ProtectedRoute />}>
                <Route index element={
                  <div className="animate-slideUp">
                    <AffiliateProgram />
                  </div>
                } />
              </Route>

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <FooterSection />
        </div>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
