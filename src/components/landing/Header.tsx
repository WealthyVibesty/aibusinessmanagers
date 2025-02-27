
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <nav>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/27a0186c-4d94-49fe-a533-78618a424040.png" 
                alt="AI Business Managers Logo" 
                className="h-8 md:h-12 w-auto"
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
              className="md:hidden text-gray-600 hover:text-gray-900 p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link to="/business-automation" className="text-gray-600 hover:text-primary text-sm lg:text-base">
                Business Automation
              </Link>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-600 hover:text-primary text-sm lg:text-base">
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                        {industries.map((industry) => (
                          <li key={industry.path}>
                            <Link
                              to={industry.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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

              <Link to="/solutions" className="text-gray-600 hover:text-primary text-sm lg:text-base">
                Solutions
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-primary text-sm lg:text-base">
                About
              </Link>
              <Link to="/demo" className="text-gray-600 hover:text-primary text-sm lg:text-base">
                Demo
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-primary text-sm lg:text-base">
                Pricing
              </Link>
              <Button asChild size={isMobile ? "sm" : "default"}>
                <Link to="/checkout">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden absolute top-full left-0 right-0 flex-col items-start bg-white border-b border-gray-200 p-4 space-y-4 shadow-lg`}
          >
            {/* Social Proof Bar for Mobile */}
            <div className="w-full bg-gray-50 p-3 rounded-lg mb-4">
              <div className="text-center text-xs font-medium text-gray-500">TRUSTED BY 2,000+ BUSINESSES</div>
              <div className="flex justify-around mt-2">
                <img src="/lovable-uploads/cb8c7243-5b81-4b79-a213-5d169acaede2.png" alt="Client Logo" className="h-5 opacity-70" />
                <img src="/lovable-uploads/97d27ffa-5e3f-47b1-b550-d47dc525b2cf.png" alt="Client Logo" className="h-5 opacity-70" />
                <img src="/lovable-uploads/97d27ffa-5e3f-47b1-b550-d47dc525b2cf.png" alt="Client Logo" className="h-5 opacity-70" />
              </div>
            </div>
            
            <Link
              to="/business-automation"
              className="text-gray-600 hover:text-primary w-full py-2"
              onClick={() => setIsOpen(false)}
            >
              Business Automation
            </Link>
            
            {/* Mobile Industries Menu */}
            <div className="w-full">
              <button
                onClick={toggleIndustries}
                className="flex justify-between items-center w-full text-gray-600 hover:text-primary py-2"
              >
                <span>Industries</span>
                <span className={`transform transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`${isIndustriesOpen ? 'block' : 'hidden'} pl-4 mt-2 space-y-2`}>
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
              className="text-gray-600 hover:text-primary w-full py-2"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary w-full py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/demo"
              className="text-gray-600 hover:text-primary w-full py-2"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </Link>
            <Link
              to="/pricing"
              className="text-gray-600 hover:text-primary w-full py-2"
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
        </nav>
      </div>
    </header>
  );
}
