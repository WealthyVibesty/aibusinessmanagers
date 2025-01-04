export default function StepsSection() {
  const steps = [
    {
      title: "Pay $247 and Fill Out the Form",
      desc: "Answer a few simple questions about your business.",
    },
    {
      title: "We Create Your Profile",
      desc: "Our AI experts will analyze your business and create a custom plan.",
    },
    {
      title: "You Decide",
      desc: "If you love it, we'll help you implement it. If not, no worries – you've only spent $247 to try.",
    },
  ];

  return (
    <section className="container px-4 sm:px-6 lg:px-8 pt-8 pb-16 mx-auto bg-white/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center animate-fadeIn">
          Get Started in 3 Easy Steps
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map(({ title, desc }, i) => (
            <div 
              key={i} 
              className="p-4 sm:p-6 bg-card rounded-lg shadow-lg animate-slideUp"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-4 animate-fadeIn" 
                   style={{ animationDelay: `${i * 150}ms` }}>
                {i + 1}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}