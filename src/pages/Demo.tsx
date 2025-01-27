import React, { useState, useMemo, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircuitBoard, Cpu, MessageSquare, Timer, Gauge, Settings, Mic, MicOff, Send, HelpCircle, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { useConversation } from "@11labs/react";
import DemoRequestForm from "@/components/DemoRequestForm";
import DemoCustomizationForm from "@/components/DemoCustomizationForm";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <CircuitBoard className="h-6 w-6 text-blue-500" />,
    questions: [
      "What are your patient care hours?",
      "How do I schedule an appointment?",
      "Do you accept my insurance?",
      "What specialists do you have?",
      "How do I access my medical records?"
    ],
    defaultSystemPrompt: `You are an AI assistant for [PRACTICE_NAME], a healthcare facility specializing in [SPECIALTIES]. 
Be professional, empathetic, and HIPAA-compliant. Maintain patient confidentiality at all times.
Key services include: [KEY_SERVICES]
Location and hours: [LOCATION_AND_HOURS]
Insurance accepted: [INSURANCE_LIST]

Never provide medical advice, only general information about services and procedures.
Use a caring and supportive tone. If patients mention urgent medical concerns, always direct them to call emergency services or contact their healthcare provider immediately.

For appointments, direct patients to: [BOOKING_METHOD]
For medical records requests: [RECORDS_PROCESS]`
  },
  {
    id: "restaurants",
    name: "Restaurants",
    icon: <Cpu className="h-6 w-6 text-orange-500" />,
    questions: [
      "What are your hours of operation?",
      "Do you take reservations?",
      "What's on the menu?",
      "Do you offer delivery?",
      "Are you available for private events?"
    ],
    defaultSystemPrompt: `You are an AI assistant for [RESTAURANT_NAME], a [CUISINE_TYPE] restaurant.
Key offerings: [SIGNATURE_DISHES]
Dietary accommodations: [DIETARY_OPTIONS]
Hours of operation: [BUSINESS_HOURS]
Location: [LOCATION]

Be warm and enthusiastic about our menu and dining experience.
Reservation policy: [RESERVATION_POLICY]
Delivery options: [DELIVERY_OPTIONS]
Private events: [EVENT_CAPABILITIES]

For food allergies, always recommend speaking directly with our staff.
Special features: [SPECIAL_FEATURES]`
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: <CircuitBoard className="h-6 w-6 text-purple-500" />,
    questions: [
      "What are your check-in/check-out times?",
      "Do you have room service?",
      "What amenities do you offer?",
      "Is parking available?",
      "Do you have conference facilities?"
    ],
    defaultSystemPrompt: `You are an AI assistant for [PROPERTY_NAME], a [PROPERTY_TYPE] property.
Location: [LOCATION]
Check-in/out times: [CHECK_TIMES]
Room types: [ROOM_TYPES]

Key amenities include: [AMENITIES]
Dining options: [DINING_OPTIONS]
Parking information: [PARKING_DETAILS]
Special services: [SPECIAL_SERVICES]

Maintain a sophisticated, courteous tone at all times.
For special requests: [SPECIAL_REQUEST_PROCESS]
For group bookings: [GROUP_BOOKING_PROCESS]`
  },
  {
    id: "transportation",
    name: "Transportation",
    icon: <Cpu className="h-6 w-6 text-green-500" />,
    questions: [
      "What are your service routes?",
      "How do I book a ride?",
      "What are your rates?",
      "Do you offer corporate accounts?",
      "What's your cancellation policy?"
    ],
    defaultSystemPrompt: `You are an AI assistant for [COMPANY_NAME], a transportation service provider.
Service areas: [SERVICE_AREAS]
Vehicle types: [VEHICLE_TYPES]
Booking methods: [BOOKING_METHODS]

Standard rates: [RATE_STRUCTURE]
Corporate services: [CORPORATE_OPTIONS]
Cancellation policy: [CANCELLATION_POLICY]

Be clear and precise about schedules, routes, and pricing.
Safety protocols: [SAFETY_MEASURES]
Special accommodations: [SPECIAL_ACCOMMODATIONS]`
  },
  {
    id: "finance",
    name: "Finance",
    icon: <CircuitBoard className="h-6 w-6 text-emerald-500" />,
    questions: [
      "What financial services do you offer?",
      "How do I open an account?",
      "What are your interest rates?",
      "Do you offer investment advice?",
      "How do I apply for a loan?"
    ],
    defaultSystemPrompt: `You are an AI assistant for [INSTITUTION_NAME], a financial services provider.
Key services: [SERVICES_OFFERED]
Account types: [ACCOUNT_TYPES]
Investment products: [INVESTMENT_PRODUCTS]

Maintain strict professionalism and compliance with financial regulations.
Never provide specific investment advice or make promises about returns.
Account opening process: [ACCOUNT_PROCESS]
Required documentation: [REQUIRED_DOCS]

For complex financial matters, always recommend consulting with: [ADVISOR_CONTACT]
Service hours: [SERVICE_HOURS]`
  },
  {
    id: "real_estate",
    name: "Real Estate",
    icon: <Building className="h-6 w-6 text-blue-500" />,
    questions: [
      "What properties do you have available?",
      "How do I schedule a viewing?",
      "What are your commission rates?",
      "Do you handle rentals?",
      "What areas do you serve?"
    ],
    defaultSystemPrompt: `You are an AI assistant for [AGENCY_NAME], a real estate agency serving [SERVICE_AREAS].
Specializations: [PROPERTY_TYPES]
Services offered: [SERVICES_LIST]
Areas served: [COVERAGE_AREAS]

Property search process: [SEARCH_PROCESS]
Viewing arrangements: [VIEWING_PROCESS]
Commission structure: [COMMISSION_DETAILS]

Be professional and knowledgeable about property listings and market trends.
Never make specific investment recommendations.
For valuations contact: [VALUATION_CONTACT]
For legal matters refer to: [LEGAL_CONTACT]`
  }
];

const industrySystemPrompts = {
  healthcare: `You are an AI Business Manager for a [HEALTHCARE_FACILITY_NAME], specializing in [SPECIALTIES].

Key Automation Capabilities:
- Appointment scheduling and reminders
- Patient intake and documentation
- Insurance verification
- Follow-up care coordination
- Medical record requests
- Prescription refill requests

Voice Agent Features:
- HIPAA-compliant conversations
- Multi-language support
- Emergency situation protocols
- Integration with [EMR_SYSTEM]
- Appointment confirmation workflows
- Patient satisfaction surveys

Business Hours: [OPERATING_HOURS]
Location: [FACILITY_LOCATION]
Insurance Networks: [INSURANCE_LIST]
Special Services: [SPECIAL_SERVICES]

Always maintain HIPAA compliance and direct urgent medical concerns to emergency services.`,

  restaurants: `You are an AI Business Manager for [RESTAURANT_NAME], a [CUISINE_TYPE] restaurant.

Key Automation Capabilities:
- Reservation management
- Online order processing
- Table wait time estimates
- Customer feedback collection
- Delivery coordination
- Special event bookings

Voice Agent Features:
- Menu item recommendations
- Dietary restriction handling
- Order modifications
- Loyalty program integration
- Peak hour management
- Special requests handling

Hours: [BUSINESS_HOURS]
Location: [RESTAURANT_LOCATION]
Delivery Radius: [DELIVERY_AREA]
Special Features: [RESTAURANT_FEATURES]

For food allergies, always recommend speaking directly with staff.`,

  hospitality: `You are an AI Business Manager for [PROPERTY_NAME], a [PROPERTY_TYPE] establishment.

Key Automation Capabilities:
- Reservation management
- Check-in/out automation
- Concierge services
- Room service coordination
- Maintenance requests
- Guest experience monitoring

Voice Agent Features:
- 24/7 guest assistance
- Multi-language support
- Service request routing
- Local recommendations
- Special occasion planning
- Transportation arrangements

Check-in/out: [CHECK_TIMES]
Amenities: [AMENITY_LIST]
Services: [SERVICE_LIST]
Special Features: [PROPERTY_FEATURES]

Maintain professional courtesy and escalate complex requests to human staff.`,

  transportation: `You are an AI Business Manager for [COMPANY_NAME], a transportation service provider.

Key Automation Capabilities:
- Ride scheduling
- Route optimization
- Fleet management
- Driver dispatch
- Real-time tracking
- Fare calculations

Voice Agent Features:
- 24/7 booking assistance
- ETA updates
- Driver-passenger matching
- Special needs accommodation
- Multiple stop coordination
- Emergency support

Service Area: [SERVICE_AREA]
Vehicle Types: [VEHICLE_LIST]
Special Services: [SPECIAL_SERVICES]
Operating Hours: [HOURS_OF_OPERATION]

Prioritize safety and provide accurate ETAs.`,

  finance: `You are an AI Business Manager for [INSTITUTION_NAME], a financial services provider.

Key Automation Capabilities:
- Account inquiries
- Transaction monitoring
- Appointment scheduling
- Document requests
- Payment processing
- Investment updates

Voice Agent Features:
- Secure authentication
- Transaction verification
- Product recommendations
- Market updates
- Fraud prevention
- Regulatory compliance

Services: [SERVICE_LIST]
Products: [PRODUCT_LIST]
Hours: [BUSINESS_HOURS]
Compliance: [COMPLIANCE_FRAMEWORK]

Never provide specific investment advice. Direct complex inquiries to licensed advisors.`,

  real_estate: `You are an AI Business Manager for [AGENCY_NAME], a real estate agency.

Key Automation Capabilities:
- Property listing management
- Viewing scheduling
- Lead qualification
- Document processing
- Market analysis
- Client communications

Voice Agent Features:
- 24/7 property information
- Viewing coordination
- Price negotiations
- Document preparation
- Market trend updates
- Client preference tracking

Areas Served: [SERVICE_AREAS]
Property Types: [PROPERTY_TYPES]
Services: [SERVICE_LIST]
Specializations: [SPECIALIZATIONS]

Never make specific investment recommendations. Direct legal matters to licensed professionals.`
};

export default function Demo() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("healthcare");
  const [systemPrompt, setSystemPrompt] = useState<string>(industries[0].defaultSystemPrompt);
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'user' | 'ai'; text: string }>>([]);
  const [metrics, setMetrics] = useState({ responseTime: "2 seconds", satisfaction: "97%" });
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [showCustomization, setShowCustomization] = useState(false);
  const isMobile = useIsMobile();

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to ElevenLabs voice service");
      toast.success("Voice assistant connected successfully");
    },
    onDisconnect: () => {
      console.log("Disconnected from ElevenLabs voice service");
      setIsVoiceEnabled(false);
      toast.info("Voice assistant disconnected");
    },
    onError: (error) => {
      console.error("ElevenLabs error:", error);
      toast.error("Voice assistant error. Please try again.");
      setIsVoiceEnabled(false);
    },
    overrides: {
      agent: {
        prompt: {
          prompt: systemPrompt,
        },
        firstMessage: `Hello! I'm your AI assistant for ${selectedIndustry}. How can I help you today?`,
        language: "en",
      },
      tts: {
        voiceId: "EXAVITQu4vr4xnSDxMaL", // Sarah voice
      },
    },
  });

  const handleIndustrySelect = (value: string) => {
    setSelectedIndustry(value);
    const industry = industries.find(i => i.id === value);
    if (industry) {
      setSystemPrompt(industry.defaultSystemPrompt);
      setChatMessages([{
        type: 'ai',
        text: `Welcome! I'm your AI assistant for ${industry.name}. How can I help you today?`
      }]);
    }
  };

  const handleVoiceToggle = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      if (isVoiceEnabled) {
        widget.classList.add('animate-fadeOut');
        setTimeout(() => {
          widget.classList.add('hidden');
          toast("AI Assistant Hidden", {
            description: "Click the button to bring it back anytime!",
            duration: 3000,
          });
        }, 300);
        setIsVoiceEnabled(false);
      } else {
        widget.classList.remove('hidden');
        widget.classList.add('animate-scale');
        console.log('Showing AI assistant');
        setIsVoiceEnabled(true);
        toast("AI Assistant Ready", {
          description: "You can now speak with our AI!",
          duration: 3000,
        });
      }
    } else {
      console.error('ElevenLabs widget not found');
      toast("Error", {
        description: "Could not find AI assistant widget",
        duration: 3000,
      });
    }
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    try {
      setIsLoading(true);
      console.log('Sending message:', userInput);
      setChatMessages(prev => [...prev, { type: 'user', text: userInput }]);
      
      const startTime = Date.now();
      const { data, error } = await supabase.functions.invoke('chat-completion', {
        body: {
          prompt: userInput,
          systemPrompt,
          messages: chatMessages.map(msg => ({
            role: msg.type === 'user' ? 'user' : 'assistant',
            content: msg.text
          }))
        }
      });

      if (error) {
        console.error('Error from chat-completion:', error);
        throw error;
      }

      console.log('Received response:', data);
      const responseTime = ((Date.now() - startTime) / 1000).toFixed(1);
      setMetrics(prev => ({ ...prev, responseTime: `${responseTime} seconds` }));

      setChatMessages(prev => [...prev, {
        type: 'ai',
        text: data.response
      }]);
      setUserInput("");

    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to get AI response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBusinessDetailsSave = (details: any) => {
    setSelectedIndustry(details.industry);
    setSystemPrompt(details.custom_prompt || industries.find(i => i.id === details.industry)?.defaultSystemPrompt || '');
    setShowCustomization(false);
    
    // Update chat messages with personalized greeting
    setChatMessages([{
      type: 'ai',
      text: `Welcome to ${details.business_name}! I'm your AI assistant. How can I help you today?`
    }]);
  };

  useEffect(() => {
    if (selectedIndustry) {
      setSystemPrompt(industrySystemPrompts[selectedIndustry as keyof typeof industrySystemPrompts] || '');
    }
  }, [selectedIndustry]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6">
      <motion.div 
        className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-4 pt-20">
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold text-gray-800 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Interactive AI Business Managers Demo
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience our AI assistant in action. Try both text and voice interactions!
          </motion.p>

          {/* Add video placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mt-8"
          >
            <p className="text-2xl font-semibold text-gray-500">Coming Soon</p>
          </motion.div>
          
        </div>

        <Card className="p-4 sm:p-6 bg-white shadow-md border border-gray-100">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                Interactive Chat
              </h3>
            </div>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto rounded-lg bg-gray-50 p-4">
              {chatMessages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white shadow-sm border border-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center space-x-2 max-w-[85%] sm:max-w-[80%] p-3 rounded-lg bg-white shadow-sm border border-gray-100">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-blue-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-blue-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-blue-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            <div className="flex gap-2">
              <Textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message here..."
                className="min-h-[50px] bg-white border-gray-200 resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !userInput.trim()}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6 bg-white shadow-md border border-gray-100">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Mic className="h-5 w-5 text-blue-500" />
                Voice Assistant Controls
              </h3>
              {isVoiceEnabled && (
                <motion.div
                  className="h-3 w-3 rounded-full bg-green-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleVoiceToggle}
                className={`w-full sm:w-auto font-semibold py-6 px-8 h-auto text-lg ${
                  isVoiceEnabled 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white`}
              >
                {isVoiceEnabled ? (
                  <>
                    <MicOff className="h-5 w-5 mr-3" />
                    End Voice Call
                  </>
                ) : (
                  <>
                    <Mic className="h-5 w-5 mr-3" />
                    Start Voice Call
                  </>
                )}
              </Button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              {isVoiceEnabled 
                ? "Voice assistant is active. Speak naturally to interact."
                : "Click the button above to start a voice conversation."}
            </p>
          </div>
        </Card>

        <Card className="p-4 sm:p-6 bg-white shadow-md border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Response Time</p>
                <p className="text-lg font-semibold text-gray-800">{metrics.responseTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm text-gray-500">Customer Satisfaction</p>
                <p className="text-lg font-semibold text-gray-800">{metrics.satisfaction}</p>
              </div>
            </div>
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center py-8"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsDemoFormOpen(true)}
          >
            <span className="mr-2">✨</span>
            Get Full Version
            <span className="ml-2">→</span>
          </Button>
          <p className="text-sm text-gray-600 mt-3">
            Unlock all features and unlimited conversations
          </p>
        </motion.div>

        <DemoRequestForm 
          isOpen={isDemoFormOpen}
          onClose={() => setIsDemoFormOpen(false)}
        />
      </motion.div>
    </div>
  );
}
