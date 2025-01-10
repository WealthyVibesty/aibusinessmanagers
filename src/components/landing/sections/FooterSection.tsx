import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const FooterSection = () => {
  const industries = [
    { name: "Hospitals & Health Systems", path: "/industries/hospitals-health-systems" },
    { name: "Clinics & Private Practices", path: "/industries/clinics-private-practices" },
    { name: "Telehealth Providers", path: "/industries/telehealth-providers" },
    { name: "Specialty Care", path: "/industries/specialty-care" },
    { name: "Pharmaceuticals", path: "/industries/pharmaceuticals" }
  ];

  const resources = [
    { name: "Case Studies", path: "/case-studies" },
    { name: "Whitepapers", path: "/whitepapers" },
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faqs" },
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
    { name: "Contact", path: "/contact" }
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Why Choose Us", path: "/why-us" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" }
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