import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
            AI Business Managers
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