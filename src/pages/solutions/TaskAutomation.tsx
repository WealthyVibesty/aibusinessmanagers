import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function TaskAutomation() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDemoClick = () => {
    // Show the AI assistant
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.remove('hidden');
    }

    // Show toast with Pay Now button
    toast({
      title: "Let's get started!",
      description: (
        <div className="flex flex-col gap-4">
          <p>Our AI assistant is here to help you. Feel free to ask any questions!</p>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Pay Now
          </button>
        </div>
      )
    });
  };

  const features = [
    {
      title: "Appointment Management",
      description: "Automates appointment reminders and prescription refill requests"
    },
    {
      title: "Insurance Processing",
      description: "Handles insurance eligibility checks and billing inquiries"
    },
    {
      title: "Follow-up Automation",
      description: "Sends personalized follow-ups via voice, SMS, or email"
    }
  ];

  const steps = [
    {
      title: "Task Identification",
      description: "AI identifies repetitive tasks in your workflow"
    },
    {
      title: "Automation Setup",
      description: "Automates these tasks, ensuring they're completed accurately and on time"
    },
    {
      title: "Team Focus",
      description: "Your team is freed to focus on high-value patient care"
    }
  ];

  const benefits = [
    {
      title: "Reduced Workload",
      description: "Reduces staff workload by up to 50%"
    },
    {
      title: "Better Adherence",
      description: "Improves patient adherence with timely reminders"
    },
    {
      title: "Cost Savings",
      description: "Saves time and money by automating manual processes"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="Task Automation: Free Your Team from Repetitive Work"
        subtitle="Automate routine tasks like appointment reminders, insurance checks, and follow-ups"
        ctaText="Automate Your Routine Tasks"
        ctaAction={handleDemoClick}
      />
      
      <FeatureList 
        title="Key Features"
        features={features}
      />
      
      <HowItWorks steps={steps} />
      
      <FeatureList 
        title="Benefits"
        features={benefits}
      />
    </div>
  );
}