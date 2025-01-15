import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Stethoscope, Brain, Heart, Baby, Pill, Apple, Activity, Hospital, Bandage, Microscope, Bone, Eye, Tooth, Home, Syringe, Thermometer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const niches = [
  {
    id: 1,
    title: "General Practice",
    description: "Streamline patient communication and appointment scheduling",
    icon: <Stethoscope className="h-8 w-8" />,
    route: "/primary-care"
  },
  {
    id: 2,
    title: "Mental Health",
    description: "Support patients with 24/7 care and appointment management",
    icon: <Brain className="h-8 w-8" />,
    route: "/mental-health"
  },
  {
    id: 3,
    title: "Cardiology",
    description: "Monitor patient care and manage follow-ups efficiently",
    icon: <Heart className="h-8 w-8" />,
    route: "/cardiology"
  },
  {
    id: 4,
    title: "Pediatrics",
    description: "Enhance parent communication and vaccination scheduling",
    icon: <Baby className="h-8 w-8" />,
    route: "/pediatrics"
  },
  {
    id: 5,
    title: "Pharmaceuticals",
    description: "Automate prescription refills and medication information",
    icon: <Pill className="h-8 w-8" />,
    route: "/pharmaceuticals"
  },
  {
    id: 6,
    title: "Nutrition & Wellness",
    description: "Schedule consultations and provide dietary guidance",
    icon: <Apple className="h-8 w-8" />,
    route: "/nutrition-wellness"
  },
  {
    id: 7,
    title: "Medical Research",
    description: "Streamline research participant communication and data collection",
    icon: <Microscope className="h-8 w-8" />,
    route: "/medical-research"
  },
  {
    id: 8,
    title: "Hospitals & Clinics",
    description: "Improve patient experience and operational efficiency",
    icon: <Hospital className="h-8 w-8" />,
    route: "/industries/hospitals-health-systems"
  },
  {
    id: 9,
    title: "Emergency Care",
    description: "Enhance emergency response and patient triage",
    icon: <Bandage className="h-8 w-8" />,
    route: "/emergency-services"
  },
  {
    id: 10,
    title: "Orthopedics",
    description: "Manage appointments and rehabilitation schedules",
    icon: <Bone className="h-8 w-8" />,
    route: "/rehabilitation"
  },
  {
    id: 11,
    title: "Dental Care",
    description: "Streamline dental practice operations and patient care",
    icon: <Tooth className="h-8 w-8" />,
    route: "/dental-care"
  },
  {
    id: 12,
    title: "Home Healthcare",
    description: "Coordinate care teams and patient support",
    icon: <Home className="h-8 w-8" />,
    route: "/home-healthcare"
  },
  {
    id: 13,
    title: "Elderly Care",
    description: "Manage senior care and family communication",
    icon: <Activity className="h-8 w-8" />,
    route: "/elderly-care"
  },
  {
    id: 14,
    title: "Diagnostic Imaging",
    description: "Schedule imaging appointments and manage results",
    icon: <Eye className="h-8 w-8" />,
    route: "/diagnostic-imaging"
  },
  {
    id: 15,
    title: "Telemedicine",
    description: "Virtual care coordination and patient engagement",
    icon: <Thermometer className="h-8 w-8" />,
    route: "/telemedicine"
  }
];

const filterNiches = (query: string) => {
  return niches.filter(niche =>
    niche.title.toLowerCase().includes(query.toLowerCase()) ||
    niche.description.toLowerCase().includes(query.toLowerCase())
  );
};

export default function VoiceAgentsMarketplace() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNiches = filterNiches(searchQuery);

  const handleDemoClick = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.remove('hidden');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEO 
        title="Healthcare AI Voice Agents Marketplace" 
        description="Explore AI voice agents for healthcare. Streamline patient communication, automate scheduling & improve care delivery across medical specialties."
      />
      
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            AI Voice Agents for Healthcare
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover specialized AI voice agents designed for different healthcare specialties
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search healthcare specialties..."
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Healthcare Niches Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNiches.map((niche) => (
              <Card 
                key={niche.id}
                className="p-6 hover:shadow-lg transition-all group cursor-pointer bg-white border border-gray-200 relative overflow-hidden"
                onClick={() => navigate(niche.route)}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
                <div className="flex flex-col gap-4">
                  <div className="text-primary bg-primary/10 w-fit p-3 rounded-lg">
                    {niche.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {niche.title}
                    </h3>
                    <p className="text-gray-600">
                      {niche.description}
                    </p>
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
          <p className="text-xl text-gray-600 mb-8">
            Join leading healthcare providers using AI voice agents to improve patient care and operational efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate("/checkout")}
              className="text-lg px-8"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleDemoClick}
              className="text-lg px-8"
            >
              Try Live Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}