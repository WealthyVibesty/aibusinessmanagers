import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Building2, Stethoscope, BookOpen, Users, MessageSquare, ArrowRight } from "lucide-react";
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

  const menuItems = [
    {
      label: "Solutions",
      icon: <Building2 className="w-4 h-4" />,
      submenu: [
        { label: "AI-Powered Voice Agents", path: "/voice-agents" },
        { label: "Intelligent Call Routing", path: "/call-routing" },
        { label: "Task Automation", path: "/task-automation" },
        { label: "Actionable Insights", path: "/insights" },
        { label: "Cost-Effective Call Centers", path: "/call-centers" },
        { label: "HIPAA-Compliant Solutions", path: "/hipaa-solutions" },
        { label: "Proactive Patient Engagement", path: "/patient-engagement" },
      ]
    },
    {
      label: "Industries",
      icon: <Stethoscope className="w-4 h-4" />,
      submenu: [
        { label: "Hospitals & Health Systems", path: "/hospitals" },
        { label: "Clinics & Private Practices", path: "/clinics" },
        { label: "Telehealth Providers", path: "/telemedicine" },
        { label: "Specialty Care Providers", path: "/specialty-care" },
        { label: "Pharmaceuticals", path: "/pharmaceuticals" },
      ]
    },
    {
      label: "Resources",
      icon: <BookOpen className="w-4 h-4" />,
      submenu: [
        { label: "Case Studies", path: "/case-studies" },
        { label: "Whitepapers", path: "/whitepapers" },
        { label: "Blog", path: "/blog" },
        { label: "FAQs", path: "/faqs" },
      ]
    },
    {
      label: "Company",
      icon: <Users className="w-4 h-4" />,
      submenu: [
        { label: "About Us", path: "/about" },
        { label: "Why Choose Us", path: "/why-us" },
        { label: "Our Team", path: "/team" },
        { label: "Contact", path: "/contact" },
      ]
    },
  ];

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/ab5a6229-a3bb-476d-9eb2-5452bf6f7a52.png" 
                alt="AI Business Managers" 
                className="h-12 w-auto"
              />
              <span className="font-semibold text-xl hidden sm:inline">AI Business Managers</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group py-2"
                  aria-expanded={isMenuOpen}
                  aria-haspopup="true"
                >
                  {item.icon}
                  {item.label}
                  <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                        role="menuitem"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Button 
              onClick={() => navigate("/checkout")}
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow ml-4"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Simplified */}
        {isMenuOpen && (
          <nav className="md:hidden fixed inset-x-0 top-20 bg-white border-t border-gray-200 shadow-lg animate-slideDown">
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100">
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="flex items-center justify-between w-full p-4 text-left text-gray-700 hover:bg-gray-50"
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeSubmenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubmenu === item.label && (
                    <div className="bg-gray-50 px-4 py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
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
                  className="w-full shadow-lg"
                  size="lg"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}