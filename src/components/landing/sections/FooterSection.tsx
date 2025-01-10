import { Link } from "react-router-dom";
import { Twitter, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const FooterSection = () => {
  const products = [
    { name: "Voice Agents", path: "/voice-agents" },
    { name: "Telemedicine", path: "/telemedicine" },
    { name: "Primary Care", path: "/primary-care" },
    { name: "Education Platform", path: "/courses" },
    { name: "Community Forum", path: "/forum" },
  ];

  const specialties = [
    { name: "Cardiology", path: "/cardiology" },
    { name: "Dermatology", path: "/dermatology" },
    { name: "OB/GYN", path: "/obgyn" },
    { name: "Emergency Services", path: "/emergency-services" },
    { name: "Hospital Operations", path: "/hospital-operations" },
    { name: "Medical Research", path: "/medical-research" },
    { name: "Rehabilitation", path: "/rehabilitation" },
    { name: "Dental Care", path: "/dental-care" },
    { name: "Diagnostic Imaging", path: "/diagnostic-imaging" },
  ];

  const about = [
    { name: "Why AI Marketing Profile", path: "/" },
    { name: "Our Technology", path: "/technology" },
    { name: "AI's Future in Business", path: "/future" },
    { name: "Careers", path: "/careers" },
    { name: "Mission", path: "/mission" },
    { name: "Partners", path: "/partners" },
    { name: "Press", path: "/press" },
    { name: "AI Marketplace", path: "/voice-agents", isNew: true },
  ];

  const resources = [
    { name: "Content Library", path: "/resources" },
    { name: "Support Center", path: "/support" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Site Map", path: "/sitemap" },
  ];

  const socialLinks = [
    { Icon: Twitter, href: "https://twitter.com/aimarketingprofile" },
    { Icon: Instagram, href: "https://instagram.com/aimarketingprofile" },
    { Icon: Facebook, href: "https://facebook.com/aimarketingprofile" },
    { Icon: Linkedin, href: "https://linkedin.com/company/aimarketingprofile" },
    { Icon: Youtube, href: "https://youtube.com/aimarketingprofile" },
  ];

  return (
    <footer className="bg-black text-gray-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              {products.map((item) => (
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

          {/* Specialties Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Industries</h3>
            <ul className="space-y-4">
              {specialties.map((item) => (
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

          {/* About Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">About</h3>
            <ul className="space-y-4">
              {about.map((item) => (
                <li key={item.path} className="flex items-center gap-2">
                  <Link 
                    to={item.path}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                  {item.isNew && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {resources.map((item) => (
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
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {new Date().getFullYear()} AI Marketing Profile. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-sm">Follow us</span>
              {socialLinks.map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;