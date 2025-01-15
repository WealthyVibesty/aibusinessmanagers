import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const FooterSection = () => {
  const solutions = [
    { name: "AI Voice Agents", path: "/voice-agents" },
    { name: "Call Routing", path: "/call-routing" },
    { name: "Task Automation", path: "/task-automation" },
    { name: "Actionable Insights", path: "/actionable-insights" },
    { name: "Cost-Effective Call Centers", path: "/cost-effective-call-centers" },
    { name: "HIPAA Compliant", path: "/hipaa-compliant" },
    { name: "Proactive Engagement", path: "/proactive-engagement" }
  ];

  const industries = [
    { name: "Healthcare", path: "/voice-agents-marketplace" }
  ];

  const resources = [
    { name: "Case Studies", path: "/case-studies" },
    { name: "Whitepapers", path: "/whitepapers" },
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faqs" }
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Why Choose Us", path: "/why-us" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
    { name: "Affiliate Program", path: "/affiliate-program" }
  ];

  return (
    <footer className="bg-black text-gray-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Solutions</h3>
            <ul className="space-y-4">
              {solutions.map((item) => (
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
            <h3 className="text-white font-semibold text-xl mb-6">Industries</h3>
            <ul className="space-y-4">
              {industries.map((item) => (
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
            <h3 className="text-white font-semibold text-xl mb-6">Resources</h3>
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

          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Company</h3>
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