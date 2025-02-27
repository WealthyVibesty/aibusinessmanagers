
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, X, Download, BookOpen } from "lucide-react";

export default function AIEbookSales() {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <SEO
        title="AI Business Manager System Ebook - Run $100k+ Campaigns Effortlessly"
        description="New book reveals how anyone can use AI & automation to run profitable campaigns without being a tech expert. Get the AI Business Manager System for only $14.40."
        path="/ai-ebook"
      />

      <main className="container mx-auto px-4 pt-32 pb-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            New Book Reveals How Anyone Can Use AI & Automation To Run $100k+ Campaigns Effortlessly While Keeping Half For Themselves
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Without Being a Tech Expert, Funnel Builder, Ad Buyer, SEO Specialist, or Sales Closer—And You Can Do It Even If You're New To AI
          </p>
          
          <Card className="bg-blue-50 border-blue-200 mb-12">
            <CardContent className="p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                The AI Business Manager System Is The Shortcut To Building A 6+ Figure Business Without Spending Years Grinding
              </h2>
            </CardContent>
          </Card>
          
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 h-auto rounded-full animate-pulse"
            onClick={handlePurchase}
          >
            <Download className="mr-2 h-5 w-5" />
            Get The Book For Only $14.40
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        {/* Our Story Section */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg">
              Before we created the AI Business Manager model, we were known for helping business owners and entrepreneurs streamline operations and increase revenue with AI-driven solutions.
            </p>
            <p className="text-gray-700 text-lg">
              We built a solid business, but as time passed, managing operations, dealing with client requests, and keeping up with trends became overwhelming.
            </p>
            <p className="text-gray-700 text-lg">
              The old way of doing things—hiring a team, chasing clients, and spending long hours in the trenches—was leading straight to burnout.
            </p>
            <p className="text-gray-700 text-lg">
              I was exhausted. I barely had time for my personal life. Even when I was present, my mind was always preoccupied with work.
            </p>
            <p className="text-gray-700 text-lg">
              I thought working harder was the answer, but it only made things worse.
            </p>
            <p className="text-gray-700 text-lg">
              I was constantly troubleshooting, dealing with client churn, and stressing over inconsistent revenue.
            </p>
          </div>
        </section>

        {/* Discovery Section */}
        <section className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Then I Discovered A Better Way...
          </h2>
          <div className="prose prose-lg max-w-none text-left">
            <p className="text-gray-700 text-lg">
              After months of trial and error, investing over $500K into testing, and leveraging the latest advancements in AI, we perfected the AI Business Manager model—a way to run an agency without running yourself into the ground.
            </p>
            <p className="text-gray-700 text-lg">
              Instead of working harder, we let AI handle the heavy lifting.
            </p>
            <p className="text-gray-700 text-lg">
              We use AI-powered automations, voice agents, and smart workflows to optimize business processes for clients.
            </p>
            <p className="text-gray-700 text-lg">
              And now, you can do the same.
            </p>
          </div>
        </section>

        {/* Product Introduction */}
        <section className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Introducing The AI Business Manager System
          </h2>
          <div className="prose prose-lg max-w-none text-left">
            <p className="text-gray-700 text-lg">
              The AI Business Manager model allows you to land high-value clients—multi-million dollar businesses—and get them to hand over their biggest operational bottlenecks...
            </p>
            <p className="text-gray-700 text-lg">
              ...which you then automate using AI-powered systems that optimize sales, customer engagement, and business operations.
            </p>
          </div>
          
          <div className="mt-8 grid gap-4 text-left">
            <div className="flex items-start">
              <X className="mr-3 h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Hire a massive team</p>
            </div>
            <div className="flex items-start">
              <X className="mr-3 h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Manage ads or funnels</p>
            </div>
            <div className="flex items-start">
              <X className="mr-3 h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Build a complicated service offering</p>
            </div>
            <div className="flex items-start">
              <X className="mr-3 h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Chase clients to keep them happy</p>
            </div>
            <div className="flex items-start">
              <X className="mr-3 h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Spend thousands on marketing</p>
            </div>
          </div>
          
          <div className="mt-8 prose prose-lg max-w-none text-left">
            <p className="text-gray-700 text-lg">
              Instead, you set up AI-driven automations that handle workflows, streamline customer communication, and generate consistent revenue for businesses—with you keeping a healthy share of the profits.
            </p>
          </div>
        </section>

        {/* Transformation Section */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            The AI Business Manager Model Freed Me From The Old Agency Grind
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg">
              Traditional clients expect endless revisions, demand constant hand-holding, and undervalue your time.
            </p>
            <p className="text-gray-700 text-lg">
              Instead, with the AI Business Manager model, we work with Profit Partners—business owners who see the value in AI-driven optimization and happily share a percentage of their increased revenue with us.
            </p>
            <p className="text-gray-700 text-lg">
              Now, I make more money with less stress.
            </p>
          </div>
          
          <div className="mt-8 grid gap-4 mb-8 bg-red-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Here's what my old life looked like:</h3>
            <div className="flex items-start">
              <span className="mr-3 text-red-500 text-xl flex-shrink-0">🚨</span>
              <p className="text-lg">Chasing clients and competing with every other digital agency</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-red-500 text-xl flex-shrink-0">🚨</span>
              <p className="text-lg">Spending money on ads that barely converted</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-red-500 text-xl flex-shrink-0">🚨</span>
              <p className="text-lg">Getting stressed out over 'lead quality' complaints</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-red-500 text-xl flex-shrink-0">🚨</span>
              <p className="text-lg">Being stuck in a cycle of endless client churn</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-red-500 text-xl flex-shrink-0">🚨</span>
              <p className="text-lg">Trading hours for dollars with no scalability</p>
            </div>
          </div>
          
          <div className="mt-8 grid gap-4 bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Instead, I now:</h3>
            <div className="flex items-start">
              <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Automate entire workflows using AI</p>
            </div>
            <div className="flex items-start">
              <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Land high-value clients who appreciate innovation</p>
            </div>
            <div className="flex items-start">
              <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Set up AI voice agents and text automation to engage leads 24/7</p>
            </div>
            <div className="flex items-start">
              <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Run performance-based deals where I get paid based on results</p>
            </div>
            <div className="flex items-start">
              <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Scale my business without increasing my workload</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            How It Works
          </h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 text-lg">
              The AI Business Manager model is built around leveraging AI to revive and optimize business operations.
            </p>
          </div>
          
          <div className="grid gap-4 mb-8">
            <h3 className="font-bold text-xl mb-2">We don't:</h3>
            <div className="flex items-start">
              <X className="mr-3 h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Spend money on ads</p>
            </div>
            <div className="flex items-start">
              <X className="mr-3 h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Cold call businesses all day</p>
            </div>
            <div className="flex items-start">
              <X className="mr-3 h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Offer traditional lead gen services</p>
            </div>
            <div className="flex items-start">
              <X className="mr-3 h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Build websites or funnels</p>
            </div>
            <div className="flex items-start">
              <X className="mr-3 h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg">Rely on freelancers to fulfill work</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 text-lg">
              Instead, we use AI to optimize what businesses already have—turning wasted opportunities into revenue.
            </p>
          </div>
          
          <div className="grid gap-4 mb-8">
            <div className="flex items-start">
              <span className="mr-3 text-blue-500 text-xl flex-shrink-0">🚀</span>
              <p className="text-lg">AI automates customer engagement (calls, texts, follow-ups)</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-blue-500 text-xl flex-shrink-0">🚀</span>
              <p className="text-lg">AI streamlines operations (order management, scheduling, and communication)</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-blue-500 text-xl flex-shrink-0">🚀</span>
              <p className="text-lg">AI drives sales by nurturing leads and reactivating old customers</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 text-lg">
              With this model, one client can generate $10,000 - $50,000/month in passive revenue.
            </p>
          </div>
        </section>

        {/* Ebook Details Section */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none text-center mb-8">
            <p className="text-gray-700 text-xl">
              And now, you have the opportunity to duplicate this exact system by downloading a $14.40 ebook called:
            </p>
          </div>
          
          <Card className="bg-blue-50 border-blue-200 mb-12">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 italic">
                The AI Business Manager: How I Run $100,000+ Campaigns for Businesses & Keep $30,000 to $50,000+ for Myself While AI Does All The Work.
              </h2>
            </CardContent>
          </Card>
          
          <h3 className="font-bold text-2xl mb-6 text-center">Here's what's inside:</h3>
          
          <div className="grid gap-4 mb-8">
            <div className="flex items-start">
              <BookOpen className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">How to position yourself as the solution to a trillion-dollar problem</p>
            </div>
            <div className="flex items-start">
              <BookOpen className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">How to land high-value clients effortlessly</p>
            </div>
            <div className="flex items-start">
              <BookOpen className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">The AI automation tools we use to run entire businesses on autopilot</p>
            </div>
            <div className="flex items-start">
              <BookOpen className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">Step-by-step guide to setting up AI workflows for clients</p>
            </div>
            <div className="flex items-start">
              <BookOpen className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">How to structure performance-based deals to earn 6-figures+</p>
            </div>
            <div className="flex items-start">
              <BookOpen className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">How to build an AI voice agent that closes deals for you</p>
            </div>
            <div className="flex items-start">
              <BookOpen className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">Proven outreach methods to get in front of ideal clients</p>
            </div>
            <div className="flex items-start">
              <BookOpen className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">How to scale to 7-figures without increasing your workload</p>
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Limited-Time Offer – Download The AI Business Manager Today
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8 text-center">
              <p className="text-lg">
                To help as many entrepreneurs as possible, we're offering The AI Business Manager ebook for only <span className="font-bold text-primary">$14.40</span>.
              </p>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-center">It comes with BONUSES, including:</h3>
            
            <div className="grid gap-4 mb-8">
              <div className="flex items-start">
                <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-lg"><span className="font-bold">Plug & Play Agency Website</span> – Get a fully optimized website that positions you as an AI expert instantly.</p>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-lg"><span className="font-bold">Pre-Built AI Sales Android</span> – A fully operational AI voice assistant to install and start selling immediately.</p>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-lg"><span className="font-bold">Profit Partner Outreach Scripts</span> – Proven scripts to land high-value clients fast.</p>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-lg"><span className="font-bold">Compliance Training</span> – Step-by-step A2P compliance walkthrough to keep your AI services running smoothly.</p>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-lg"><span className="font-bold">42 Profitable Niches Guide</span> – Discover the best industries for AI automation.</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-8 text-center">
              <p className="text-xl">
                This is your shortcut to building a highly profitable, AI-driven business in 2025.
              </p>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto rounded-full animate-pulse"
                onClick={handlePurchase}
              >
                <Download className="mr-2 h-5 w-5" />
                Send Me The Book + All The Free Bonuses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
