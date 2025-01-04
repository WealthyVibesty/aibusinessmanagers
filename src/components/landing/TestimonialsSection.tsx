import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "I was nervous about AI, but AI Marketing Profile made it so easy. I paid $247, filled out the form, and they created an amazing plan for me. I decided to implement it, and my business has never been better!",
      author: "Sarah T., Small Business Owner",
    },
    {
      text: "I thought AI would be complicated, but this platform handled everything. I paid $247 to try it, loved it, and the implementation was totally worth it!",
      author: "James L., Marketing Director",
    },
    {
      text: "This is the easiest way to get started with AI. I paid $247, filled out the form, and saw the results. I'm so glad I gave it a try!",
      author: "Emily R., Entrepreneur",
    },
  ];

  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center animate-fadeIn">
          Don't Just Take Our Word for It
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ text, author }, i) => (
            <div 
              key={i} 
              className="p-6 bg-card rounded-lg shadow-lg animate-slideUp"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star 
                    key={j} 
                    className="inline h-5 w-5 text-primary animate-fadeIn"
                    style={{ animationDelay: `${(i * 100) + (j * 50)}ms` }}
                  />
                ))}
              </div>
              <p className="mb-4 italic">{text}</p>
              <p className="font-semibold">{author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}