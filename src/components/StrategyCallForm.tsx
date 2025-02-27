
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Calendar, User, Mail, Phone, Building, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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

    try {
      console.log("Saving strategy call form submission...");
      const { error } = await supabase
        .from('form_submissions')
        .insert([
          {
            form_type: 'strategy_call',
            data: { name, email, phone, company, challenges }
          }
        ]);

      if (error) throw error;

      console.log("Strategy call form saved successfully");
      toast({
        title: "Strategy Call Request Received!",
        description: "We'll contact you shortly to discuss your business challenges.",
      });

      onClose();
      resetForm();
    } catch (error) {
      console.error("Error saving strategy call request:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
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
      <DialogContent className="max-w-[95vw] w-full sm:max-w-[500px] p-4 sm:p-6 mx-4 rounded-lg">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center">Book a Strategy Call</DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base">
            Let's discuss your business challenges and how we can help
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            <Input
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-9 sm:pl-10 text-sm sm:text-base h-10 sm:h-12"
              required
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-9 sm:pl-10 text-sm sm:text-base h-10 sm:h-12"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            <Input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="pl-9 sm:pl-10 text-sm sm:text-base h-10 sm:h-12"
              required
            />
          </div>

          <div className="relative">
            <Building className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            <Input
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="pl-9 sm:pl-10 text-sm sm:text-base h-10 sm:h-12"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            <Textarea
              placeholder="What challenges are you looking to solve?"
              value={challenges}
              onChange={(e) => setChallenges(e.target.value)}
              className="pl-9 sm:pl-10 text-sm sm:text-base min-h-[80px] sm:min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full py-2 sm:py-6 text-base sm:text-lg h-auto">
            Schedule Strategy Call
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
