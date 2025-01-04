export default function StepsSection() {
  const steps = [
    {
      title: "Pay $1 and Fill Out the Form",
      desc: "Answer a few simple questions about your business.",
    },
    {
      title: "We Create Your Profile",
      desc: "Our AI experts will analyze your business and create a custom plan.",
    },
    {
      title: "You Decide",
      desc: "If you love it, we'll help you implement it. If not, no worries – you've only spent $1 to try.",
    },
  ];

  return (
    <section className="container px-4 pt-8 pb-16 mx-auto">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center animate-fadeIn">
          Get Started in 3 Easy Steps
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(({ title, desc }, i) => (
            <div 
              key={i} 
              className="p-6 bg-card rounded-lg shadow-lg animate-slideUp"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl font-bold text-primary mb-4 animate-fadeIn" style={{ animationDelay: `${i * 150}ms` }}>
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}