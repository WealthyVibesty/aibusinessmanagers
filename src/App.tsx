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
import { useToast } from "@/components/ui/use-toast";
import SalesPage from "@/pages/SalesPage";
import CoreOffer from "@/pages/CoreOffer";
import AIBusinessSolutions from "@/pages/AIBusinessSolutions";
import AffiliateProgram from "@/pages/AffiliateProgram";
import FooterSection from "@/components/landing/sections/FooterSection";
import HealthcareWorkflowAutomation from "@/pages/HealthcareWorkflowAutomation";

function App() {
  const { toast } = useToast();

  useEffect(() => {
    // Add close button to ElevenLabs widget with improved animation
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
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
      
      // Show widget by default with animation
      widget.classList.remove('hidden');
      widget.classList.add('animate-scale');
      console.log('Showing AI assistant by default with animation');
    }

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, [toast]);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
          <Header />
          <div className="flex-grow page-content">
            <Routes>
              <Route path="/" element={
                <div className="animate-fadeIn">
                  <AIBusinessSolutions />
                </div>
              } />
              <Route path="/voice-agents-marketplace" element={
                <div className="animate-slideUp">
                  <VoiceAgentsMarketplace />
                </div>
              } />
              <Route path="/checkout" element={
                <div className="animate-scale">
                  <CheckoutFlow />
                </div>
              } />
              <Route path="/login" element={
                <div className="animate-fadeIn">
                  <Login />
                </div>
              } />
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
              
              <Route path="/dashboard" element={<ProtectedRoute />}>
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

              <Route path="/sales" element={<Navigate to="/checkout" replace />} />
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