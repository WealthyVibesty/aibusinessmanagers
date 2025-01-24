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
        {
          category: "PRODUCTS",
          items: [
            { label: "AI Voice Agents", path: "/voice-agents", description: "Automated voice assistance for your business" },
            { label: "Call Routing", path: "/solutions/call-routing", description: "Intelligent call distribution" },
            { label: "Task Automation", path: "/solutions/task-automation", description: "Streamline repetitive tasks" }
          ]
        },
        {
          category: "SOLUTIONS",
          items: [
            { label: "HIPAA Compliant", path: "/solutions/hipaa-compliant", description: "Secure healthcare communication" },
            { label: "Actionable Insights", path: "/solutions/actionable-insights", description: "Data-driven decision making" },
            { label: "Cost-Effective Call Centers", path: "/solutions/cost-effective-call-centers", description: "Optimize call center operations" }
          ]
        },
        {
          category: "FEATURES",
          items: [
            { label: "AI Website Development", path: "/solutions/ai-website-development", description: "Smart web solutions" },
            { label: "AI-Powered Chatbots", path: "/solutions/ai-chatbots", description: "24/7 customer support" },
            { label: "SMS Marketing", path: "/solutions/sms-marketing", description: "Engage customers via text" }
          ]
        }
      ]
    },
    {
      label: "Industries",
      submenu: [
        { 
          label: "Healthcare",
          path: "/industries/healthcare",
          description: "AI-powered healthcare solutions"
        },
        {
          label: "Restaurants",
          path: "/industries/restaurants",
          description: "Streamline restaurant operations"
        },
        {
          label: "Hospitality",
          path: "/industries/hospitality",
          description: "Enhance guest experiences"
        },
        {
          label: "Transportation",
          path: "/industries/transportation",
          description: "Optimize fleet management"
        },
        {
          label: "Finance",
          path: "/industries/finance",
          description: "Automate financial processes"
        }
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
                  onMouseEnter={() => setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {item.label === "Solutions" ? (
                  <div 
                    className={`absolute left-0 mt-2 w-[800px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-x-1/4`}
                    onMouseEnter={() => setActiveSubmenu(item.label)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <div className="p-6 grid grid-cols-3 gap-8">
                      {item.submenu.map((category: any, categoryIndex: number) => (
                        <div key={categoryIndex} className="space-y-4">
                          <h3 className="text-xs font-semibold text-gray-400 tracking-wider">
                            {category.category}
                          </h3>
                          <div className="space-y-4">
                            {category.items.map((subItem: any, subIndex: number) => (
                              <button
                                key={subIndex}
                                className="block w-full text-left space-y-1 hover:bg-gray-50 p-2 rounded-md transition-colors"
                                onClick={() => handleNavigation(subItem.path)}
                              >
                                <div className="text-sm font-medium text-gray-900">{subItem.label}</div>
                                <p className="text-xs text-gray-500">{subItem.description}</p>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1" role="menu">
                      {item.submenu.map((subItem: any, subIndex: number) => (
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
                )}
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
                  {activeSubmenu === item.label && item.label === "Solutions" ? (
                    <div className="bg-gray-50 px-4 py-2">
                      {item.submenu.map((category: any, categoryIndex: number) => (
                        <div key={categoryIndex} className="mb-4">
                          <h3 className="text-xs font-semibold text-gray-400 tracking-wider px-4 py-2">
                            {category.category}
                          </h3>
                          {category.items.map((subItem: any, subIndex: number) => (
                            <button
                              key={subIndex}
                              className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100 rounded"
                              onClick={() => handleNavigation(subItem.path)}
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : activeSubmenu === item.label && (
                    <div className="bg-gray-50 px-4 py-2">
                      {item.submenu.map((subItem: any, subIndex: number) => (
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