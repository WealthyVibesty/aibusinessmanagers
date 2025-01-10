import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/AuthProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Routes from "@/components/Routes";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <ScrollToTop />
          <Routes />
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;