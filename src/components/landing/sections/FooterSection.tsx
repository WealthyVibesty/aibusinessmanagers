import { Shield } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">support@example.com</p>
            <p className="text-gray-600">1-800-HEALTH-AI</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a href="#" className="text-gray-600 hover:text-primary block">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-primary block">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-primary block">Facebook</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="text-gray-600 hover:text-primary block">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-primary block">Terms of Service</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Trust & Security</h3>
            <div className="flex items-center gap-2 text-primary">
              <Shield className="h-5 w-5" />
              <span>HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}