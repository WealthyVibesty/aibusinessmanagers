
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
        title: "Strategy