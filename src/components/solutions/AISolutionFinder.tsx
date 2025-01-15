import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Bot } from "lucide-react";

interface Question {
  id: string;
  text: string;
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: "industry",
    text: "What type of business are you in?",
    options: [
      { value: "healthcare", label: "Healthcare" },
      { value: "ecommerce", label: "eCommerce" },
      { value: "real-estate", label: "Real Estate" },
      { value: "services", label: "Services" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "painPoint",
    text: "What's the biggest challenge you're facing?",
    options: [
      { value: "customer-service", label: "Overwhelmed customer service" },
      { value: "missed-leads", label: "Missed leads" },
      { value: "inefficient-followups", label: "Inefficient follow-ups" },
      { value: "engagement", label: "Need better engagement" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "channel",
    text: "How do you primarily interact with customers?",
    options: [
      { value: "phone", label: "Phone calls" },
      { value: "sms", label: "SMS" },
      { value: "social", label: "Social media" },
      { value: "website", label: "Website" },
      { value: "all", label: "All of the above" },
    ],
  },
  {
    id: "budget",
    text: "Do you have a specific budget in mind for AI solutions?",
    options: [
      { value: "low", label: "Less than $1,000" },
      { value: "medium", label: "1,000–$5,000" },
      { value: "high", label: "$5,000+" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
];

interface AISolutionFinderProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AISolutionFinder({ isOpen, onClose }: AISolutionFinderProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAnswer = (value: string) => {
    const question = questions[currentQuestion];
    setAnswers(prev => ({ ...prev, [question.id]: value }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      generateRecommendation();
    }
  };

  const generateRecommendation = () => {
    console.log("Generating recommendation based on answers:", answers);
    
    // Simple recommendation logic based on answers
    let primarySolution = "";
    let additionalSolutions = [];

    if (answers.channel === "phone" || answers.painPoint === "customer-service") {
      primarySolution = "AI Voice Assistant";
      additionalSolutions.push("CRM Integration");
    }
    
    if (answers.channel === "social" || answers.painPoint === "engagement") {
      primarySolution = "Instagram Automation";
      additionalSolutions.push("SMS Marketing");
    }
    
    if (answers.painPoint === "missed-leads") {
      primarySolution = "AI Chatbot";
      additionalSolutions.push("Lead Generation System");
    }

    const recommendation = `
      Based on your needs, we recommend starting with our ${primarySolution} solution.
      This will help you automate customer interactions and save significant time.
      
      Additional recommendations:
      ${additionalSolutions.join(", ")}
      
      Would you like to see a demo of how this would work for your business?
    `;

    setRecommendation(recommendation);
  };

  const handleRequestDemo = () => {
    console.log("Requesting demo with answers:", answers);
    onClose();
    navigate("/checkout");
    toast({
      title: "Demo Request Received",
      description: "We'll be in touch shortly to schedule your personalized demo.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            AI Solution Finder
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          {!recommendation ? (
            <div className="space-y-6">
              <h3 className="text-lg font-medium">
                {questions[currentQuestion].text}
              </h3>
              <RadioGroup
                onValueChange={handleAnswer}
                className="space-y-3"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="whitespace-pre-line text-gray-700">
                {recommendation}
              </div>
              <Button 
                onClick={handleRequestDemo}
                className="w-full"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}