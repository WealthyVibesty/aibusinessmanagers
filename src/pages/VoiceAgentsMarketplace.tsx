import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Stethoscope, Brain, Heart, Pill, Building2, Hospital, 
  Activity, Dumbbell, BookOpen, Home, Baby, Smile, Apple, 
  PhoneCall, GraduationCap, MessageSquare, Code, BookOpen as Learn,
  ShoppingCart, Users, HeadphonesIcon
} from "lucide-react";

const industries = [
  { id: 'telemedicine', name: 'Telemedicine', icon: <Stethoscope className="h-6 w-6" />, 
    description: 'Virtual consultations, appointment scheduling, and patient triage.' },
  { id: 'mental-health', name: 'Mental Health', icon: <Brain className="h-6 w-6" />,
    description: 'Therapeutic conversation agents and crisis intervention tools.' },
  { id: 'chronic-disease', name: 'Chronic Disease', icon: <Heart className="h-6 w-6" />,
    description: 'Patient education and medication adherence.' },
  { id: 'pharmaceuticals', name: 'Pharmaceuticals', icon: <Pill className="h-6 w-6" />,
    description: 'Customer support and clinical trial assistance.' },
  { id: 'hospital', name: 'Hospital Operations', icon: <Hospital className="h-6 w-6" />,
    description: 'Patient intake and staff coordination.' },
  { id: 'rehabilitation', name: 'Rehabilitation', icon: <Dumbbell className="h-6 w-6" />,
    description: 'Exercise guidance and progress tracking.' },
  { id: 'research', name: 'Medical Research', icon: <BookOpen className="h-6 w-6" />,
    description: 'Data analysis and literature review.' },
  { id: 'home-healthcare', name: 'Home Healthcare', icon: <Home className="h-6 w-6" />,
    description: 'Remote monitoring and daily assistance.' },
  { id: 'pediatrics', name: 'Pediatrics', icon: <Baby className="h-6 w-6" />,
    description: 'Child-friendly interaction and parental support.' },
  { id: 'dental', name: 'Dental Care', icon: <Smile className="h-6 w-6" />,
    description: 'Appointment management and patient education.' },
  { id: 'nutrition', name: 'Nutrition & Wellness', icon: <Apple className="h-6 w-6" />,
    description: 'Dietary guidance and fitness coaching.' },
  { id: 'emergency', name: 'Emergency Services', icon: <PhoneCall className="h-6 w-6" />,
    description: 'First responder assistance and public alerts.' }
];

const features = [
  { id: 'demos', name: 'Interactive Demos', icon: <HeadphonesIcon className="h-6 w-6" />,
    description: 'Experience our AI voice agents in real-time demos.' },
  { id: 'developers', name: 'Developer Resources', icon: <Code className="h-6 w-6" />,
    description: 'Access SDKs, APIs, and developer documentation.' },
  { id: 'education', name: 'Educational Content', icon: <GraduationCap className="h-6 w-6" />,
    description: 'Explore webinars, tutorials, and research papers.' },
  { id: 'marketplace', name: 'Marketplace', icon: <ShoppingCart className="h-6 w-6" />,
    description: 'Browse and purchase AI voice solutions.' },
  { id: 'community', name: 'Community', icon: <Users className="h-6 w-6" />,
    description: 'Connect with other healthcare professionals.' },
  { id: 'support', name: 'Support', icon: <MessageSquare className="h-6 w-6" />,
    description: 'Get help from our dedicated support team.' }
];

export default function VoiceAgentsMarketplace() {
  const [selectedIndustry, setSelectedIndustry] = useState('telemedicine');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            AI Voice Agents for Healthcare
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideUp">
            Discover intelligent voice solutions tailored for healthcare industries. 
            Transform patient care and streamline operations with cutting-edge AI technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="animate-slideUp" style={{ animationDelay: "200ms" }}>
              Try Demo
            </Button>
            <Button size="lg" variant="outline" className="animate-slideUp" 
                    style={{ animationDelay: "300ms" }}>
              View Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <Card 
                key={industry.id}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer animate-scale"
                onClick={() => setSelectedIndustry(industry.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{industry.name}</h3>
                    <p className="text-sm text-gray-600">{industry.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card 
                key={feature.id}
                className="p-6 hover:shadow-lg transition-shadow animate-scale"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.name}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Healthcare?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join healthcare providers worldwide who are revolutionizing patient care with AI voice technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}