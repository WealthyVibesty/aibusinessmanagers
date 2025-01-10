import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Clock, ChartBar, Users } from "lucide-react";

export default function TaskAutomation() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Task Automation: Free Your Team from Repetitive Work
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Automate routine tasks like appointment reminders, insurance checks, and follow-ups.
        </p>
        <Button size="lg" className="gap-2">
          See How It Works <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 border rounded-lg shadow-sm">
          <Clock className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Appointment Management</h3>
          <p className="text-gray-600">
            Automates appointment reminders and prescription refill requests.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <ChartBar className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Insurance Processing</h3>
          <p className="text-gray-600">
            Handles insurance eligibility checks and billing inquiries.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <Users className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Patient Follow-ups</h3>
          <p className="text-gray-600">
            Sends personalized follow-ups via voice, SMS, or email.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Task Identification</h3>
            <p className="text-gray-600">
              AI identifies repetitive tasks in your workflow.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Automation Setup</h3>
            <p className="text-gray-600">
              Automates these tasks, ensuring they're completed accurately and on time.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Team Focus</h3>
            <p className="text-gray-600">
              Your team is freed to focus on high-value patient care.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <Bot className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">50% Workload Reduction</h3>
            <p className="text-gray-600">
              Reduces staff workload by automating routine tasks.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <Users className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Improved Adherence</h3>
            <p className="text-gray-600">
              Improves patient adherence with timely reminders.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <Clock className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Time & Cost Savings</h3>
            <p className="text-gray-600">
              Saves time and money by automating manual processes.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-primary/5 rounded-xl p-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Automate Your Routine Tasks?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          See how our task automation can transform your healthcare operations.
        </p>
        <Button size="lg" className="gap-2">
          See How It Works <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}