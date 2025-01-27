import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const industries = [
  { name: "Healthcare", path: "/industries/healthcare" },
  { name: "Finance", path: "/industries/finance" },
  { name: "Hospitality", path: "/industries/hospitality" },
  { name: "Restaurants", path: "/industries/restaurants" },
  { name: "Transportation", path: "/industries/transportation" },
  { name: "Property Management", path: "/industries/property-management" },
  { name: "Clinics & Private Practices", path: "/industries/clinics-private-practices" },
  { name: "Hospitals & Health Systems", path: "/industries/hospitals-health-systems" },
  { name: "Specialty Care", path: "/industries/specialty-care" },
  { name: "Telehealth Providers", path: "/industries/telehealth-providers" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">
            AI Voice Agents
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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-primary">
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-gray-200">
                {industries.map((industry) => (
                  <DropdownMenuItem key={industry.path}>
                    <Link
                      to={industry.path}
                      className="w-full text-gray-600 hover:text-primary"
                    >
                      {industry.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
            <div className="w-full">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-primary">
                  Industries <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-gray-200">
                  {industries.map((industry) => (
                    <DropdownMenuItem key={industry.path}>
                      <Link
                        to={industry.path}
                        className="w-full text-gray-600 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {industry.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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