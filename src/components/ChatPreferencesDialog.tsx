import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";
import { useNavigate } from "react-router-dom";

interface ChatPreferencesDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ChatPreferencesDialog({ isOpen, onClose, onSuccess }: ChatPreferencesDialogProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [role, setRole] = useState("");
  const [goals, setGoals] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !industry) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!user) {
      console.log("User not authenticated, redirecting to login");
      toast({
        title: "Please log in",
        description: "You need to be logged in to save your preferences.",
        variant: "destructive",
      });
      onClose();
      navigate("/login");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Saving chat preferences...");
      const { error } = await supabase
        .from('chat_preferences')
        .upsert([
          {
            user_id: user.id,
            name,
            company,
            industry,
            role,
            goals,
            preferences: {}
          }
        ]);

      if (error) throw error;

      console.log("Chat preferences saved successfully");
      toast({
        title: "Preferences Saved",
        description: "Your chat preferences have been saved successfully.",
      });

      onSuccess();
      onClose();
      resetForm();
    } catch (error) {
      console.error("Error saving chat preferences:", error);
      toast({
        title: "Error",
        description: "There was a problem saving your preferences. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName("");
    setCompany("");
    setIndustry("");
    setRole("");
    setGoals("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-6 bg-white border-2 border-gray-200 shadow-xl rounded-xl">
        <DialogHeader className="space-y-3 text-center">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Customize Your Chat Experience
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-4">
            <div>
              <Input
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                required
                disabled={isSubmitting}
              />
            </div>
          
            <div>
              <Input
                placeholder="Company Name (Optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Select value={industry} onValueChange={setIndustry} required>
                <SelectTrigger className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                  <SelectValue placeholder="Select Industry *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="restaurants">Restaurants</SelectItem>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="transportation">Transportation</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="real_estate">Real Estate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Input
                placeholder="Your Role (Optional)"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Textarea
                placeholder="What are your goals for using our AI assistant? (Optional)"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                className="min-h-[100px] bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save Preferences'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}