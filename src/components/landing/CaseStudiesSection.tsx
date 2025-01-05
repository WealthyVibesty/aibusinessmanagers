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
      title: "Healthcare: Streamlining Patient Care",
      problem: "Multiple healthcare providers struggled with appointment scheduling and patient communication.",
      solution: "Implemented AI voice agents for appointment management and automated follow-ups.",
      results: [
        "40% reduction in no-show rates",
        "15+ hours saved weekly per staff member",
        "60% improvement in patient satisfaction scores"
      ],
      icon: <Clock className="h-6 w-6 text-primary" />
    },
    {
      title: "Education: Administrative Efficiency",
      problem: "Educational institutions faced challenges with student services and documentation.",
      solution: "Deployed AI-powered administrative systems and automated response systems.",
      results: [
        "50% reduction in administrative workload",
        "80% faster response times to student queries",
        "3x faster document processing"
      ],
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    },
    {
      title: "Retail: Customer Experience Enhancement",
      problem: "Retail businesses struggled with customer engagement and inventory management.",
      solution: "Integrated AI-powered CRM and inventory systems with predictive analytics.",
      results: [
        "35% increase in customer retention",
        "25% reduction in inventory costs",
        "30% boost in sales through personalized marketing"
      ],
      icon: <Store className="h-6 w-6 text-primary" />
    },
    {
      title: "Professional Services: Business Operations",
      problem: "Service providers faced efficiency and client communication challenges.",
      solution: "Implemented AI workflow automation and client communication systems.",
      results: [
        "45% improvement in operational efficiency",
        "60% faster client response times",
        "40% increase in client satisfaction"
      ],
      icon: <BarChartHorizontal className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-primary/5 py-16" id="case-studies">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center animate-fadeIn leading-tight">
            Real Results, Real Businesses
          </h2>
          
          <p className="text-lg text-center text-muted-foreground mb-8">
            See how businesses like yours are transforming with AI
          </p>

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
                    <h4 className="font-bold text-base text-primary mb-2">Challenge:</h4>
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