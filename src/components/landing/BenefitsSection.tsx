import { CheckCircle2 } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    "You don't need to be a tech expert to use AI.",
    "You don't need to spend months learning or testing tools.",
    "You don't even need to do the work yourself.",
  ];

  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">
          AI is Everywhere – But You Don't Have to Figure It Out Alone
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((text, i) => (
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
  );
}