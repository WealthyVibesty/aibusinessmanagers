import { Button } from "@/components/ui/card";
import { ArrowRight, Apple, Brain, Heart, Leaf, Scale, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NutritionWellnessLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Transform Your Health with AI-Powered Nutrition & Wellness
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 animate-slideUp">
            Personalized nutrition plans, wellness tracking, and AI-driven insights 
            to help you achieve your health goals.
          </p>
          <Button 
            size="lg"
            className="animate-slideUp text-lg px-8 py-6 h-auto"
            onClick={() => navigate("/checkout")}
          >
            Start Your Wellness Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Wellness Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Apple className="h-8 w-8 text-green-500" />,
                title: "Smart Meal Planning",
                description: "AI-generated meal plans based on your preferences, dietary restrictions, and health goals"
              },
              {
                icon: <Scale className="h-8 w-8 text-green-500" />,
                title: "Progress Tracking",
                description: "Monitor your nutrition, exercise, and wellness metrics in real-time"
              },
              {
                icon: <Brain className="h-8 w-8 text-green-500" />,
                title: "Behavioral Insights",
                description: "Understanding your habits and providing actionable recommendations"
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow animate-fadeIn"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Transform Your Approach to Wellness
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Utensils className="h-6 w-6 text-green-500" />,
                text: "Personalized nutrition recommendations based on your unique needs"
              },
              {
                icon: <Heart className="h-6 w-6 text-green-500" />,
                text: "Holistic health monitoring integrating diet, exercise, and lifestyle"
              },
              {
                icon: <Leaf className="h-6 w-6 text-green-500" />,
                text: "Sustainable wellness habits through AI-driven behavioral coaching"
              },
              {
                icon: <Brain className="h-6 w-6 text-green-500" />,
                text: "Mental wellness support integrated with physical health tracking"
              }
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-lg bg-white shadow-sm">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <p className="text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Start Your Journey to Better Health Today
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of others who have transformed their lives with our AI-powered wellness platform
          </p>
          <div className="pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-green-500 hover:bg-green-600 text-white"
              onClick={() => navigate("/checkout")}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600">support@example.com</p>
              <p className="text-gray-600">1-800-WELLNESS</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-600 hover:text-green-500 block">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-green-500 block">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-green-500 block">Facebook</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-600 hover:text-green-500 block">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-green-500 block">Terms of Service</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-600 hover:text-green-500 block">Blog</a>
                <a href="#" className="text-gray-600 hover:text-green-500 block">Wellness Guide</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}