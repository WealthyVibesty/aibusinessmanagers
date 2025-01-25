import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface ContactCaptureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ContactCaptureDialog({ isOpen, onClose, onSuccess }: ContactCaptureDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  // Hide ElevenLabs widget on component mount
  useState(() => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.add('hidden');
      console.log('Hiding AI assistant on dialog mount');
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log("Saving contact form submission...");
      const { error } = await supabase
        .from('form_submissions')
        .insert([
          {
            form_type: 'contact_capture',
            data: { name, email, phone }
          }
        ]);

      if (error) throw error;
      
      console.log("Contact form submission saved successfully");
      toast({
        title: "Thank you!",
        description: "Your information has been saved.",
      });

      // Close dialog and trigger success callback
      onClose();
      onSuccess();

      // Show AI assistant after successful form submission
      setTimeout(() => {
        const widget = document.querySelector('elevenlabs-convai');
        if (widget) {
          widget.classList.remove('hidden');
          console.log('Opening AI assistant after contact capture');
        }
      }, 1000); // Small delay to ensure dialog is closed first
    } catch (error) {
      console.error("Error saving form submission:", error);
      toast({
        title: "Error",
        description: "There was a problem saving your information. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-2 border-gray-200 shadow-xl rounded-xl">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold text-gray-900 text-center">
            Have Our Assistant Reach Out To You For a Demo
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600 text-center">
            Put your information below
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-4">
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
          >
            Continue
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}