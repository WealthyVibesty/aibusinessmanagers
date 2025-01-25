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
    defaultSystemPrompt: "You are an AI assistant for a healthcare facility. Be professional, empathetic, and HIPAA-compliant. Maintain patient confidentiality at all times. Never provide medical advice, only general information about services and procedures. Use a caring and supportive tone. If patients mention urgent medical concerns, always direct them to call emergency services or contact their healthcare provider immediately."
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
    defaultSystemPrompt: "You are an AI assistant for a restaurant. Be warm, enthusiastic, and knowledgeable about food and dining. Highlight special dietary accommodations and popular dishes. Handle reservations professionally and be precise about wait times. For food allergies, always recommend speaking directly with staff. Maintain an upbeat, service-oriented tone and emphasize the dining experience."
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
    defaultSystemPrompt: "You are an AI assistant for a luxury hotel. Maintain a sophisticated, courteous tone at all times. Focus on guest comfort and satisfaction. Be knowledgeable about all amenities, local attractions, and services. Handle special requests diplomatically and always aim to exceed guest expectations. For complex situations, offer to connect guests with a human staff member."
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
    defaultSystemPrompt: "You are an AI assistant for a transportation company. Be clear and precise about schedules, routes, and pricing. Prioritize safety and reliability in your responses. Provide accurate ETAs and booking information. For service disruptions or delays, be proactive with alternatives. Maintain a professional, efficient tone and always confirm important details."
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
    defaultSystemPrompt: "You are an AI assistant for a financial institution. Maintain strict professionalism and compliance with financial regulations. Never provide specific investment advice or make promises about returns. Be clear about terms, conditions, and fees. For complex financial matters, always recommend consulting with a qualified financial advisor. Use precise, clear language and avoid technical jargon unless necessary."
  }
];

export default function Demo() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("healthcare");
  const [systemPrompt, setSystemPrompt] = useState<string>(industries[0].defaultSystemPrompt);
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'user' | 'ai'; text: string }>>([]);
  const [metrics, setMetrics] = useState({ responseTime: "2 seconds", satisfaction: "97%" });
  const [isConfiguring, setIsConfiguring] = useState(true);
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
            Interactive AI Business Assistant Demo
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience our AI assistant in action. Try both text and voice interactions!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4 mt-6"
          >
            <Button
              variant="outline"
              onClick={() => setShowCustomization(!showCustomization)}
              className="flex items-center gap-2"
            >
              <Building className="h-4 w-4" />
              {showCustomization ? 'Hide Customization' : 'Customize AI Assistant'}
            </Button>
          </motion.div>
        </div>

        {showCustomization && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DemoCustomizationForm
              onSave={handleBusinessDetailsSave}
              initialIndustry={selectedIndustry}
            />
          </motion.div>
        )}

        <div className="space-y-6 px-4">
          {isConfiguring && (
            <Card className="p-4 sm:p-6 bg-white shadow-md border border-gray-100">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Settings className="h-5 w-5 text-blue-500" />
                  System Configuration
                </h3>
                <Textarea
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  placeholder="Enter system prompt to customize AI behavior..."
                  className="min-h-[100px] bg-white border-gray-200"
                />
              </div>
            </Card>
          )}

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
        </div>

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
