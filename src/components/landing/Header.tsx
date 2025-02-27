
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Close mobile menu when window is resized to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    // Handle scrolling for header appearance
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  // When mobile menu is open, prevent scrolling on the body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleIndustries = () => {
    setIsIndustriesOpen(!isIndustriesOpen);
  };

  const industries = [
    { name: "Healthcare", path: "/industries/healthcare" },
    { name: "Finance", path: "/industries/finance" },
    { name: "Restaurants", path: "/industries/restaurants" },
    { name: "Hospitality", path: "/industries/hospitality" },
    { name: "Transportation", path: "/industries/transportation" },
  ];

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-white/95 shadow-md" : "bg-white/90"
  } backdrop-blur-md border-b border-gray-200`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-2 md:py-4">
        <nav>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center relative z-20">
              <img 
                src="/lovable-uploads/27a0186c-4d94-49fe-a533-78618a424040.png" 
                alt="AI Business Managers Logo" 
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Trusted By section - visible only on mobile */}
            {isMobile && (
              <div className="hidden sm:flex items-center text-xs text-gray-500 ml-2">
                <span>Trusted by 2,000+ businesses</span>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-600 hover:text-gray-900 p-2 relative z-20"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-6">
              <Link to="/business-automation" className="text-gray-600 hover:text-primary px-2 py-1 text-sm lg:text-base">
                Business Automation
              </Link>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-600 hover:text-primary text-sm lg:text-base h-auto py-1">
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-2 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] bg-white">
                        {industries.map((industry) => (
                          <li key={industry.path}>
                            <Link
                              to={industry.path}
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {industry.name}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link to="/solutions" className="text-gray-600 hover:text-primary px-2 py-1 text-sm lg:text-base">
                Solutions
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-primary px-2 py-1 text-sm lg:text-base">
                About
              </Link>
              <Link to="/demo" className="text-gray-600 hover:text-primary px-2 py-1 text-sm lg:text-base">
                Demo
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-primary px-2 py-1 text-sm lg:text-base">
                Pricing
              </Link>
              <Button asChild size="sm" className="ml-2">
                <Link to="/checkout">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Overlay */}
          <div 
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-10 md:hidden ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Mobile Navigation Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl overflow-y-auto z-10 transform transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4 border-b border-gray-200">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col p-4 space-y-4">
              {/* Social Proof Bar for Mobile */}
              <div className="w-full bg-gray-50 p-3 rounded-lg">
                <div className="text-center text-xs font-medium text-gray-500">TRUSTED BY 2,000+ BUSINESSES</div>
                <div className="flex justify-around mt-2">
                  <img src="/lovable-uploads/cb8c7243-5b81-4b79-a213-5d169acaede2.png" alt="Client Logo" className="h-5 opacity-70" />
                  <img src="/lovable-uploads/97d27ffa-5e3f-47b1-b550-d47dc525b2cf.png" alt="Client Logo" className="h-5 opacity-70" />
                  <img src="/lovable-uploads/97d27ffa-5e3f-47b1-b550-d47dc525b2cf.png" alt="Client Logo" className="h-5 opacity-70" />
                </div>
              </div>
              
              <Link
                to="/business-automation"
                className="text-gray-600 hover:text-primary w-full py-3 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Business Automation
              </Link>
              
              {/* Mobile Industries Menu */}
              <div className="w-full border-b border-gray-100">
                <button
                  onClick={toggleIndustries}
                  className="flex justify-between items-center w-full text-gray-600 hover:text-primary py-3"
                >
                  <span>Industries</span>
                  <span className={`transform transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`${isIndustriesOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'} pl-4 space-y-3 overflow-hidden transition-all duration-300`}>
                  {industries.map((industry) => (
                    <Link
                      key={industry.path}
                      to={industry.path}
                      className="block text-gray-600 hover:text-primary py-1"
                      onClick={() => {
                        setIsOpen(false);
                        setIsIndustriesOpen(false);
                      }}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/solutions"
                className="text-gray-600 hover:text-primary w-full py-3 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-primary w-full py-3 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/demo"
                className="text-gray-600 hover:text-primary w-full py-3 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Demo
              </Link>
              <Link
                to="/pricing"
                className="text-gray-600 hover:text-primary w-full py-3 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Button asChild className="w-full mt-4">
                <Link to="/checkout" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
