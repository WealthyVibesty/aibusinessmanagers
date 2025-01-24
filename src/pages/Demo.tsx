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
import { CircuitBoard, Cpu, MessageSquare, Timer, Gauge } from "lucide-react";
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
    icon: <CircuitBoard className="h-6 w-6 text-blue-500" />,
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
    icon: <Cpu className="h-6 w-6 text-purple-500" />,
    questions: [
      "How do I submit a maintenance request?",
      "What is the process for renewing my lease?",
      "Can I schedule a property tour?",
      "What is included in my rent?",
      "How do I report a noise complaint?"
    ]
  },
];

export default function Demo() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'user' | 'ai'; text: string }>>([]);
  const [metrics, setMetrics] = useState({ responseTime: "2 seconds", satisfaction: "97%" });

  const handleIndustrySelect = (value: string) => {
    setSelectedIndustry(value);
    setChatMessages([]);
    const industry = industries.find(i => i.id === value);
    if (industry) {
      setChatMessages([{
        type: 'ai',
        text: `Welcome! I'm your AI assistant for ${industry.name}. How can I help you today?`
      }]);
    }
  };

  const handleQuestionClick = (question: string) => {
    setChatMessages(prev => [...prev, { type: 'user', text: question }]);
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        type: 'ai',
        text: `Here's a helpful response about "${question}" tailored to your industry. This is where the AI would provide specific, relevant information.`
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-6">
      <motion.div 
        className="max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-4">
          <motion.h1 
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Test the Power of AI Business Managers
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Choose your industry to see how our AI can handle your business needs.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 bg-slate-800/50 backdrop-blur-lg border-slate-700">
            <Select onValueChange={handleIndustrySelect}>
              <SelectTrigger className="w-full bg-slate-700/50 border-slate-600">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                {industries.map((industry) => (
                  <SelectItem key={industry.id} value={industry.id}>
                    <div className="flex items-center gap-2">
                      {industry.icon}
                      <span className="text-gray-200">{industry.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Card>
        </motion.div>

        {selectedIndustry && (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-6 bg-slate-800/50 backdrop-blur-lg border-slate-700">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                  Common Questions
                </h3>
                <div className="grid gap-2">
                  {industries.find(i => i.id === selectedIndustry)?.questions.map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 hover:border-slate-500 transition-all duration-300"
                        onClick={() => handleQuestionClick(question)}
                      >
                        {question}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800/50 backdrop-blur-lg border-slate-700">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">Chat Simulation</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {chatMessages.map((message, index) => (
                    <motion.div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-700 text-gray-200'
                        }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800/50 backdrop-blur-lg border-slate-700">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Response Time</p>
                    <p className="text-lg font-semibold text-gray-200">{metrics.responseTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Customer Satisfaction</p>
                    <p className="text-lg font-semibold text-gray-200">{metrics.satisfaction}</p>
                  </div>
                </div>
              </div>
            </Card>

            <motion.div 
              className="text-center space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Request a Full Custom Demo
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-600 text-gray-200 hover:bg-slate-700">
                View Pricing Plans
              </Button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}