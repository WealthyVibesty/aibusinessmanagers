import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Demo from "./pages/Demo";
import SalesPage from "./pages/SalesPage";
import Booking from "./pages/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
