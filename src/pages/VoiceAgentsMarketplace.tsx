import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Stethoscope, Brain, Heart, Baby, Pill, Hospital, Bandage, Microscope, Syringe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function VoiceAgentsMarketplace() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Helper function to handle navigation
  const handleNavigation = (route: string) => {
    // List of available routes
    const availableRoutes = [
      '/primary-care',
      '/mental-health',
      '/voice-agents-marketplace',
      '/pediatrics',
      '/pharmaceuticals',
      '/industries/hospitals-health-systems',
      '/medical-research',
      '/emergency-services',
      '/diagnostic-imaging',
      '/telemedicine',
      '/dental-care',
      '/elderly-care',
      '/rehabilitation',
      '/oncology',
      '/ob-gyn',
      '/public-health',
      '/surgical-practices',
      '/home-healthcare',
      '/nutrition-wellness'
    ];

    // If route is not available, redirect to checkout
    if (!availableRoutes.includes(route)) {
      console.log(`Route ${route} not available, redirecting to checkout`);
      navigate('/checkout');
    } else {
      navigate(route);
    }
  };

  const niches = [
    {
      id: 1,
      title: "Primary Care",
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
      title: "Hospitals & Health Systems",
      description: "Improve patient experience and operational efficiency",
      icon: <Hospital className="h-8 w-8" />,
      route: "/industries/hospitals-health-systems"
    },
    {
      id: 7,
      title: "Medical Research",
      description: "Streamline research participant communication",
      icon: <Microscope className="h-8 w-8" />,
      route: "/medical-research"
    },
    {
      id: 8,
      title: "Emergency Services",
      description: "Enhance emergency response and patient triage",
      icon: <Bandage className="h-8 w-8" />,
      route: "/emergency-services"
    },
    {
      id: 9,
      title: "Diagnostic Imaging",
      description: "Schedule imaging appointments and manage results",
      icon: <Syringe className="h-8 w-8" />,
      route: "/diagnostic-imaging"
    },
    {
      id: 10,
      title: "Telemedicine",
      description: "Virtual care coordination and patient engagement",
      icon: <Stethoscope className="h-8 w-8" />,
      route: "/telemedicine"
    },
    {
      id: 11,
      title: "Dermatology",
      description: "Manage cosmetic consultations and patient care",
      icon: <Microscope className="h-8 w-8" />,
      route: "/dermatology"
    },
    {
      id: 12,
      title: "Dental Care",
      description: "Streamline dental practice operations",
      icon: <Hospital className="h-8 w-8" />,
      route: "/dental-care"
    },
    {
      id: 13,
      title: "Elderly Care",
      description: "Coordinate senior care and support",
      icon: <Heart className="h-8 w-8" />,
      route: "/elderly-care"
    },
    {
      id: 14,
      title: "Rehabilitation",
      description: "Track progress and manage therapy schedules",
      icon: <Stethoscope className="h-8 w-8" />,
      route: "/rehabilitation"
    },
    {
      id: 15,
      title: "Oncology",
      description: "Coordinate cancer care and treatment plans",
      icon: <Microscope className="h-8 w-8" />,
      route: "/oncology"
    },
    {
      id: 16,
      title: "OB/GYN",
      description: "Manage women's health and prenatal care",
      icon: <Baby className="h-8 w-8" />,
      route: "/ob-gyn"
    },
    {
      id: 17,
      title: "Radiology",
      description: "Streamline imaging workflows and results",
      icon: <Syringe className="h-8 w-8" />,
      route: "/radiology"
    },
    {
      id: 18,
      title: "Public Health",
      description: "Coordinate community health initiatives",
      icon: <Hospital className="h-8 w-8" />,
      route: "/public-health"
    },
    {
      id: 19,
      title: "Chronic Disease Management",
      description: "Monitor and support long-term patient care",
      icon: <Heart className="h-8 w-8" />,
      route: "/chronic-disease"
    },
    {
      id: 20,
      title: "Surgical Practices",
      description: "Optimize surgical scheduling and follow-up care",
      icon: <Bandage className="h-8 w-8" />,
      route: "/surgical-practices"
    },
    {
      id: 21,
      title: "Health Insurance",
      description: "Streamline claims and member support",
      icon: <Pill className="h-8 w-8" />,
      route: "/health-insurance"
    },
    {
      id: 22,
      title: "Home Healthcare",
      description: "Coordinate in-home care services",
      icon: <Heart className="h-8 w-8" />,
      route: "/home-healthcare"
    },
    {
      id: 23,
      title: "Patient Support",
      description: "Enhance patient communication and care",
      icon: <Stethoscope className="h-8 w-8" />,
      route: "/patient-support"
    },
    {
      id: 24,
      title: "Nutrition & Wellness",
      description: "Manage dietary consultations and guidance",
      icon: <Brain className="h-8 w-8" />,
      route: "/nutrition-wellness"
    }
  ];

  const filteredNiches = niches.filter(niche =>
    niche.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    niche.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredNiches.map((niche) => (
              <Card 
                key={niche.id}
                className="p-6 hover:shadow-lg transition-all group cursor-pointer bg-white border border-gray-200 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
                <div className="flex flex-col gap-4 flex-grow">
                  <div className="text-primary bg-primary/10 w-fit p-3 rounded-lg">
                    {niche.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {niche.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {niche.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      onClick={() => handleNavigation(niche.route)}
                      className="w-full"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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