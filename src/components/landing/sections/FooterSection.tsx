import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const healthcareServices = [
    { name: "Telemedicine", path: "/telemedicine" },
    { name: "Primary Care", path: "/primary-care" },
    { name: "Mental Health", path: "/mental-health" },
    { name: "Elderly Care", path: "/elderly-care" },
    { name: "Chronic Disease", path: "/chronic-disease" },
  ];

  const specialtyServices = [
    { name: "Cardiology", path: "/cardiology" },
    { name: "Dermatology", path: "/dermatology" },
    { name: "OB/GYN", path: "/obgyn" },
    { name: "Pediatrics", path: "/pediatrics" },
    { name: "Dental Care", path: "/dental-care" },
  ];

  const additionalServices = [
    { name: "Pharmaceuticals", path: "/pharmaceuticals" },
    { name: "Health Insurance", path: "/health-insurance" },
    { name: "Hospital Operations", path: "/hospital-operations" },
    { name: "Public Health", path: "/public-health" },
    { name: "Medical Research", path: "/medical-research" },
  ];

  const supportServices = [
    { name: "Home Healthcare", path: "/home-healthcare" },
    { name: "Nutrition & Wellness", path: "/nutrition-wellness" },
    { name: "Emergency Services", path: "/emergency-services" },
    { name: "Rehabilitation", path: "/rehabilitation" },
    { name: "Voice Agents", path: "/voice-agents" },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/ab5a6229-a3bb-476d-9eb2-5452bf6f7a52.png" 
                alt="Company Logo" 
                className="h-12 w-auto mb-6"
              />
            </Link>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>1-800-HEALTH-AI</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>support@healthai.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>123 Health Street, CA 94105</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Shield className="h-5 w-5" />
                <span className="font-medium">HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Healthcare Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Healthcare Services</h3>
            <ul className="space-y-3">
              {healthcareServices.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialty Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Specialty Care</h3>
            <ul className="space-y-3">
              {specialtyServices.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Healthcare Solutions</h3>
            <ul className="space-y-3">
              {additionalServices.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Services</h3>
            <ul className="space-y-3">
              {supportServices.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} HealthAI. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-600 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-600 hover:text-primary text-sm transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;