
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const FooterSection = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };
  
  const solutions = [{
    name: "AI Voice Agents",
    path: "/voice-agents"
  }, {
    name: "Call Routing",
    path: "/solutions/call-routing"
  }, {
    name: "Task Automation",
    path: "/solutions/task-automation"
  }, {
    name: "Actionable Insights",
    path: "/solutions/actionable-insights"
  }, {
    name: "Cost-Effective Call Centers",
    path: "/solutions/cost-effective-call-centers"
  }, {
    name: "HIPAA Compliant",
    path: "/solutions/hipaa-compliant"
  }, {
    name: "Proactive Engagement",
    path: "/solutions/proactive-engagement"
  }];
  
  const industries = [{
    name: "Healthcare",
    path: "/industries/healthcare"
  }, {
    name: "Finance",
    path: "/industries/finance"
  }, {
    name: "Transportation",
    path: "/industries/transportation"
  }, {
    name: "Hospitality",
    path: "/industries/hospitality"
  }, {
    name: "Restaurants",
    path: "/industries/restaurants"
  }];
  
  const company = [{
    name: "About Us",
    path: "/about"
  }, {
    name: "Why Choose Us",
    path: "/why-us"
  }, {
    name: "Our Team",
    path: "/team"
  }, {
    name: "Contact",
    path: "/contact"
  }, {
    name: "Affiliate Program",
    path: "/affiliate-program"
  }, {
    name: "Site Map",
    path: "/sitemap"
  }];
  
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-blue-100 py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6 transform hover:scale-105 transition-transform">
              <img src="/lovable-uploads/27a0186c-4d94-49fe-a533-78618a424040.png" alt="AI Business Managers" className="h-14 w-auto" />
            </Link>
            <p className="text-blue-200/80 mb-8 max-w-lg text-lg leading-relaxed">
              Optimizing business operations with AI-technology.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4 group">
                <div className="bg-indigo-600/20 p-3 rounded-full group-hover:bg-indigo-600/30 transition-colors">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <a href="mailto:contact@aibusinessmanagers.com" className="text-blue-200 hover:text-blue-100 transition-colors text-lg">
                  contact@aibusinessmanagers.com
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="bg-indigo-600/20 p-3 rounded-full group-hover:bg-indigo-600/30 transition-colors">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <a href="tel:+18887084440" className="text-blue-200 hover:text-blue-100 transition-colors text-lg">
                  +1 (888) 708 4440
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="bg-indigo-600/20 p-3 rounded-full group-hover:bg-indigo-600/30 transition-colors">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <a href="https://www.google.com/maps/place/Ai+Marketing+Profile/data=!4m2!3m1!1s0x0:0x142f04dbfad3e4ae?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 transition-colors text-lg">
                  Fort Lauderdale, FL
                </a>
              </div>
            </div>
          </div>

          {/* Footer Menu Sections */}
          <div className="md:col-span-1 space-y-6">
            {/* Solutions Section */}
            <div className="bg-slate-800/50 rounded-lg overflow-hidden shadow-md border border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
              <button onClick={() => toggleSection('solutions')} className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm flex justify-between items-center hover:bg-indigo-900/30 transition-all duration-300">
                <span className="text-xl font-semibold text-white">Solutions</span>
                {openSection === 'solutions' ? 
                  <ChevronUp className="h-6 w-6 text-blue-400" /> : 
                  <ChevronDown className="h-6 w-6 text-blue-400" />
                }
              </button>
              
              <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-2 px-6 overflow-hidden transition-all duration-300 bg-slate-800/30 backdrop-blur-sm", 
                openSection === 'solutions' ? 'max-h-[500px] py-6' : 'max-h-0 py-0')}>
                {solutions.map(item => (
                  <Link key={item.path} to={item.path} className="text-blue-300 hover:text-blue-100 transition-colors duration-200 py-2">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries Section */}
            <div className="bg-slate-800/50 rounded-lg overflow-hidden shadow-md border border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
              <button onClick={() => toggleSection('industries')} className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm flex justify-between items-center hover:bg-indigo-900/30 transition-all duration-300">
                <span className="text-xl font-semibold text-white">Industries</span>
                {openSection === 'industries' ? 
                  <ChevronUp className="h-6 w-6 text-blue-400" /> : 
                  <ChevronDown className="h-6 w-6 text-blue-400" />
                }
              </button>
              
              <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-2 px-6 overflow-hidden transition-all duration-300 bg-slate-800/30 backdrop-blur-sm", 
                openSection === 'industries' ? 'max-h-[500px] py-6' : 'max-h-0 py-0')}>
                {industries.map(item => (
                  <Link key={item.path} to={item.path} className="text-blue-300 hover:text-blue-100 transition-colors duration-200 py-2">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Section */}
            <div className="bg-slate-800/50 rounded-lg overflow-hidden shadow-md border border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
              <button onClick={() => toggleSection('company')} className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm flex justify-between items-center hover:bg-indigo-900/30 transition-all duration-300">
                <span className="text-xl font-semibold text-white">Company</span>
                {openSection === 'company' ? 
                  <ChevronUp className="h-6 w-6 text-blue-400" /> : 
                  <ChevronDown className="h-6 w-6 text-blue-400" />
                }
              </button>
              
              <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-2 px-6 overflow-hidden transition-all duration-300 bg-slate-800/30 backdrop-blur-sm", 
                openSection === 'company' ? 'max-h-[500px] py-6' : 'max-h-0 py-0')}>
                {company.map(item => (
                  <Link key={item.path} to={item.path} className="text-blue-300 hover:text-blue-100 transition-colors duration-200 py-2">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-indigo-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-300/70">
              © {new Date().getFullYear()} AI Business Managers. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.linkedin.com/company/aimarketingprofile/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-300 bg-indigo-600/20 p-3 rounded-full hover:bg-indigo-600/40 hover:text-blue-100 transition-all duration-300" 
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
