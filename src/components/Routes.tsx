import { Routes as RouterRoutes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import CheckoutFlow from "@/components/checkout/CheckoutFlow";
import ProtectedRoute from "@/components/ProtectedRoute";
import ActionableInsights from "@/pages/solutions/ActionableInsights";
import CostEffectiveCallCenters from "@/pages/solutions/CostEffectiveCallCenters";
import HIPAACompliant from "@/pages/solutions/HIPAACompliant";
import ProactiveEngagement from "@/pages/solutions/ProactiveEngagement";
import HospitalsHealthSystems from "@/pages/industries/HospitalsHealthSystems";
import ClinicsPrivatePractices from "@/pages/industries/ClinicsPrivatePractices";
import TelehealthProviders from "@/pages/industries/TelehealthProviders";
import SpecialtyCare from "@/pages/industries/SpecialtyCare";
import Pharmaceuticals from "@/pages/industries/Pharmaceuticals";
import Header from "@/components/landing/Header";
import FooterSection from "@/components/landing/sections/FooterSection";

export default function Routes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <RouterRoutes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckoutFlow />} />
          
          {/* Solutions Routes */}
          <Route path="/solutions/actionable-insights" element={<ActionableInsights />} />
          <Route path="/solutions/cost-effective-call-centers" element={<CostEffectiveCallCenters />} />
          <Route path="/solutions/hipaa-compliant" element={<HIPAACompliant />} />
          <Route path="/solutions/proactive-engagement" element={<ProactiveEngagement />} />
          
          {/* Industry Routes */}
          <Route path="/industries/hospitals-health-systems" element={<HospitalsHealthSystems />} />
          <Route path="/industries/clinics-private-practices" element={<ClinicsPrivatePractices />} />
          <Route path="/industries/telehealth-providers" element={<TelehealthProviders />} />
          <Route path="/industries/specialty-care" element={<SpecialtyCare />} />
          <Route path="/industries/pharmaceuticals" element={<Pharmaceuticals />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </RouterRoutes>
      </div>
      <FooterSection />
    </div>
  );
}