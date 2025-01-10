import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Building2, Stethoscope, BookOpen, Users, ArrowRight } from "lucide-react";
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
        { label: "Actionable Insights", path: "/actionable-insights" },
        { label: "Cost-Effective Call Centers", path: "/cost-effective-call-centers" },
        { label: "HIPAA-Compliant Solutions", path: "/hipaa-compliant" },
        { label: "Proactive Patient Engagement", path: "/proactive-engagement" },
      ]
    },
    {
      label: "Industries",
      icon: <Stethoscope className="w-4 h-4" />,
      submenu: [
        { label: "Hospitals & Health Systems", path: "/industries/hospitals-health-systems" },
        { label: "Clinics & Private Practices", path: "/industries/clinics-private-practices" },
        { label: "Telehealth Providers", path: "/industries/telehealth-providers" },
        { label: "Specialty Care Providers", path: "/industries/specialty-care" },
        { label: "Pharmaceuticals", path: "/industries/pharmaceuticals" },
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

  const handleGetDemo = () => {
    navigate("/checkout");
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.remove('hidden');
      console.log('Opening AI assistant for demo');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ab5a6229-a3bb-476d-9eb2-5452bf6f7a52.png" 
                alt="AI Business Managers" 
                className="h-10 w-auto"
              />
              <span className="font-semibold text-xl text-gray-900">AI Business Managers</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group py-2 text-sm font-medium"
                  onClick={() => navigate(item.submenu[0].path)}
                >
                  {item.icon}
                  {item.label}
                  <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {item.submenu.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => navigate(subItem.path)}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={handleGetDemo}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md flex items-center gap-2 transition-all"
            >
              Pay Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

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

        {/* Mobile Navigation */}
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
                        <button
                          key={subIndex}
                          className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:text-primary"
                          onClick={() => {
                            setIsMenuOpen(false);
                            navigate(subItem.path);
                          }}
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
                  onClick={handleGetDemo}
                  className="w-full justify-center"
                >
                  Pay Now
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
