import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Hotel, Building2, Car, Utensils, Calculator } from "lucide-react";
import { motion } from "framer-motion";

type Industry = {
  id: string;
  name: string;
  icon: JSX.Element;
  questions: string[];
};

const industries: Industry[] = [
  {
    id: "hospitality",
    name: "Hospitality",
    icon: <Hotel className="h-6 w-6" />,
    questions: [
      "What are your check-in and check-out times?",
      "Do you have availability for next weekend?",
      "Can I book a room with a sea view?",
      "Do you offer airport shuttles?",
      "What is your cancellation policy?"
    ]
  },
  {
    id: "property",
    name: "Property Management",
    icon: <Building2 className="h-6 w-6" />,
    questions: [
      "How do I submit a maintenance request?",
      "What is the process for renewing my lease?",
      "Can I schedule a property tour?",
      "What is included in my rent?",
      "How do I report a noise complaint?"
    ]
  },
  // ... Add other industries similarly
];

export default function Demo() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'user' | 'ai'; text: string }>>([]);
  const [metrics, setMetrics] = useState({ responseTime: "2 seconds", satisfaction: "97%" });

  const handleIndustrySelect = (value: string) => {
    setSelectedIndustry(value);
    setChatMessages([]);
    // Add initial greeting
    const industry = industries.find(i => i.id === value);
    if (industry) {
      setChatMessages([{
        type: 'ai',
        text: `Welcome! I'm your AI assistant for ${industry.name}. How can I help you today?`
      }]);
    }
  };

  const handleQuestionClick = (question: string) => {
    // Add user question
    setChatMessages(prev => [...prev, { type: 'user', text: question }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        type: 'ai',
        text: `Here's a helpful response about "${question}" tailored to your industry. This is where the AI would provide specific, relevant information.`
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <motion.div 
        className="max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Test the Power of AI Business Managers</h1>
          <p className="text-xl text-gray-600">
            Choose your industry to see how our AI can handle your business needs.
          </p>
        </div>

        <Card className="p-6">
          <Select onValueChange={handleIndustrySelect}>
            <SelectTrigger>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry.id} value={industry.id}>
                  <div className="flex items-center gap-2">
                    {industry.icon}
                    <span>{industry.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Card>

        {selectedIndustry && (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Common Questions</h3>
                <div className="grid gap-2">
                  {industries.find(i => i.id === selectedIndustry)?.questions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start text-left"
                      onClick={() => handleQuestionClick(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Chat Simulation</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Response Time</p>
                  <p className="text-lg font-semibold">{metrics.responseTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Customer Satisfaction</p>
                  <p className="text-lg font-semibold">{metrics.satisfaction}</p>
                </div>
              </div>
            </Card>

            <div className="text-center space-y-4">
              <Button size="lg" className="w-full sm:w-auto">
                Request a Full Custom Demo
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Pricing Plans
              </Button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}