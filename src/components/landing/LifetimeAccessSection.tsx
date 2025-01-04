import { Card } from "@/components/ui/card";
import { Book, Cpu, Bot } from "lucide-react";

export default function LifetimeAccessSection() {
  const courses = [
    {
      title: "Using AI to Create Websites and Software",
      description: "Learn how to build websites and software using AI tools—no coding required.",
      icon: <Cpu className="h-8 w-8 text-primary" />,
    },
    {
      title: "Creating AI Voice Agents and Connecting Them to Your CRM",
      description: "Master the art of building and integrating AI voice agents into your business workflows.",
      icon: <Bot className="h-8 w-8 text-primary" />,
    },
    {
      title: "Using Basic AI Tools to Automate Everything",
      description: "Discover how to use AI tools to handle repetitive tasks, analyze data, and explain complex concepts.",
      icon: <Book className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section className="container px-4 py-16 mx-auto bg-white/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight animate-fadeIn">
            Lifetime Access to AI Training Courses
          </h2>
          <p className="text-xl text-muted-foreground animate-slideUp" style={{ animationDelay: "100ms" }}>
            Value: $497+ (Included Free with Your Purchase)
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course, i) => (
            <Card 
              key={i} 
              className="p-6 animate-slideUp"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4">
                {course.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-muted-foreground">{course.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6 text-center bg-primary/5 border-primary/20 animate-fadeIn" style={{ animationDelay: "400ms" }}>
          <p className="text-lg font-semibold">
            And here's the best part: You'll get all future courses for free to train your team and stay ahead of the curve.
          </p>
        </Card>
      </div>
    </section>
  );
}