import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";

export default function TaskAutomation() {
  const features = [
    {
      title: "Appointment Management",
      description: "Automate reminders and prescription refill requests"
    },
    {
      title: "Insurance Verification",
      description: "Handle eligibility checks and billing inquiries automatically"
    },
    {
      title: "Follow-up System",
      description: "Send personalized follow-ups via multiple channels"
    }
  ];

  const steps = [
    {
      title: "Task Identification",
      description: "AI identifies repetitive tasks in your workflow"
    },
    {
      title: "Automation Setup",
      description: "Tasks are automated with precision and reliability"
    },
    {
      title: "Staff Optimization",
      description: "Your team focuses on high-value patient care"
    }
  ];

  const benefits = [
    {
      title: "50% Less Workload",
      description: "Dramatically reduce manual task burden on staff"
    },
    {
      title: "Better Adherence",
      description: "Improve patient compliance with automated reminders"
    },
    {
      title: "Cost Savings",
      description: "Save time and money by automating routine processes"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="Task Automation: Free Your Team from Repetitive Work"
        subtitle="Automate routine tasks like appointment reminders, insurance checks, and follow-ups."
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