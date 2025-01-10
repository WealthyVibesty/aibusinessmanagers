import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";

export default function ProactiveEngagement() {
  const features = [
    {
      title: "Automated Reminders",
      description: "Automated appointment reminders and prescription refill alerts"
    },
    {
      title: "Multi-Channel Communication",
      description: "Personalized follow-ups via voice, SMS, or email"
    },
    {
      title: "Engagement Tracking",
      description: "Reduces no-show rates and improves patient adherence"
    }
  ];

  const steps = [
    {
      title: "Engagement Planning",
      description: "AI identifies key touchpoints for patient engagement"
    },
    {
      title: "Communication",
      description: "Sends automated, personalized messages to keep patients informed"
    },
    {
      title: "Optimization",
      description: "Tracks patient responses and adjusts communication as needed"
    }
  ];

  const benefits = [
    {
      title: "Better Attendance",
      description: "Reduces no-show rates by up to 30%"
    },
    {
      title: "Patient Satisfaction",
      description: "Improves satisfaction with timely, personalized communication"
    },
    {
      title: "Better Outcomes",
      description: "Enhances patient outcomes with better adherence to care plans"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="Proactive Patient Engagement: Keep Patients Informed and Engaged"
        subtitle="Automate reminders, follow-ups, and personalized communication to improve patient outcomes."
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