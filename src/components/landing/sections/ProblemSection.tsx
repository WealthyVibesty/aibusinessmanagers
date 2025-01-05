import { Card } from "@/components/ui/card";

interface Problem {
  icon: React.ReactNode;
  text: string;
}

interface ProblemSectionProps {
  title: string;
  problems: Problem[];
}

export default function ProblemSection({ title, problems }: ProblemSectionProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, i) => (
            <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                {item.icon}
              </div>
              <p className="text-lg text-gray-700">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}