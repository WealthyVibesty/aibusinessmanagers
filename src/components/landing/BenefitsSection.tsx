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
    <section className="container px-4 pt-8 pb-16 mx-auto">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center animate-fadeIn">
          Your Business Can't Afford to Wait – AI is Moving Faster Than Ever, and Your Competitors Are Already Ahead. For Just $1, Let Us Help You Catch Up Before It's Too Late.
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map(({ title, text }, i) => (
            <div
              key={i}
              className="p-6 bg-card rounded-lg shadow-lg animate-slideUp"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}