import { CheckCircle2 } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "No Tech Skills Needed",
      text: "You don't need to be an expert or spend months learning. Let us do the work for you.",
    },
    {
      title: "No Guesswork",
      text: "We'll create a custom plan tailored to your business.",
    },
    {
      title: "No Heavy Lifting",
      text: "Our AI experts handle everything – you just focus on growing.",
    },
  ];

  return (
    <section className="container px-4 sm:px-6 lg:px-8 pt-8 pb-16 mx-auto">
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center animate-fadeIn px-4 leading-tight">
          Your Business Can't Afford to Wait – AI is Moving Faster Than Ever, and Your Competitors Are Already Ahead. For Just $247, Let Us Help You Catch Up and Stay Ahead.
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {benefits.map(({ title, text }, i) => (
            <div
              key={i}
              className="p-6 bg-card rounded-lg shadow-lg animate-slideUp text-center flex flex-col items-center"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}