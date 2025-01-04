import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            <img 
              src="/lovable-uploads/ab5a6229-a3bb-476d-9eb2-5452bf6f7a52.png" 
              alt="AI Marketing Profile" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { id: "benefits", label: "Benefits" },
              { id: "lifetime-access", label: "Courses" },
              { id: "case-studies", label: "Case Studies" },
              { id: "pricing-details", label: "Pricing" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1 group"
              >
                {item.label}
                <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("pricing-details")}
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
            {[
              { id: "benefits", label: "Benefits" },
              { id: "lifetime-access", label: "Courses" },
              { id: "case-studies", label: "Case Studies" },
              { id: "pricing-details", label: "Pricing" },
            ].map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-3 px-4 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors flex items-center justify-between group"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            ))}
            <div className="pt-2 px-2">
              <Button 
                onClick={() => scrollToSection("pricing-details")}
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