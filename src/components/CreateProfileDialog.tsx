import { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Plus, ArrowLeft, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BusinessBasicsStep } from "./profile/BusinessBasicsStep";
import { TargetAudienceStep } from "./profile/TargetAudienceStep";
import { MarketingDetailsStep } from "./profile/MarketingDetailsStep";
import { ProfileFormData } from "./profile/types";

const steps = [
  {
    title: "Business Basics",
    description: "Tell us about your business fundamentals to help us understand your organization better.",
  },
  {
    title: "Target Audience",
    description: "Define your ideal customer profile to create more targeted marketing strategies.",
  },
  {
    title: "Marketing Details",
    description: "Share your current marketing efforts and goals to receive tailored recommendations.",
  },
];

export default function CreateProfileDialog() {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const form = useForm<ProfileFormData>();

  const nextStep = () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = fields.every((field) => form.getValues(field as keyof ProfileFormData));
    
    if (!isValid) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before proceeding.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 0:
        return ["name", "industry", "companySize", "website"];
      case 1:
        return ["targetAge", "targetLocation", "targetInterests"];
      case 2:
        return ["currentChannels", "marketingBudget", "marketingGoals"];
      default:
        return [];
    }
  };

  const onSubmit = (data: ProfileFormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Profile Created",
      description: "Your AI marketing profile has been created successfully.",
    });
    setOpen(false);
    setCurrentStep(0);
    form.reset();
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <BusinessBasicsStep form={form} />;
      case 1:
        return <TargetAudienceStep form={form} />;
      case 2:
        return <MarketingDetailsStep form={form} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Create New Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{steps[currentStep].title}</DialogTitle>
        </DialogHeader>
        <div className="mb-4 text-sm text-muted-foreground">
          {steps[currentStep].description}
        </div>
        <div className="relative mb-6">
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 rounded">
            <div
              className="h-full bg-primary rounded transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {renderStepContent(currentStep)}
            <div className="flex justify-between space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={previousStep}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              {currentStep === steps.length - 1 ? (
                <Button type="submit">
                  Create Profile
                </Button>
              ) : (
                <Button type="button" onClick={nextStep}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}