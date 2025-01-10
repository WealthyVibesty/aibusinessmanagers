import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("voice-agents")}
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1 group"
            >
              Voice Agents
              <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1 group"
            >
              Case Studies
              <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("pricing-details")}
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1 group"
            >
              Pricing
              <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <Button 
              onClick={() => navigate("/checkout")}
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <nav className="md:hidden py-4 px-2 space-y-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg animate-fadeIn">
            <button
              onClick={() => scrollToSection("voice-agents")}
              className="w-full text-left py-3 px-4 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              Voice Agents
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="w-full text-left py-3 px-4 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="w-full text-left py-3 px-4 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection("pricing-details")}
              className="w-full text-left py-3 px-4 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              Pricing
            </button>
            <div className="pt-2 px-2">
              <Button 
                onClick={() => navigate("/checkout")}
                className="w-full shadow-lg"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}