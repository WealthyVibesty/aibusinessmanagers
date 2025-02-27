
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-indigo-500/20">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <nav>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/27a0186c-4d94-49fe-a533-78618a424040.png" 
                alt="AI Business Managers Logo" 
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Trusted By section - visible only on mobile */}
            {isMobile && (
              <div className="hidden sm:flex items-center text-xs text-gray-300 ml-2">
                <span>Trusted by 2,000+ businesses</span>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-300 hover:text-blue-100 hover:bg-indigo-700/20 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link to="/business-automation" className="text-blue-200 hover:text-blue-100 text-sm lg:text-base transition-colors duration-200">
                Business Automation
              </Link>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-blue-200 hover:text-blue-100 text-sm lg:text-base bg-transparent hover:bg-indigo-700/20 transition-colors">
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-900 border border-indigo-500/20 rounded-lg">
                        {industries.map((industry) => (
                          <li key={industry.path}>
                            <Link
                              to={industry.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-indigo-700/20 hover:text-blue-100 focus:bg-indigo-700/20 focus:text-blue-100 text-blue-200"
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

              <Link to="/solutions" className="text-blue-200 hover:text-blue-100 text-sm lg:text-base transition-colors duration-200">
                Solutions
              </Link>
              <Link to="/about" className="text-blue-200 hover:text-blue-100 text-sm lg:text-base transition-colors duration-200">
                About
              </Link>
              <Link to="/demo" className="text-blue-200 hover:text-blue-100 text-sm lg:text-base transition-colors duration-200">
                Demo
              </Link>
              <Link to="/pricing" className="text-blue-200 hover:text-blue-100 text-sm lg:text-base transition-colors duration-200">
                Pricing
              </Link>
              <Button asChild size={isMobile ? "sm" : "default"} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full">
                <Link to="/checkout">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
            } md:hidden fixed top-[56px] left-0 right-0 flex-col items-start bg-slate-900 border-b border-indigo-500/20 p-4 space-y-4 shadow-lg mobile-menu transition-all duration-200 ease-in-out`}
          >
            {/* Social Proof Bar for Mobile */}
            <div className="w-full bg-slate-800/70 p-4 rounded-lg mb-4 border border-indigo-500/20">
              <div className="text-center text-sm font-medium text-blue-200 mb-3">TRUSTED BY 2,000+ BUSINESSES</div>
              <div className="flex justify-around items-center gap-4">
                <img src="/lovable-uploads/cb8c7243-5b81-4b79-a213-5d169acaede2.png" alt="Client Logo" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/97d27ffa-5e3f-47b1-b550-d47dc525b2cf.png" alt="Client Logo" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/97d27ffa-5e3f-47b1-b550-d47dc525b2cf.png" alt="Client Logo" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
            
            <Link
              to="/business-automation"
              className="text-blue-200 hover:text-blue-100 w-full py-3 px-2 rounded-md hover:bg-indigo-700/20 transition-colors text-[15px] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Business Automation
            </Link>
            
            {/* Mobile Industries Menu */}
            <div className="w-full">
              <button
                onClick={toggleIndustries}
                className="flex justify-between items-center w-full text-blue-200 hover:text-blue-100 py-3 px-2 rounded-md hover:bg-indigo-700/20 transition-colors text-[15px] font-medium"
              >
                <span>Industries</span>
                {isIndustriesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              <div 
                className={`${
                  isIndustriesOpen 
                    ? 'max-h-[400px] opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden transition-all duration-300 ease-in-out`}
              >
                <div className="pl-4 py-2 space-y-1">
                  {industries.map((industry) => (
                    <Link
                      key={industry.path}
                      to={industry.path}
                      className="block text-blue-300 hover:text-blue-100 py-2 px-2 rounded-md hover:bg-indigo-700/20 transition-colors text-[15px]"
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
            </div>

            {['Solutions', 'About', 'Demo', 'Pricing'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-blue-200 hover:text-blue-100 w-full py-3 px-2 rounded-md hover:bg-indigo-700/20 transition-colors text-[15px] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}

            <Button 
              asChild 
              className="w-full mt-4 shadow-md font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg"
              size="lg"
            >
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
