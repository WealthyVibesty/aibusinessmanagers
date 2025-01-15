import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="w-full" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="w-full" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    className="min-h-[150px] w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Get in touch with us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm md:text-base break-all">Team@aibusinessmanagers.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm md:text-base">1-954-604-0909</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm md:text-base">Live Chat Available</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
              <CardDescription>When you can reach us</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm md:text-base">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}