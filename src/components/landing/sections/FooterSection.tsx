
import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const FooterSection = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Add intersection observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElement = footerRef.current;
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const solutions = [
    { name: "AI Voice Agents", path: "/voice-agents" },
    { name: "Call Routing", path: "/solutions/call-routing" },
    { name: "Task Automation", path: "/solutions/task-automation" },
    { name: "Actionable Insights", path: "/solutions/actionable-insights" },
    { name: "Cost-Effective Call Centers", path: "/solutions/cost-effective-call-centers" },
    { name: "HIPAA Compliant", path: "/solutions/hipaa-compliant" },
    { name: "Proactive Engagement", path: "/solutions/proactive-engagement" }
  ];

  const industries = [
    { name: "Healthcare", path: "/industries/healthcare" },
    { name: "Finance", path: "/industries/finance" },
    { name: "Transportation", path: "/industries/transportation" },
    { name: "Hospitality", path: "/industries/hospitality" },
    { name: "Restaurants", path: "/industries/restaurants" }
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Why Choose Us", path: "/why-us" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
    { name: "Affiliate Program", path: "/affiliate-program" },
    { name: "Site Map", path: "/sitemap" }
  ];

  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 opacity-0 transition-all duration-700"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-16">
          <div className="lg:col-span-1 hover-scale">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/97d27ffa-5e3f-47b1-b550-d47dc525b2cf.png" 
                alt="AI Business Managers" 
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md text-sm sm:text-base">
              Transforming business operations with AI-powered voice agents and conversational AI technology that deliver measurable results and exceptional customer experiences.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 group-hover:text-white transition-colors" />
                <a href="mailto:contact@aibusinessmanagers.com" className="hover:text-primary transition-colors text-sm sm:text-base truncate">
                  contact@aibusinessmanagers.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 group-hover:text-white transition-colors" />
                <a href="tel:+18887084440" className="hover:text-primary transition-colors text-sm sm:text-base">
                  +1 (888) 708 4440
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 group-hover:text-white transition-colors" />
                <a 
                  href="https://www.google.com/maps/place/Ai+Marketing+Profile/data=!4m2!3m1!1s0x0:0x142f04dbfad3e4ae?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Fort Lauderdale, FL
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Footer Accordion */}
          <div className="md:hidden col-span-1 space-y-4 mt-6">
            {/* Solutions Section */}
            <div className="border-b border-gray-800 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left py-2 group"
                onClick={() => toggleSection('solutions')}
              >
                <h3 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">Solutions</h3>
                {expandedSection === 'solutions' ? 
                  <ChevronUp className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                }
              </button>
              {expandedSection === 'solutions' && (
                <ul className="space-y-3 mt-3 pl-2 animate-accordion-down">
                  {solutions.map((item) => (
                    <li key={item.path}>
                      <Link 
                        to={item.path}
                        className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm story-link"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Industries Section */}
            <div className="border-b border-gray-800 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left py-2 group"
                onClick={() => toggleSection('industries')}
              >
                <h3 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">Industries</h3>
                {expandedSection === 'industries' ? 
                  <ChevronUp className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                }
              </button>
              {expandedSection === 'industries' && (
                <ul className="space-y-3 mt-3 pl-2 animate-accordion-down">
                  {industries.map((item) => (
                    <li key={item.path}>
                      <Link 
                        to={item.path}
                        className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm story-link"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Company Section */}
            <div className="border-b border-gray-800 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left py-2 group"
                onClick={() => toggleSection('company')}
              >
                <h3 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">Company</h3>
                {expandedSection === 'company' ? 
                  <ChevronUp className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                }
              </button>
              {expandedSection === 'company' && (
                <ul className="space-y-3 mt-3 pl-2 animate-accordion-down">
                  {company.map((item) => (
                    <li key={item.path}>
                      <Link 
                        to={item.path}
                        className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm story-link"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Desktop Footer Sections */}
          <div className="hidden md:block hover-scale">
            <h3 className="text-white font-semibold text-lg mb-4 sm:mb-6">Solutions</h3>
            <ul className="space-y-3 sm:space-y-4">
              {solutions.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm sm:text-base story-link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block hover-scale">
            <h3 className="text-white font-semibold text-lg mb-4 sm:mb-6">Industries</h3>
            <ul className="space-y-3 sm:space-y-4">
              {industries.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm sm:text-base story-link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block hover-scale">
            <h3 className="text-white font-semibold text-lg mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-3 sm:space-y-4">
              {company.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm sm:text-base story-link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} AI Business Managers. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/company/aimarketingprofile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-200 hover-scale"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
