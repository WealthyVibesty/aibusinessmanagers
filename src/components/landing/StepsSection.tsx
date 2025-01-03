export default function StepsSection() {
  const steps = [
    {
      title: "Fill Out the Free Form",
      desc: "Answer a few simple questions about your business.",
    },
    {
      title: "We Create Your Profile",
      desc: "Our AI agents will do all the work and show you what's possible.",
    },
    {
      title: "You Decide",
      desc: "If you love it, we'll help you implement it. If not, no worries – it's free to try.",
    },
  ];

  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold">Get Started in 3 Easy Steps</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(({ title, desc }, i) => (
            <div key={i} className="p-6 bg-card rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-primary mb-4">{i + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}