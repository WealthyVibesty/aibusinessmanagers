import { Shield, Lock, FileCheck } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function HIPAACompliant() {
  const features = [
    {
      title: "HIPAA Compliance",
      description: "Built to meet HIPAA and other healthcare regulations",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Data Security",
      description: "Encrypts all data and interactions for maximum security",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Regular Audits",
      description: "Regularly audited to ensure ongoing compliance",
      icon: <FileCheck className="w-6 h-6" />
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
      <SEO 
        title="HIPAA-Compliant Solutions: Secure, Trusted AI for Healthcare"
        description="Protect patient data and meet strict compliance standards with our secure AI solutions."
        path="/hipaa-compliant"
      />
      
      <SolutionHero 
        title="HIPAA-Compliant Solutions: Secure, Trusted AI for Healthcare"
        subtitle="Protect patient data and meet strict compliance standards with our secure AI solutions."
        ctaText="Secure Your Patient Data"
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