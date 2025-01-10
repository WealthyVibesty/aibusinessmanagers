import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const FooterSection = () => {
  const company = [
    { name: "Why AI Business Managers", path: "/why-healthai" },
    { name: "Our Technology", path: "/technology" },
    { name: "AI's Future in Healthcare", path: "/ai-future" },
    { name: "Careers", path: "/careers" },
    { name: "Mission", path: "/mission" },
    { name: "Partners", path: "/partners" },
    { name: "Press", path: "/press" }
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

  return (
    <footer className="bg-black text-gray-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Company</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="hover:text-white transition-colors duration-200 text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Resources</h3>
            <ul className="space-y-4">
              {resources.map((item) => (
                <li key={item.path}>
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="hover:text-white transition-colors duration-200 text-lg text-left w-full"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link 
                      to={item.path}
                      className="hover:text-white transition-colors duration-200 text-lg"
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