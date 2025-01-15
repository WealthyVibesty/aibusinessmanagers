import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  Bell, 
  FileText, 
  DollarSign, 
  Shield, 
  LayoutDashboard,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import StrategyCallForm from "@/components/StrategyCallForm";
import { useState } from "react";

export default function HealthcareWorkflowAutomation() {
  const navigate = useNavigate();
  const [isStrategyCallOpen, setIsStrategyCallOpen] = useState(false);

  const solutions = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Appointment Scheduling",
      description: "Automate booking, rescheduling, and reminders. Sync with EHR systems and prevent double bookings.",
      benefits: [
        "Automatic appointment confirmations",
        "Real-time calendar syncing",
        "SMS/Email reminders",
        "EHR integration"
      ]
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Patient Notifications",
      description: "AI-powered messaging system for timely patient communications and follow-ups.",
      benefits: [
        "Automated appointment reminders",
        "Test result notifications",
        "Treatment plan follow-ups",
        "Patient feedback collection"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Documentation Handling",
      description: "Streamline patient records management and documentation processes with AI tools.",
      benefits: [
        "Automatic document categorization",
        "Real-time EHR updates",
        "Digital intake forms",
        "Voice-to-text transcription"
      ]
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Billing & Insurance",
      description: "Automate insurance verification and streamline the billing process.",
      benefits: [
        "Automated eligibility checks",
        "Streamlined claim submission",
        "Automated invoice generation",
        "Payment tracking & reminders"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security & Compliance",
      description: "Maintain HIPAA compliance and secure patient data automatically.",
      benefits: [
        "Access tracking & auditing",
        "Data encryption",
        "Compliance monitoring",
        "Security breach prevention"
      ]
    },
    {
      icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
      title: "Workflow Optimization",
      description: "Intelligent task assignment and resource allocation for maximum efficiency.",
      benefits: [
        "Smart resource allocation",
        "Treatment progress tracking",
        "Performance analytics",
        "Bottleneck identification"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Healthcare Workflow Automation" 
        description="Transform your healthcare practice with AI-powered workflow automation. Streamline appointments, documentation, billing, and more while ensuring HIPAA compliance."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Healthcare Practice with AI Workflow Automation
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Reduce administrative burden, improve patient care, and ensure compliance with our comprehensive workflow automation solutions.
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsStrategyCallOpen(true)}
            className="text-lg px-8 py-6 h-auto"
          >
            Schedule a Free Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Healthcare Workflow Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            What Healthcare Providers Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Reduced Administrative Burden",
              "Improved Efficiency & Accuracy",
              "Enhanced Patient Satisfaction",
              "Boosted Revenue & ROI"
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-white">
                <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{item}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading healthcare providers using AI to improve efficiency by up to 70%
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => setIsStrategyCallOpen(true)}
            className="text-lg px-8 py-6 h-auto"
          >
            Schedule Your Free Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Strategy Call Form Dialog */}
      <StrategyCallForm 
        isOpen={isStrategyCallOpen}
        onClose={() => setIsStrategyCallOpen(false)}
      />
    </div>
  );
}