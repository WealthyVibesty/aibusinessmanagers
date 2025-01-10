import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, BarChart2, Clock, Users, Shield, Activity } from "lucide-react";
import Header from "@/components/landing/Header";
import FooterSection from "@/components/landing/sections/FooterSection";

export default function HospitalOperationsLanding() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="container px-4 pt-20 pb-16 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 animate-slideUp">
            Transform Hospital Operations with AI Voice Agents
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slideUp max-w-3xl mx-auto" style={{ animationDelay: "100ms" }}>
            Streamline hospital communications, automate routine tasks, and enhance patient care with intelligent voice assistants that understand healthcare workflows
          </p>
          <Button size="lg" className="animate-slideUp" style={{ animationDelay: "200ms" }}>
            Try Voice Agents Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        {/* Key Benefits Section */}
        <section className="container px-4 py-16 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Voice Agents Transform Hospital Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Automated Patient Communications",
                description: "Voice agents handle appointment scheduling, reminders, and follow-ups, reducing administrative burden"
              },
              {
                icon: <BarChart2 className="h-8 w-8 text-primary" />,
                title: "Streamlined Staff Coordination",
                description: "Enable instant voice-activated updates and team coordination across departments"
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "24/7 Information Access",
                description: "Provide staff with voice-activated access to protocols, schedules, and patient information"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Enhanced Safety Protocols",
                description: "Voice-activated emergency protocols and real-time safety procedure updates"
              },
              {
                icon: <Activity className="h-8 w-8 text-primary" />,
                title: "Efficient Resource Management",
                description: "Voice-controlled inventory tracking and resource allocation systems"
              },
              {
                icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                title: "Improved Patient Experience",
                description: "Instant response to patient requests and automated care coordination"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-4 py-16 mx-auto bg-muted rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Voice-Enabled Hospital Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Voice-activated bed management and capacity updates",
              "Hands-free staff scheduling and task assignment",
              "Voice-controlled inventory and supply chain management",
              "Real-time voice reporting of patient flow analytics",
              "Voice-enabled equipment maintenance requests",
              "Instant emergency response coordination",
              "Voice-activated performance reporting",
              "Seamless integration with hospital systems"
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-16 mx-auto text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-primary text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hospital Operations?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join leading healthcare institutions using AI voice agents to improve operational efficiency by up to 40%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Watch Demo
              </Button>
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}