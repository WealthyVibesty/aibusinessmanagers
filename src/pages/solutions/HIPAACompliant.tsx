import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import { Shield, Lock, FileCheck } from "lucide-react";

export default function HIPAACompliant() {
  const features = [
    {
      title: "HIPAA Compliance",
      description: "Built to meet HIPAA and other healthcare regulations"
    },
    {
      title: "Data Security",
      description: "Encrypts all data and interactions for maximum security"
    },
    {
      title: "Regular Audits",
      description: "Regularly audited to ensure ongoing compliance"
    }
  ];

  const steps = [
    {
      title: "Secure Handling",
      description: "AI handles patient interactions while encrypting all data"
    },
    {
      title: "Compliance Checks",
      description: "Regular audits ensure compliance with healthcare regulations"
    },
    {
      title: "Data Protection",
      description: "Your patient data is always protected and secure"
    }
  ];

  const benefits = [
    {
      title: "Full Compliance",
      description: "Ensures compliance with HIPAA and other regulations"
    },
    {
      title: "Patient Trust",
      description: "Protects patient privacy and builds trust"
    },
    {
      title: "Risk Reduction",
      description: "Reduces risk of data breaches and penalties"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="HIPAA-Compliant Solutions: Secure, Trusted AI for Healthcare"
        subtitle="Protect patient data and meet strict compliance standards with our secure AI solutions."
        ctaText="Ready to Transform Your Customer Service?"
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