import { Clock, DollarSign, BarChartHorizontal, Users, Bot, Phone, Wrench, Scissors, Heart, GraduationCap, Store, Home, Hotel } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Doctor's Office: Managing Patient Appointments",
      problem: "The office faced high no-show rates and overbooked schedules, leading to lost revenue.",
      solution: "We implemented an AI voice agent to handle appointment scheduling, reminders, and rescheduling.",
      results: [
        "Reduced no-show rates by 40%",
        "Saved 15+ hours per week for staff",
        "Increased patient satisfaction with timely reminders"
      ],
      icon: <Clock className="h-6 w-6 text-primary" />
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
      title: "Quick Prints: Boosting Profits with AI Automation",
      problem: "Quick Prints faced outdated pricing models leading to lost profits and overwhelmed staff spending time on repetitive tasks.",
      solution: "We implemented AI-powered dynamic pricing automation with supplier data integration, AI voice agent & SMS alerts through Twilio and WhatsApp for instant updates.",
      results: [
        "15% increase in profit margins through automated pricing adjustments",
        "Improved customer satisfaction with real-time updates",
        "Saved 20+ hours weekly for staff to focus on growth"
      ],
      icon: <BarChartHorizontal className="h-8 w-8 text-primary" />
    },
    {
      title: "Call Center: Enhancing Customer Support",
      problem: "A call center struggled with long wait times and inconsistent customer service quality.",
      solution: "Implemented AI voice agents for initial customer screening and common inquiries, with smart routing to human agents.",
      results: [
        "Reduced average wait time by 65%",
        "Increased customer satisfaction scores by 40%",
        "Handled 70% of routine inquiries automatically"
      ],
      icon: <Phone className="h-8 w-8 text-primary" />
    },
    {
      title: "Auto Shop: Streamlining Operations",
      problem: "Local auto shop faced challenges with appointment scheduling and parts inventory management.",
      solution: "Deployed AI system for automated scheduling, inventory forecasting, and customer communications.",
      results: [
        "Reduced parts ordering errors by 80%",
        "Increased service bay utilization by 35%",
        "Improved customer retention by 25%"
      ],
      icon: <Wrench className="h-8 w-8 text-primary" />
    },
    {
      title: "Beauty Salon: Appointment Management",
      problem: "Salon struggled with scheduling conflicts and last-minute cancellations.",
      solution: "Implemented AI booking system with automated reminders and waitlist management.",
      results: [
        "Reduced no-shows by 50%",
        "Increased booking efficiency by 40%",
        "Improved stylist utilization by 30%"
      ],
      icon: <Scissors className="h-8 w-8 text-primary" />
    },
    {
      title: "Med Spa: Client Experience Enhancement",
      problem: "Med spa needed better client tracking and treatment planning.",
      solution: "Integrated AI-powered client management system with treatment tracking and automated follow-ups.",
      results: [
        "Increased repeat bookings by 45%",
        "Improved treatment plan adherence by 60%",
        "Boosted revenue per client by 35%"
      ],
      icon: <Heart className="h-8 w-8 text-primary" />
    },
    {
      title: "University: Administrative Automation",
      problem: "Large university faced administrative bottlenecks in student services.",
      solution: "Implemented AI chatbots for student inquiries and automated document processing system.",
      results: [
        "Reduced administrative workload by 50%",
        "Decreased response time to student queries by 80%",
        "Processed enrollment documents 3x faster"
      ],
      icon: <GraduationCap className="h-8 w-8 text-primary" />
    },
    {
      title: "Small College: Resource Optimization",
      problem: "Small college struggled with resource allocation and student support.",
      solution: "Deployed AI system for course scheduling, resource management, and student support.",
      results: [
        "Optimized classroom utilization by 40%",
        "Reduced scheduling conflicts by 75%",
        "Improved student satisfaction scores by 30%"
      ],
      icon: <GraduationCap className="h-8 w-8 text-primary" />
    },
    {
      title: "Local Business: Customer Engagement",
      problem: "Local retail store needed better customer engagement and inventory management.",
      solution: "Implemented AI-powered CRM and inventory management system with predictive analytics.",
      results: [
        "Increased customer retention by 35%",
        "Reduced inventory costs by 25%",
        "Boosted sales through personalized marketing by 30%"
      ],
      icon: <Store className="h-8 w-8 text-primary" />
    },
    {
      title: "Real Estate Agency: Lead Management",
      problem: "Agency struggled with lead follow-up and property matching.",
      solution: "Integrated AI-powered lead nurturing and property matching system.",
      results: [
        "Increased lead conversion rate by 45%",
        "Reduced property search time by 60%",
        "Improved agent productivity by 40%"
      ],
      icon: <Home className="h-8 w-8 text-primary" />
    },
    {
      title: "Hotel Chain: Guest Experience",
      problem: "Hotel chain faced challenges with guest services and operational efficiency.",
      solution: "Implemented AI concierge service and automated operational management system.",
      results: [
        "Improved guest satisfaction scores by 50%",
        "Reduced operational costs by 30%",
        "Increased repeat bookings by 40%"
      ],
      icon: <Hotel className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section className="bg-secondary/5 py-16" id="case-studies">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center animate-fadeIn leading-tight">
            See What We've Done Before
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {caseStudies.map((study, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border px-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-2 rounded-lg">
                      {study.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-left">{study.title}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div>
                    <h4 className="font-bold text-base text-primary mb-2">Problem:</h4>
                    <p className="text-base text-foreground/90 leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-primary mb-2">Solution:</h4>
                    <p className="text-base text-foreground/90 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-primary mb-2">Results:</h4>
                    <ul className="list-disc list-inside text-base text-foreground/90 leading-relaxed space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
