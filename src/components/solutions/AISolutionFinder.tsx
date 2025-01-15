import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Bot } from "lucide-react";

interface AISolutionFinderProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: string;
  text: string;
  options?: { value: string; label: string }[];
  type: 'single' | 'multiple' | 'text';
}

const questions: Question[] = [
  {
    id: "industry",
    text: "What type of business are you in?",
    type: 'text',
  },
  {
    id: "painPoint",
    text: "What are the biggest challenges you're facing? (Select all that apply)",
    type: 'multiple',
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
    text: "How do you primarily interact with customers? (Select all that apply)",
    type: 'multiple',
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
    type: 'single',
    options: [
      { value: "low", label: "Less than $1,000" },
      { value: "medium", label: "1,000–$5,000" },
      { value: "high", label: "$5,000+" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
];

export default function AISolutionFinder({ isOpen, onClose }: AISolutionFinderProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleTextInput = (value: string) => {
    const question = questions[currentQuestion];
    setAnswers(prev => ({ ...prev, [question.id]: value }));
  };

  const handleSingleSelect = (value: string) => {
    const question = questions[currentQuestion];
    setAnswers(prev => ({ ...prev, [question.id]: value }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      generateRecommendation();
    }
  };

  const handleMultiSelect = (value: string) => {
    const question = questions[currentQuestion];
    setAnswers(prev => {
      const currentAnswers = (prev[question.id] as string[]) || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(v => v !== value)
        : [...currentAnswers, value];
      return { ...prev, [question.id]: newAnswers };
    });
  };

  const handleNextForMultiSelect = () => {
    const question = questions[currentQuestion];
    const currentAnswers = (answers[question.id] as string[]) || [];
    
    if (currentAnswers.length === 0) {
      toast({
        title: "Please select at least one option",
        variant: "destructive",
      });
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      generateRecommendation();
    }
  };

  const handleNextForText = () => {
    const question = questions[currentQuestion];
    const currentAnswer = answers[question.id] as string;
    
    if (!currentAnswer?.trim()) {
      toast({
        title: "Please enter your business type",
        variant: "destructive",
      });
      return;
    }

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

    const painPoints = answers.painPoint as string[];
    const channels = answers.channel as string[];

    if (channels?.includes("phone") || painPoints?.includes("customer-service")) {
      primarySolution = "AI Voice Assistant";
      additionalSolutions.push("CRM Integration");
    }
    
    if (channels?.includes("social") || painPoints?.includes("engagement")) {
      primarySolution = "Instagram Automation";
      additionalSolutions.push("SMS Marketing");
    }
    
    if (painPoints?.includes("missed-leads")) {
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

  const currentQuestionData = questions[currentQuestion];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-8"> {/* Increased max-width and padding */}
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl"> {/* Increased text size */}
            <Bot className="h-6 w-6" />
            AI Solution Finder
          </DialogTitle>
        </DialogHeader>

        <div className="py-8"> {/* Increased vertical padding */}
          {!recommendation ? (
            <div className="space-y-8"> {/* Increased spacing */}
              <h3 className="text-xl font-medium mb-6"> {/* Increased text size and margin */}
                {currentQuestionData.text}
              </h3>
              
              {currentQuestionData.type === 'text' ? (
                <div className="space-y-6">
                  <Input
                    placeholder="Enter your business type"
                    value={(answers[currentQuestionData.id] as string) || ''}
                    onChange={(e) => handleTextInput(e.target.value)}
                    className="w-full text-lg p-6" /* Increased text size and padding */
                  />
                  <Button 
                    onClick={handleNextForText}
                    className="w-full text-lg py-6" /* Increased button size */
                  >
                    Next
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              ) : currentQuestionData.type === 'single' ? (
                <RadioGroup
                  onValueChange={handleSingleSelect}
                  className="space-y-4"
                >
                  {currentQuestionData.options?.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 cursor-pointer"> {/* Added padding and hover effect */}
                      <RadioGroupItem value={option.value} id={option.value} className="h-5 w-5" /> {/* Increased radio size */}
                      <Label htmlFor={option.value} className="text-lg cursor-pointer flex-grow"> {/* Increased text size and made full width clickable */}
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4">
                    {currentQuestionData.options?.map((option) => (
                      <div 
                        key={option.value} 
                        className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleMultiSelect(option.value)}
                      >
                        <Checkbox
                          id={option.value}
                          checked={(answers[currentQuestionData.id] as string[] || []).includes(option.value)}
                          onCheckedChange={() => handleMultiSelect(option.value)}
                          className="h-5 w-5" /* Increased checkbox size */
                        />
                        <Label htmlFor={option.value} className="text-lg cursor-pointer flex-grow"> {/* Increased text size */}
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={handleNextForMultiSelect}
                    className="w-full text-lg py-6" /* Increased button size */
                  >
                    Next
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              <div className="whitespace-pre-line text-lg text-gray-700"> {/* Increased text size */}
                {recommendation}
              </div>
              <Button 
                onClick={handleRequestDemo}
                className="w-full text-lg py-6" /* Increased button size */
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}