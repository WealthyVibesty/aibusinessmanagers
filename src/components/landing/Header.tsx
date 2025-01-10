import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Home, Phone, BookOpen, Users, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
      label: "Home",
      path: "/",
      icon: <Home className="w-4 h-4" />,
    },
    {
      label: "Voice Agents",
      path: "#voice-agents",
      icon: <MessageSquare className="w-4 h-4" />,
      isSection: true,
    },
    {
      label: "Solutions",
      path: "#solutions",
      icon: <BookOpen className="w-4 h-4" />,
      isSection: true,
    },
    {
      label: "Case Studies",
      path: "#case-studies",
      icon: <Users className="w-4 h-4" />,
      isSection: true,
    },
    {
      label: "Contact",
      path: "/contact",
      icon: <Phone className="w-4 h-4" />,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (item: { path: string; isSection?: boolean }) => {
    if (item.isSection) {
      scrollToSection(item.path.substring(1));
    } else {
      navigate(item.path);
      setIsMenuOpen(false);
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
            <Link to="/">
              <img 
                src="/lovable-uploads/ab5a6229-a3bb-476d-9eb2-5452bf6f7a52.png" 
                alt="AI Marketing Profile" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item)}
                className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
              >
                {item.icon}
                {item.label}
                {item.isSection && (
                  <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                )}
              </button>
            ))}
            <Button 
              onClick={() => navigate("/")}
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow ml-4"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
          <nav className="md:hidden py-4 px-2 space-y-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg animate-fadeIn">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item)}
                className="w-full text-left py-3 px-4 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors flex items-center gap-3"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            <div className="pt-2 px-2">
              <Button 
                onClick={() => navigate("/")}
                className="w-full shadow-lg flex items-center justify-center"
                size="lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}