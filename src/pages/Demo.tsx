import { useState } from "react";
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
import { CircuitBoard, Cpu, MessageSquare, Timer, Gauge, Settings, Mic, MicOff, Send, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { useConversation } from "@11labs/react";

type Industry = {
  id: string;
  name: string;
  icon: JSX.Element;
  questions: string[];
  defaultSystemPrompt: string;
};

const propertyManagementPrompt = `You are an AI voice assistant named Property Mate, designed to assist renters and potential tenants with their property-related needs at 444 NE 7th Street, Fort Lauderdale, Florida 33304. Your goal is to make the process of finding, leasing, and maintaining a rental property as smooth and stress-free as possible. Be friendly, helpful, and patient.`;

const industries: Industry[] = [
  {
    id: "hospitality",
    name: "Hospitality",
    icon: <CircuitBoard className="h-6 w-6 text-blue-500" />,
    questions: [
      "What are your check-in and check-out times?",
      "Do you have availability for next weekend?",
      "Can I book a room with a sea view?",
      "Do you offer airport shuttles?",
      "What is your cancellation policy?"
    ],
    defaultSystemPrompt: "You are an AI assistant for a luxury hotel. Be professional, courteous, and helpful. Provide detailed information about amenities and services."
  },
  {
    id: "property",
    name: "Property Management",
    icon: <Cpu className="h-6 w-6 text-purple-500" />,
    questions: [
      "Tell me about your available units",
      "What amenities do you offer?",
      "Can I schedule a property tour?",
      "What are your lease terms?",
      "Can you send me more information about the property?"
    ],
    defaultSystemPrompt: propertyManagementPrompt
  },
];

export default function Demo() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("property");
  const [systemPrompt, setSystemPrompt] = useState<string>(propertyManagementPrompt);
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'user' | 'ai'; text: string }>>([]);
  const [metrics, setMetrics] = useState({ responseTime: "2 seconds", satisfaction: "97%" });
  const [isConfiguring, setIsConfiguring] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [userInput, setUserInput] = useState("");
  const isMobile = useIsMobile();

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to ElevenLabs");
      toast("Connected to Property Mate voice assistant");
    },
    onDisconnect: () => {
      console.log("Disconnected from ElevenLabs");
      setIsVoiceEnabled(false);
    },
    onError: (error) => {
      console.error("ElevenLabs error:", error);
      toast.error("Failed to connect to the voice assistant. Please try again.");
    },
    overrides: {
      agent: {
        prompt: {
          prompt: propertyManagementPrompt,
        },
        firstMessage: "Hello! I'm PropertyMate, your friendly assistant for all things property-related. How can I help you today?",
        language: "en",
      },
      tts: {
        voiceId: "EXAVITQu4vr4xnSDxMaL", // Sarah voice
      },
    },
  });

  const handleIndustrySelect = (value: string) => {
    setSelectedIndustry(value);
    setChatMessages([]);
    const industry = industries.find(i => i.id === value);
    if (industry) {
      setSystemPrompt(industry.defaultSystemPrompt);
      setChatMessages([{
        type: 'ai',
        text: `Welcome! I'm your AI assistant for ${industry.name}. How can I help you today?`
      }]);
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

  const handleVoiceToggle = async () => {
    if (isVoiceEnabled) {
      await conversation.endSession();
      setIsVoiceEnabled(false);
      toast.success("Voice assistant disabled");
    } else {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        await conversation.startSession({
          agentId: "default_property_assistant",
        });
        setIsVoiceEnabled(true);
        toast.success("Voice assistant enabled - You can now speak with Property Mate");
      } catch (error) {
        console.error("Failed to start voice conversation:", error);
        toast.error("Please allow microphone access to use the voice assistant");
      }
    }
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
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="px-4"
        >
          <Card className="p-4 sm:p-6 bg-white shadow-md border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Select onValueChange={handleIndustrySelect} value={selectedIndustry}>
                <SelectTrigger className="w-full bg-white border-gray-200">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  {industries.map((industry) => (
                    <SelectItem key={industry.id} value={industry.id}>
                      <div className="flex items-center gap-2">
                        {industry.icon}
                        <span className="text-gray-700">{industry.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative group">
                  <Button
                    variant="outline"
                    onClick={handleVoiceToggle}
                    className="w-full sm:w-auto bg-white border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-gray-900 relative"
                  >
                    {isVoiceEnabled ? (
                      <>
                        <MicOff className="h-4 w-4 mr-2" />
                        Stop Voice
                      </>
                    ) : (
                      <>
                        <Mic className="h-4 w-4 mr-2" />
                        Start Voice
                      </>
                    )}
                  </Button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                    {isVoiceEnabled ? "Click to disable voice assistant" : "Click to enable voice assistant"}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsConfiguring(!isConfiguring)}
                  className="bg-white border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-gray-900"
                >
                  <Settings className="h-4 w-4" />
                </Button>

                <div className="relative group">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-gray-900"
                  >
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-full right-0 mb-2 p-4 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-64 z-50">
                    <h4 className="font-semibold mb-2">How to use voice chat:</h4>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Click "Start Voice" button</li>
                      <li>Allow microphone access when prompted</li>
                      <li>Speak clearly into your microphone</li>
                      <li>Click "Stop Voice" to end the conversation</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {selectedIndustry && (
          <motion.div 
            className="space-y-6 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
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
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
