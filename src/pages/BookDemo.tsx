import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Calendar as CalendarIcon, Clock, Send } from "lucide-react";
import { format } from "date-fns";

export default function BookDemo() {
  const [date, setDate] = useState<Date>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !name || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Create calendar event URL for Apple Calendar
    const startTime = date.toISOString();
    const endTime = new Date(date.getTime() + 60 * 60 * 1000).toISOString(); // 1 hour meeting
    const calendarUrl = `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${startTime.replace(/[-:]/g, "").split(".")[0]}Z
DTEND:${endTime.replace(/[-:]/g, "").split(".")[0]}Z
SUMMARY:Demo Call with ${name}
DESCRIPTION:Demo call booked by ${name}\\nEmail: ${email}\\nPhone: ${phone}
END:VEVENT
END:VCALENDAR`;

    // Create downloadable calendar file
    const link = document.createElement("a");
    link.href = calendarUrl;
    link.download = "demo-call.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message
    toast({
      title: "Demo Booked!",
      description: "You'll receive a confirmation email shortly.",
    });

    // Log booking details for debugging
    console.log("Booking details:", {
      date,
      name,
      email,
      phone,
    });
  };

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Book a Free Demo</h1>
      
      <Card className="p-6">
        <form onSubmit={handleBooking} className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 000-0000"
              required
            />
          </div>

          <div className="space-y-4">
            <Label>Select Date and Time</Label>
            <div className="flex flex-col sm:flex-row gap-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date < new Date()}
              />
              <div className="flex-1 space-y-4">
                <div className="text-sm text-muted-foreground">
                  {date ? (
                    <p>Selected: {format(date, "PPP")}</p>
                  ) : (
                    <p>Please select a date</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Book Demo
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Card>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>After booking, you'll receive:</p>
        <ul className="mt-2 space-y-1">
          <li>• Calendar invitation for Apple Calendar</li>
          <li>• Confirmation email with meeting details</li>
          <li>• SMS reminder before the meeting</li>
        </ul>
      </div>
    </div>
  );
}