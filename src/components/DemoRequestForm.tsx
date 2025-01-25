import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Calendar, User, Mail, Phone, Building, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Current auth state:", user ? "Authenticated" : "Not authenticated");
      
      console.log("Saving demo request form submission...");
      const { error: supabaseError } = await supabase
        .from('form_submissions')
        .insert([
          {
            form_type: 'demo_request',
            user_id: user?.id,
            data: { name, email, phone, company, message }
          }
        ]);

      if (supabaseError) {
        console.error("Supabase error details:", supabaseError);
        throw supabaseError;
      }

      // Subscribe to Mailchimp
      console.log("Subscribing to Mailchimp...");
      const { error: mailchimpError } = await supabase.functions.invoke('mailchimp-subscribe', {
        body: {
          email,
          firstName: name.split(' ')[0],
          lastName: name.split(' ').slice(1).join(' '),
          phone,
          company,
          formType: 'demo_request'
        }
      });

      if (mailchimpError) throw mailchimpError;

      console.log("Form submission completed successfully");
      toast({
        title: "Demo Request Received!",
        description: "We'll contact you shortly to schedule your demo.",
      });

      onClose();
      resetForm();
    } catch (error) {
      console.error("Error processing form submission:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
      <DialogContent className="sm:max-w-[500px] p-6 bg-white border-2 border-gray-200 shadow-xl rounded-xl">
        <DialogHeader className="space-y-3 text-center">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Schedule Your Free Personalized Custom Demo
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            See how our AI solution can transform your business operations
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                required
                disabled={isSubmitting}
              />
            </div>
          
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="tel"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="relative">
              <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="pl-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                disabled={isSubmitting}
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Textarea
                placeholder="Tell us about your needs (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pl-10 min-h-[100px] bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Schedule Demo'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}