import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart } from "@/components/ui/chart";
import DemoRequestForm from "@/components/DemoRequestForm";
import { useState } from "react";
import { 
  BarChart as BarChartIcon, 
  Clock, 
  DollarSign, 
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function AIBusinessManagers() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const metrics = [
    { label: "Tasks Automated", value: "2,734", icon: CheckCircle2 },
    { label: "Customer Satisfaction", value: "89%", icon: Users },
    { label: "Revenue Growth", value: "$250K", icon: DollarSign },
    { label: "Hours Saved Monthly", value: "120", icon: Clock },
  ];

  const chartData = [
    { name: 'Before AI', Revenue: 50000, TimeSaved: 20, Satisfaction: 65 },
    { name: 'After AI', Revenue: 300000, TimeSaved: 120, Satisfaction: 89 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-fadeIn">
          We Will Build AI Business Management Systems That Automate Your Operations
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fadeIn [animation-delay:200ms]">
          Get your business running on autopilot with AI-driven workflows, precision automations, and actionable insights. Save time, reduce errors, and focus on scaling your revenue.
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 h-auto rounded-full animate-fadeIn [animation-delay:400ms]"
          onClick={() => setIsDemoModalOpen(true)}
        >
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Custom AI Solutions</h3>
            <p className="text-muted-foreground">
              From automating customer communications to streamlining supply chain operations, we tailor solutions to fit your business needs.
            </p>
          </Card>
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
            <p className="text-muted-foreground">
              AI tools built directly into your existing systems like Monday.com, Slack, Salesforce, or HubSpot.
            </p>
          </Card>
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Enterprise Security</h3>
            <p className="text-muted-foreground">
              Powered by IBM technologies and fortified with enterprise-grade encryption.
            </p>
          </Card>
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Done-for-You Service</h3>
            <p className="text-muted-foreground">
              From setup to ongoing support, we handle everything while you watch your business thrive.
            </p>
          </Card>
        </div>
      </section>

      {/* Case Study */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">
            We Scaled Quick Prints to $300,000 in Monthly Revenue in 90 Days
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <div 
                key={metric.label}
                className="text-center animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <metric.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="h-80 w-full mb-8">
            <BarChart
              data={chartData}
              index="name"
              categories={["Revenue", "TimeSaved", "Satisfaction"]}
              colors={["blue", "green", "yellow"]}
              valueFormatter={(value) => {
                if (value >= 1000) return `$${value/1000}k`;
                return value.toString();
              }}
            />
          </div>
        </Card>
      </section>

      {/* Partner Logos */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-8">Trusted By Industry Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-2xl font-bold">IBM</div>
          <div className="text-2xl">Google</div>
          <div className="text-2xl">Microsoft</div>
          <div className="text-2xl">AWS</div>
          <div className="text-2xl">OpenAI</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Clients Are Saying</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-lg mb-4">
              "Their AI system helped us save over 20 hours a week while doubling our revenue. Truly a game-changer!"
            </p>
            <p className="font-semibold">- Quick Prints</p>
          </Card>
          <Card className="p-8">
            <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-lg mb-4">
              "With their custom automations, we now manage thousands of customer interactions seamlessly. Highly recommend!"
            </p>
            <p className="font-semibold">- CloudGrow Solutions</p>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Get an AI Business Management System Built for You in 7 Days
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Let us build and integrate your custom AI workflows—tailored to automate your most tedious operations, scale faster, and deliver outstanding results.
        </p>
        <Button 
          size="lg"
          className="text-lg px-8 py-6 h-auto rounded-full"
          onClick={() => setIsDemoModalOpen(true)}
        >
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Demo Request Form Modal */}
      <DemoRequestForm 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}