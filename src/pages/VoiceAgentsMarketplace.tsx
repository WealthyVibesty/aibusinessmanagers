import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Stethoscope, Brain, Heart, Pill, Hospital, 
  Dumbbell, BookOpen, Home, Baby, Smile, Apple, 
  Ambulance
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const industries = [
  { 
    id: 'telemedicine', 
    name: 'Telemedicine', 
    icon: <Stethoscope className="h-6 w-6" />,
    description: 'Virtual consultations, appointment scheduling, and patient triage.',
    route: '/telemedicine'
  },
  { 
    id: 'mental-health', 
    name: 'Mental Health', 
    icon: <Brain className="h-6 w-6" />,
    description: 'Therapeutic conversation agents and crisis intervention tools.',
    route: '/mental-health'
  },
  { 
    id: 'chronic-disease', 
    name: 'Chronic Disease', 
    icon: <Heart className="h-6 w-6" />,
    description: 'Patient education and medication adherence.',
    route: '/chronic-disease'
  },
  { 
    id: 'pharmaceuticals', 
    name: 'Pharmaceuticals', 
    icon: <Pill className="h-6 w-6" />,
    description: 'Customer support and clinical trial assistance.',
    route: '/pharmaceuticals'
  },
  { 
    id: 'hospital', 
    name: 'Hospital Operations', 
    icon: <Hospital className="h-6 w-6" />,
    description: 'Patient intake and staff coordination.',
    route: '/hospital-operations'
  },
  { 
    id: 'rehabilitation', 
    name: 'Rehabilitation', 
    icon: <Dumbbell className="h-6 w-6" />,
    description: 'Exercise guidance and progress tracking.',
    route: '/rehabilitation'
  },
  { 
    id: 'research', 
    name: 'Medical Research', 
    icon: <BookOpen className="h-6 w-6" />,
    description: 'Data analysis and literature review.',
    route: '/medical-research'
  },
  { 
    id: 'home-healthcare', 
    name: 'Home Healthcare', 
    icon: <Home className="h-6 w-6" />,
    description: 'Remote monitoring and daily assistance.',
    route: '/home-healthcare'
  },
  { 
    id: 'pediatrics', 
    name: 'Pediatrics', 
    icon: <Baby className="h-6 w-6" />,
    description: 'Child-friendly interaction and parental support.',
    route: '/pediatrics'
  },
  { 
    id: 'dental', 
    name: 'Dental Care', 
    icon: <Smile className="h-6 w-6" />,
    description: 'Appointment management and patient education.',
    route: '/dental-care'
  },
  { 
    id: 'nutrition', 
    name: 'Nutrition & Wellness', 
    icon: <Apple className="h-6 w-6" />,
    description: 'Dietary guidance and fitness coaching.',
    route: '/nutrition-wellness'
  },
  { 
    id: 'emergency', 
    name: 'Emergency Services', 
    icon: <Ambulance className="h-6 w-6" />,
    description: 'First responder assistance and public alerts.',
    route: '/emergency-services'
  }
];

export default function VoiceAgentsMarketplace() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Industry Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideUp">
            Discover intelligent voice solutions tailored for your industry. 
            Transform operations and streamline workflows with cutting-edge AI technology.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Card 
                key={industry.id}
                className="p-6 hover:shadow-lg transition-all cursor-pointer animate-scale group"
                onClick={() => navigate(industry.route)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{industry.description}</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join industry leaders who are revolutionizing their operations with AI voice technology.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/checkout")}
            className="text-lg px-8 py-6 h-auto"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}