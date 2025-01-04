import { Clock, DollarSign, BarChartHorizontal, Users, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "High-Ticket Consultant: Automating Lead Follow-Ups",
      problem: "The consultant missed 30% of potential clients due to manual follow-ups and scheduling conflicts.",
      solution: "We implemented an AI-powered CRM integration to automate lead follow-ups and schedule consultations.",
      results: [
        "Increased client conversions by 25%",
        "Saved 20+ hours per week on manual tasks",
        "Boosted revenue by $50,000 in the first quarter"
      ],
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: "High-Ticket Coach: Streamlining Client Onboarding",
      problem: "The coach struggled with time-consuming client onboarding and missed deadlines.",
      solution: "We set up an AI-powered onboarding system with automated contracts, payment reminders, and scheduling.",
      results: [
        "Reduced onboarding time by 50%",
        "Improved client satisfaction with seamless processes",
        "Increased monthly revenue by 30%"
      ],
      icon: <Bot className="h-8 w-8 text-primary" />
    },
    {
      title: "Doctor's Office: Managing Patient Appointments",
      problem: "The office faced high no-show rates and overbooked schedules, leading to lost revenue.",
      solution: "We implemented an AI voice agent to handle appointment scheduling, reminders, and rescheduling.",
      results: [
        "Reduced no-show rates by 40%",
        "Saved 15+ hours per week for staff",
        "Increased patient satisfaction with timely reminders"
      ],
      icon: <Clock className="h-8 w-8 text-primary" />
    },
    {
      title: "Health Center: Automating Billing and Claims",
      problem: "The health center struggled with delayed billing and claim rejections, leading to cash flow issues.",
      solution: "We set up an AI-powered billing system to automate claims submission and track payments.",
      results: [
        "Reduced claim rejections by 60%",
        "Improved cash flow with faster payments",
        "Saved 25+ hours per week for the billing team"
      ],
      icon: <DollarSign className="h-8 w-8 text-primary" />
    },
    {
      title: "Case Study: Quick Prints—Boosting Profits and Efficiency with AI Automation",
      problem: "Quick Prints faced outdated pricing models leading to lost profits and overwhelmed staff spending time on repetitive tasks.",
      solution: "We implemented AI-powered dynamic pricing automation with supplier data integration, AI voice agent & SMS alerts through Twilio and WhatsApp for instant updates, and automated project management with Monday.com.",
      results: [
        "15% increase in profit margins through automated pricing adjustments",
        "Improved customer satisfaction with real-time updates",
        "Saved 20+ hours weekly for staff to focus on growth"
      ],
      icon: <BarChartHorizontal className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section className="bg-secondary/5 py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center animate-fadeIn leading-tight">
            See What We've Done Before
          </h2>

          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <Card 
                key={index} 
                className="p-6 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    {study.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight">{study.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-lg text-primary mb-1">Problem:</h4>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary mb-1">Solution:</h4>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary mb-1">Results:</h4>
                        <ul className="list-disc list-inside text-base sm:text-lg text-muted-foreground leading-relaxed">
                          {study.results.map((result, i) => (
                            <li key={i} className="mb-1">{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}