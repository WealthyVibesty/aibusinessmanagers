import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import AutomationLanding from "@/components/landing/AutomationLanding";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/automation" element={<AutomationLanding />} />
      </Routes>
    </Router>
  );
}
