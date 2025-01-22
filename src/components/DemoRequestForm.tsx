import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Calendar, User, Mail, Phone, Building, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface DemoRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoRequestForm({ isOpen, onClose }: DemoRequestFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
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
      console.log("Saving demo request form submission...");
      const { error } = await supabase
        .from('form_submissions')
        .insert([
          {
            form_type: 'demo_request',
            data: { name, email, phone, company, message }
          }
        ]);

      if (error) throw error;

      console.log("Demo request form saved successfully");
      toast({
        title: "Demo Request Received!",
        description: "We'll contact you shortly to schedule your demo.",
      });

      onClose();
      resetForm();
    } catch (error) {
      console.error("Error saving demo request:", error);
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
    setMessage("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Schedule Your Free Demo</DialogTitle>
          <DialogDescription className="text-center text-base">
            See how our AI solution can transform your business operations
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
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
          </div>
          
          <div className="space-y-2">
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
          </div>

          <div className="space-y-2">
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
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Textarea
                placeholder="Tell us about your needs (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pl-10 min-h-[100px]"
              />
            </div>
          </div>

          <Button type="submit" className="w-full py-6 text-lg">
            Schedule Demo
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}