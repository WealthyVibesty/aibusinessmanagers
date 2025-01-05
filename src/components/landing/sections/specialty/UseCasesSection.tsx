import { Card } from "@/components/ui/card";

interface UseCase {
  title: string;
  description: string;
}

interface UseCasesSectionProps {
  title: string;
  useCases: UseCase[];
}

export default function UseCasesSection({ title, useCases }: UseCasesSectionProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}