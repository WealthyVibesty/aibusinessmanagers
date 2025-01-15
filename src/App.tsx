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
import SalesPage from "@/pages/SalesPage";
import CoreOffer from "@/pages/CoreOffer";
import AIBusinessSolutions from "@/pages/AIBusinessSolutions";
import AffiliateProgram from "@/pages/AffiliateProgram";
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
      
      // Show widget by default
      widget.classList.remove('hidden');
      console.log('Showing AI assistant by default');
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
              <Route path="/" element={<AIBusinessSolutions />} />
              <Route path="/voice-agents-marketplace" element={<VoiceAgentsMarketplace />} />
              <Route path="/checkout" element={<CheckoutFlow />} />
              <Route path="/login" element={<Login />} />
              <Route path="/core-offer" element={<CoreOffer />} />
              <Route path="/affiliate-program" element={<AffiliateProgram />} />
              
              <Route path="/dashboard" element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
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