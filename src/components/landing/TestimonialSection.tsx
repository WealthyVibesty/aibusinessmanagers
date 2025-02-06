import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      quote: "The AI Business Manager has transformed how we handle customer service. We've reduced response times by 80% while maintaining quality.",
      author: "Sarah Chen",
      role: "Operations Director",
      company: "TechFlow Solutions"
    },
    {
      quote: "This platform helped us automate our workflow and save over 30 hours per week. The ROI was immediate and substantial.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "Digital Dynamics"
    },
    {
      quote: "The integration was seamless, and the AI's ability to learn our business processes exceeded our expectations.",
      author: "Emily Watson",
      role: "CTO",
      company: "InnovateNow"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}