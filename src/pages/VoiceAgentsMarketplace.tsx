import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Stethoscope, Brain, Heart, Pill, Hospital, 
  Dumbbell, BookOpen, Home, Baby, Smile, Apple, 
  Ambulance, ArrowRight, Search, Microscope
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const healthcareNiches = [
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
    id: 'cardiology', 
    name: 'Cardiology', 
    icon: <Heart className="h-6 w-6" />,
    description: 'Streamline cardiac care and patient monitoring.',
    route: '/cardiology'
  },
  { 
    id: 'obgyn', 
    name: 'OB/GYN', 
    icon: <Baby className="h-6 w-6" />,
    description: 'Enhance prenatal care and patient communication.',
    route: '/ob-gyn'
  },
  { 
    id: 'dermatology', 
    name: 'Dermatology', 
    icon: <Smile className="h-6 w-6" />,
    description: 'Optimize dermatology practice management.',
    route: '/dermatology'
  },
  { 
    id: 'dental', 
    name: 'Dental Care', 
    icon: <Smile className="h-6 w-6" />,
    description: 'Streamline dental practice operations.',
    route: '/dental-care'
  },
  { 
    id: 'pediatrics', 
    name: 'Pediatrics', 
    icon: <Baby className="h-6 w-6" />,
    description: 'Enhance pediatric care delivery.',
    route: '/pediatrics'
  },
  { 
    id: 'emergency', 
    name: 'Emergency Services', 
    icon: <Ambulance className="h-6 w-6" />,
    description: 'Optimize emergency response coordination.',
    route: '/emergency-services'
  },
  { 
    id: 'rehabilitation', 
    name: 'Rehabilitation', 
    icon: <Dumbbell className="h-6 w-6" />,
    description: 'Streamline rehabilitation programs.',
    route: '/rehabilitation'
  },
  { 
    id: 'diagnostic-imaging', 
    name: 'Diagnostic Imaging', 
    icon: <Microscope className="h-6 w-6" />,
    description: 'Enhance imaging center operations.',
    route: '/diagnostic-imaging'
  },
  { 
    id: 'elderly-care', 
    name: 'Elderly Care', 
    icon: <Home className="h-6 w-6" />,
    description: 'Optimize senior care coordination.',
    route: '/elderly-care'
  },
  { 
    id: 'pharmaceuticals', 
    name: 'Pharmaceuticals', 
    icon: <Pill className="h-6 w-6" />,
    description: 'Streamline pharmacy operations.',
    route: '/pharmaceuticals'
  },
  { 
    id: 'hospitals', 
    name: 'Hospitals & Health Systems', 
    icon: <Hospital className="h-6 w-6" />,
    description: 'Comprehensive hospital management solutions.',
    route: '/industries/hospitals-health-systems'
  },
  { 
    id: 'clinics', 
    name: 'Clinics & Private Practices', 
    icon: <Stethoscope className="h-6 w-6" />,
    description: 'Optimize clinic workflows and patient communication.',
    route: '/industries/clinics-private-practices'
  }
];

export default function VoiceAgentsMarketplace() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredNiches = healthcareNiches.filter(niche => 
    niche.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    niche.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEO 
        title="Healthcare AI Voice Agents Marketplace" 
        description="Explore AI voice agents for healthcare. Streamline patient communication, automate scheduling & improve care delivery across medical specialties."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI Voice Agents for Healthcare
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Transform patient care and streamline operations with AI solutions tailored for healthcare providers.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for your healthcare specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Niches Grid */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNiches.map((niche) => (
              <Card 
                key={niche.id}
                className="p-6 hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => navigate(niche.route)}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      {niche.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">
                        {niche.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{niche.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Practice?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Join healthcare leaders who are revolutionizing patient care with AI voice technology.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/checkout")}
            className="text-lg px-8 py-6 h-auto"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}