import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Calendar, User, Mail, Phone, Building, MessageSquare } from "lucide-react";

interface StrategyCallFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StrategyCallForm({ isOpen, onClose }: StrategyCallFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [challenges, setChallenges] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    console.log("Strategy Call request submitted:", { name, email, phone, company, challenges });
    
    toast({
      title: "Strategy Call Request Received!",
      description: "We'll contact you shortly to schedule your call.",
    });

    onClose();
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setChallenges("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Schedule Your Free Strategy Call</DialogTitle>
          <DialogDescription className="text-center text-base">
            Book your 30-minute consultation to discuss how AI can transform your operations
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10"
              required
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="pl-10"
              required
            />
          </div>

          <div className="relative">
            <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Textarea
              placeholder="What challenges would you like to discuss? (optional)"
              value={challenges}
              onChange={(e) => setChallenges(e.target.value)}
              className="pl-10 min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full py-6 text-lg">
            Schedule My Strategy Call
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}