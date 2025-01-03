import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Download, Share2, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto text-center space-y-8 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          AI is Moving Fast – But Starting Doesn't Have to Be Hard.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Spend 10 Minutes, Save Months of Work. Let Our AI Agents Do the Heavy Lifting for You – For Free.
        </p>
        <Button
          size="lg"
          className="mt-8 text-lg group"
          onClick={() => navigate("/login")}
        >
          Get Started Now – Free
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </section>

      {/* Opening Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI is Everywhere – But You Don't Have to Figure It Out Alone
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              "You don't need to be a tech expert to use AI.",
              "You don't need to spend months learning or testing tools.",
              "You don't even need to do the work yourself.",
            ].map((text, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-lg shadow-lg animate-slideUp"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="bg-secondary/5 py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Start Today?</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                title: "AI is changing fast",
                desc: "The sooner you start, the sooner you'll see results.",
                icon: Star,
              },
              {
                title: "Your competitors are already using AI",
                desc: "Don't let them get ahead.",
                icon: Users,
              },
              {
                title: "It's easier than you think",
                desc: "Just fill out the free form, and we'll handle the rest.",
                icon: CheckCircle2,
              },
            ].map(({ title, desc, icon: Icon }, i) => (
              <div
                key={i}
                className="p-6 bg-background rounded-lg shadow-lg animate-slideUp"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Want to Share Your AI Marketing Profile?</h2>
          <div className="p-8 bg-card rounded-lg shadow-lg">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Download className="h-6 w-6 text-primary" />
              <Share2 className="h-6 w-6 text-primary" />
            </div>
            <p className="text-2xl font-bold mb-4">$29/month</p>
            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Export Your Profile as PDF or CSV</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Send Collaboration Emails</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Invite Others to View and Collaborate</span>
              </li>
            </ul>
            <Button size="lg" onClick={() => navigate("/login")}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/5 py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Don't Just Take Our Word for It
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                text: "I was nervous about AI, but AI Marketing Profile made it so easy. I filled out the free form, and they did the rest. My business has never been better!",
                author: "Sarah T., Small Business Owner",
              },
              {
                text: "I thought AI would be complicated, but this platform handled everything. It's like magic – and it didn't cost me a thing to start!",
                author: "James L., Marketing Director",
              },
              {
                text: "This is the easiest way to get started with AI. I didn't have to do a thing – just fill out the free form and watch the results.",
                author: "Emily R., Entrepreneur",
              },
            ].map(({ text, author }, i) => (
              <div
                key={i}
                className="p-6 bg-background rounded-lg shadow-lg"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="inline h-5 w-5 text-primary" />
                  ))}
                </div>
                <p className="mb-4 italic">{text}</p>
                <p className="font-semibold">{author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container px-4 py-24 mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Don't Wait – Let's Make AI Easy Together</h2>
          <p className="text-xl text-muted-foreground">
            No Risk. No Commitment. Just Results.
          </p>
          <Button
            size="lg"
            className="mt-8 text-lg group"
            onClick={() => navigate("/login")}
          >
            Get Started Now – Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}