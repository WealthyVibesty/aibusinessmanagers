
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Book } from "lucide-react";
import { useState } from "react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/27a0186c-4d94-49fe-a533-78618a424040.png" 
              alt="AI Business Managers Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/business-automation" className="text-gray-600 hover:text-primary">
              Business Automation
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-primary">
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

            <Link to="/solutions" className="text-gray-600 hover:text-primary">
              Solutions
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link to="/demo" className="text-gray-600 hover:text-primary">
              Demo
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary">
              Pricing
            </Link>
            <Link to="/ai-ebook" className="flex items-center text-gray-600 hover:text-primary">
              <Book className="mr-1 h-4 w-4" />
              AI Ebook
            </Link>
            <Button asChild>
              <Link to="/checkout">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } md:hidden absolute top-full left-0 right-0 flex-col items-start bg-white border-b border-gray-200 p-4 space-y-4`}
          >
            <Link
              to="/business-automation"
              className="text-gray-600 hover:text-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              Business Automation
            </Link>
            
            {/* Mobile Industries Menu */}
            <div className="w-full">
              <button
                onClick={toggleIndustries}
                className="flex justify-between items-center w-full text-gray-600 hover:text-primary"
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
              className="text-gray-600 hover:text-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/demo"
              className="text-gray-600 hover:text-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </Link>
            <Link
              to="/pricing"
              className="text-gray-600 hover:text-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/ai-ebook"
              className="flex items-center text-gray-600 hover:text-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              <Book className="mr-1 h-4 w-4" />
              AI Ebook
            </Link>
            <Button asChild className="w-full">
              <Link to="/checkout" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
