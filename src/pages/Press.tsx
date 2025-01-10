import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Newspaper } from "lucide-react";

export default function Press() {
  const newsReleases = [
    {
      date: "March 15, 2024",
      title: "HealthAI Launches Revolutionary AI-Powered Diagnostic Tool",
      description: "New technology promises to improve accuracy and speed of medical diagnoses."
    },
    {
      date: "February 28, 2024",
      title: "Partnership Announcement with Leading Hospital Network",
      description: "Expanding AI healthcare solutions to more medical facilities."
    },
    {
      date: "January 10, 2024",
      title: "HealthAI Secures Major Investment for Global Expansion",
      description: "Funding will accelerate development of AI healthcare solutions."
    }
  ];

  const mediaContacts = {
    name: "Sarah Johnson",
    title: "Head of Communications",
    email: "press@healthai.com",
    phone: "+1 (555) 123-4567"
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Press & Media</h1>
          <p className="text-xl text-muted-foreground">
            Latest news and updates about HealthAI's innovations in healthcare technology.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {newsReleases.map((news, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{news.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <p className="text-muted-foreground">{news.description}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Newspaper className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-semibold">Media Contact</h2>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">{mediaContacts.name}</p>
            <p className="text-muted-foreground">{mediaContacts.title}</p>
            <p>Email: {mediaContacts.email}</p>
            <p>Phone: {mediaContacts.phone}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}