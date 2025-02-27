
import React from 'react';
import { Star } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar?: string;
  rating?: number;
};

type SocialStat = {
  value: string;
  label: string;
};

interface SocialProofSectionProps {
  variant?: 'light' | 'dark' | 'minimal';
  showStats?: boolean;
  showLogos?: boolean;
  showTestimonials?: boolean;
  testimonials?: Testimonial[];
  stats?: SocialStat[];
}

export default function SocialProofSection({
  variant = 'light',
  showStats = true,
  showLogos = true,
  showTestimonials = true,
  testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "GrowthTech Solutions",
      quote: "This AI solution has transformed our workflow. We've seen a 40% increase in productivity since implementation.",
      avatar: "/lovable-uploads/d10dd79d-414a-4e5e-bfc7-7ff92e56f12f.png",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "TechNova Inc.",
      quote: "Customer service inquiries are handled seamlessly now. Our team focuses on strategic work while AI handles routine questions.",
      avatar: "/lovable-uploads/d93e3f1a-ff0c-49a9-922f-a5ffd654647f.png",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "CEO",
      company: "Innovative Healthcare",
      quote: "The ROI has been tremendous. Not only did we reduce costs, but patient satisfaction scores have increased by 35%.",
      avatar: "/lovable-uploads/1935155e-b63e-4ae4-a3f6-c51b7db8289a.png",
      rating: 5
    }
  ],
  stats = [
    { value: "2,000+", label: "Businesses Automated" },
    { value: "93%", label: "Satisfaction Rate" },
    { value: "40%", label: "Average Cost Reduction" },
    { value: "500K+", label: "Monthly AI Interactions" }
  ]
}: SocialProofSectionProps) {
  const bgColor = variant === 'dark' ? 'bg-gray-900' : variant === 'light' ? 'bg-gray-50' : 'bg-transparent';
  const textColor = variant === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="container mx-auto px-4">
        {showStats && (
          <div className="mb-12">
            <h3 className={`text-lg font-medium text-center mb-8 ${subtitleColor}`}>
              BUSINESSES AROUND THE WORLD TRUST OUR AI SOLUTIONS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-4">
                  <div className={`text-3xl md:text-4xl font-bold mb-1 text-primary`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${subtitleColor}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showLogos && (
          <div className="mb-12">
            <h3 className={`text-lg font-medium text-center mb-8 ${subtitleColor}`}>
              TRUSTED BY INDUSTRY LEADERS
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <img
                src="/lovable-uploads/cb8c7243-5b81-4b79-a213-5d169acaede2.png"
                alt="Logo 1"
                className="h-10 md:h-12 opacity-70"
              />
              <img
                src="/lovable-uploads/97d27ffa-5e3f-47b1-b550-d47dc525b2cf.png"
                alt="Logo 2"
                className="h-10 md:h-12 opacity-70"
              />
              <img
                src="/lovable-uploads/10c6384a-7a56-494c-bc22-6d612b09d170.png"
                alt="Logo 3"
                className="h-10 md:h-12 opacity-70"
              />
              <img
                src="/lovable-uploads/4593bf5a-446b-418a-b024-f0848d36a02e.png"
                alt="Logo 4"
                className="h-10 md:h-12 opacity-70"
              />
              <img
                src="/lovable-uploads/57f47dd7-cc27-477d-9586-e32ed172d79b.png"
                alt="Logo 5"
                className="h-10 md:h-12 opacity-70"
              />
            </div>
          </div>
        )}

        {showTestimonials && (
          <div>
            <h3 className={`text-lg font-medium text-center mb-8 ${subtitleColor}`}>
              WHAT OUR CUSTOMERS ARE SAYING
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl shadow-md ${variant === 'dark' ? 'bg-gray-800' : 'bg-white'} transition-transform hover:-translate-y-1 duration-300`}
                >
                  {testimonial.rating && (
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < testimonial.rating! ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  )}
                  <p className={`text-lg mb-4 italic ${variant === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                    )}
                    <div>
                      <h4 className={`font-medium ${textColor}`}>{testimonial.name}</h4>
                      <p className={`text-sm ${subtitleColor}`}>
                        {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
