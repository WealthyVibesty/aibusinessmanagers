import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
    navigate(path);
  };

  const menuItems = [
    {
      label: "Solutions",
      submenu: [
        { label: "AI Voice Agents", path: "/voice-agents" },
        { label: "Call Routing", path: "/call-routing" },
        { label: "Task Automation", path: "/task-automation" },
        { label: "Actionable Insights", path: "/actionable-insights" },
        { label: "Cost-Effective Call Centers", path: "/cost-effective-call-centers" },
        { label: "HIPAA Compliant", path: "/hipaa-compliant" },
        { label: "Proactive Engagement", path: "/proactive-engagement" }
      ]
    },
    {
      label: "Healthcare",
      submenu: [
        { label: "Telemedicine", path: "/telemedicine" },
        { label: "Mental Health", path: "/mental-health" },
        { label: "Primary Care", path: "/primary-care" },
        { label: "Elderly Care", path: "/elderly-care" },
        { label: "Dental Care", path: "/dental-care" },
        { label: "Diagnostic Imaging", path: "/diagnostic-imaging" },
        { label: "Emergency Services", path: "/emergency-services" },
        { label: "Home Healthcare", path: "/home-healthcare" },
        { label: "Hospital Operations", path: "/hospital-operations" },
        { label: "Nutrition & Wellness", path: "/nutrition-wellness" },
        { label: "OB/GYN", path: "/obgyn" },
        { label: "Oncology", path: "/oncology" },
        { label: "Pediatrics", path: "/pediatrics" },
        { label: "Public Health", path: "/public-health" },
        { label: "Rehabilitation", path: "/rehabilitation" },
        { label: "Surgical Practices", path: "/surgical-practices" }
      ]
    },
    {
      label: "Resources",
      submenu: [
        { label: "Case Studies", path: "/case-studies" },
        { label: "Whitepapers", path: "/whitepapers" },
        { label: "Blog", path: "/blog" },
        { label: "FAQs", path: "/faqs" }
      ]
    },
    {
      label: "Company",
      submenu: [
        { label: "About Us", path: "/about" },
        { label: "Why Choose Us", path: "/why-us" },
        { label: "Our Team", path: "/team" },
        { label: "Contact", path: "/contact" }
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="/lovable-uploads/97d27ffa-5e3f-47b1-b550-d47dc525b2cf.png" 
              alt="AI Business Managers" 
              className="h-10 w-auto"
            />
            <span className="font-semibold text-lg hidden sm:inline">AI Business Managers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1 py-2 text-sm font-medium"
                  onClick={() => handleNavigation(item.submenu[0].path)}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1" role="menu">
                    {item.submenu.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => handleNavigation(subItem.path)}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => navigate("/checkout")}
              className="hidden sm:flex"
            >
              Get Started
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden fixed inset-x-0 top-16 bg-white border-t shadow-lg animate-slideDown max-h-[80vh] overflow-y-auto">
            <div className="divide-y">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full p-4"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      activeSubmenu === item.label ? "rotate-180" : ""
                    }`} />
                  </button>
                  {activeSubmenu === item.label && (
                    <div className="bg-gray-50 px-4 py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100 rounded"
                          onClick={() => handleNavigation(subItem.path)}
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-4">
                <Button 
                  onClick={() => {
                    navigate("/checkout");
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
