import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Clock, HeartPulse, Pill, Shield, Stethoscope, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChronicDiseaseLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Transform Chronic Disease Management with AI-Powered Support
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 animate-slideUp">
            Help patients take control of their health with AI agents that provide education, 
            medication reminders, and ongoing support—all tailored to their unique needs.
          </p>
          <Button 
            size="lg"
            className="animate-slideUp text-lg px-8 py-6 h-auto"
            onClick={() => navigate("/checkout")}
          >
            Request a Free Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Managing Chronic Conditions Shouldn't Be a Struggle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                text: "Patients often lack the knowledge to manage their conditions effectively"
              },
              {
                icon: <Pill className="h-8 w-8" />,
                text: "Medication non-adherence leads to worsening health and higher costs"
              },
              {
                icon: <Stethoscope className="h-8 w-8" />,
                text: "Healthcare providers struggle to provide continuous support"
              },
              {
                icon: <Users className="h-8 w-8" />,
                text: "Caregivers feel overwhelmed by managing chronic diseases"
              }
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {item.icon}
                </div>
                <p className="text-lg text-gray-700">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your Partner in Chronic Disease Management
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Patient Education Agents",
                description: "Deliver personalized, easy-to-understand information about conditions and treatments"
              },
              {
                title: "Medication Adherence Tools",
                description: "Send timely reminders, track doses, and provide feedback to keep patients on track"
              },
              {
                title: "Personalized Care Plans",
                description: "Tailor recommendations based on patient data and progress"
              }
            ].map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our AI Chronic Disease Management Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Improved Patient Outcomes: Better education and adherence lead to healthier patients",
              "24/7 Support: Patients get the help they need, whenever they need it",
              "Reduced Healthcare Costs: Prevent complications through better management",
              "Data-Driven Insights: Track patient progress and adjust care plans in real time"
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                <div className="flex-shrink-0">
                  <HeartPulse className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Empower Patients to Take Control of Their Health
          </h2>
          <p className="text-xl text-gray-600">
            Improve Outcomes and Reduce Costs with AI-Powered Chronic Disease Management
          </p>
          <div className="pt-4">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Request a Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}