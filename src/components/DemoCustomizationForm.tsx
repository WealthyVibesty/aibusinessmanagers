import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Building, Upload, Save } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

interface BusinessDetails {
  industry: string;
  business_name: string;
  business_size: string;
  target_audience: string;
  key_services: string[];
  custom_prompt: string;
  file_urls: string[];
}

interface DemoCustomizationFormProps {
  onSave: (details: BusinessDetails) => void;
  initialIndustry?: string;
}

export default function DemoCustomizationForm({ onSave, initialIndustry }: DemoCustomizationFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [businessDetails, setBusinessDetails] = useState<BusinessDetails>({
    industry: initialIndustry || "",
    business_name: "",
    business_size: "",
    target_audience: "",
    key_services: [],
    custom_prompt: "",
    file_urls: []
  });
  const { toast } = useToast();

  useEffect(() => {
    loadExistingDetails();
  }, []);

  const loadExistingDetails = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('business_details')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      if (data) {
        setBusinessDetails(data);
      }
    } catch (error) {
      console.error('Error loading business details:', error);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsLoading(true);
    const newFileUrls = [...businessDetails.file_urls];

    try {
      for (const file of files) {
        const fileExt = file.name.split('.').pop();
        const filePath = `${crypto.randomUUID()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('business_files')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('business_files')
          .getPublicUrl(filePath);

        newFileUrls.push(publicUrl);
      }

      setBusinessDetails(prev => ({
        ...prev,
        file_urls: newFileUrls
      }));

      toast({
        title: "Files uploaded successfully",
        description: `${files.length} file(s) have been uploaded.`
      });
    } catch (error) {
      console.error('Error uploading files:', error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your files.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user logged in');

      const { error } = await supabase
        .from('business_details')
        .upsert({
          user_id: user.id,
          ...businessDetails
        });

      if (error) throw error;

      // Subscribe to Mailchimp
      const { error: mailchimpError } = await supabase.functions.invoke('mailchimp-subscribe', {
        body: {
          email: user.email,
          businessName: businessDetails.business_name,
          industry: businessDetails.industry,
          businessSize: businessDetails.business_size,
          formType: 'demo_customization'
        }
      });

      if (mailchimpError) throw mailchimpError;

      toast({
        title: "Settings saved",
        description: "Your business details have been saved successfully."
      });

      onSave(businessDetails);
    } catch (error) {
      console.error('Error saving business details:', error);
      toast({
        title: "Save failed",
        description: "There was an error saving your business details.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Business Name</label>
          <Input
            placeholder="Enter your business name"
            value={businessDetails.business_name}
            onChange={(e) => setBusinessDetails(prev => ({
              ...prev,
              business_name: e.target.value
            }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Industry</label>
          <Select
            value={businessDetails.industry}
            onValueChange={(value) => setBusinessDetails(prev => ({
              ...prev,
              industry: value
            }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="restaurants">Restaurants</SelectItem>
              <SelectItem value="hospitality">Hospitality</SelectItem>
              <SelectItem value="transportation">Transportation</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Business Size</label>
          <Select
            value={businessDetails.business_size}
            onValueChange={(value) => setBusinessDetails(prev => ({
              ...prev,
              business_size: value
            }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your business size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-1000">201-1000 employees</SelectItem>
              <SelectItem value="1000+">1000+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Target Audience</label>
          <Input
            placeholder="Describe your target audience"
            value={businessDetails.target_audience}
            onChange={(e) => setBusinessDetails(prev => ({
              ...prev,
              target_audience: e.target.value
            }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Key Services (comma-separated)</label>
          <Input
            placeholder="Enter your key services"
            value={businessDetails.key_services.join(', ')}
            onChange={(e) => setBusinessDetails(prev => ({
              ...prev,
              key_services: e.target.value.split(',').map(s => s.trim())
            }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Custom AI Prompt (Optional)</label>
          <Textarea
            placeholder="Customize how the AI should interact with your customers"
            value={businessDetails.custom_prompt}
            onChange={(e) => setBusinessDetails(prev => ({
              ...prev,
              custom_prompt: e.target.value
            }))}
            className="min-h-[100px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Upload Business Files</label>
          <div className="mt-2">
            <label className="flex flex-col items-center px-4 py-6 border-2 border-dashed rounded-md hover:bg-gray-50 cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">
                Click to upload business documents
              </span>
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileUpload}
                disabled={isLoading}
              />
            </label>
          </div>
          {businessDetails.file_urls.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Uploaded Files:</h4>
              <ul className="text-sm text-gray-500">
                {businessDetails.file_urls.map((url, index) => (
                  <li key={index} className="truncate">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      File {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className="flex items-center gap-2"
        >
          <Save className="h-4 w-4" />
          {isLoading ? 'Saving...' : 'Save Settings'}
        </Button>
      </div>
    </Card>
  );
}