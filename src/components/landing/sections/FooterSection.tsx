import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const FooterSection = () => {
  const industries = [
    { name: "Telemedicine", path: "/telemedicine" },
    { name: "Mental Health", path: "/mental-health" },
    { name: "Elderly Care", path: "/elderly-care" },
    { name: "Primary Care", path: "/primary-care" },
    { name: "Chronic Disease", path: "/chronic-disease" },
    { name: "Pharmaceuticals", path: "/pharmaceuticals" },
    { name: "Health Insurance", path: "/health-insurance" },
    { name: "Hospital Operations", path: "/hospital-operations" },
    { name: "Public Health", path: "/public-health" },
    { name: "Rehabilitation", path: "/rehabilitation" },
    { name: "Medical Research", path: "/medical-research" },
    { name: "Home Healthcare", path: "/home-healthcare" },
    { name: "Pediatrics", path: "/pediatrics" },
    { name: "Dental Care", path: "/dental-care" },
    { name: "Nutrition & Wellness", path: "/nutrition-wellness" },
    { name: "Emergency Services", path: "/emergency-services" },
    { name: "Surgical Practices", path: "/surgical-practices" },
    { name: "Diagnostic Imaging", path: "/diagnostic-imaging" },
    { name: "Cardiology", path: "/cardiology" },
    { name: "Dermatology", path: "/dermatology" },
    { name: "OB/GYN", path: "/obgyn" }
  ];

  const resources = [
    { name: "Content Library", path: "/content-library" },
    { 
      name: "Support Center", 
      path: "#",
      onClick: () => {
        const widget = document.querySelector('elevenlabs-convai');
        if (widget) {
          widget.classList.remove('hidden');
          console.log('Opening AI assistant from support center link');
        }
      }
    },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Use", path: "/terms-of-use" },
    { name: "Site Map", path: "/sitemap" }
  ];

  const company = [
    { name: "Why AI Business Managers", path: "/why-healthai" },
    { name: "Our Technology", path: "/technology" },
    { name: "AI's Future in Healthcare", path: "/ai-future" },
    { name: "Careers", path: "/careers" },
    { name: "Mission", path: "/mission" },
    { name: "Partners", path: "/partners" },
    { name: "Press", path: "/press" }
  ];

  return (
    <footer className="bg-black text-gray-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6">Industries</h3>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {resources.map((item) => (
                <li key={item.path}>
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link 
                      to={item.path}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {new Date().getFullYear()} AI Business Managers. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://linkedin.com/company/aibusinessmanagers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
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