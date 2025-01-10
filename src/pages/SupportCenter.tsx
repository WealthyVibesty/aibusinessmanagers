import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SupportCenter() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Support Center</h1>
      
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input 
          className="pl-10" 
          placeholder="Search for help..." 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <details className="cursor-pointer">
                <summary className="font-medium">How do I get started?</summary>
                <p className="mt-2 text-muted-foreground">
                  Sign up for an account and follow our quick start guide to begin using our platform.
                </p>
              </details>
              <details className="cursor-pointer">
                <summary className="font-medium">What payment methods do you accept?</summary>
                <p className="mt-2 text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers.
                </p>
              </details>
              <details className="cursor-pointer">
                <summary className="font-medium">How can I contact support?</summary>
                <p className="mt-2 text-muted-foreground">
                  You can reach our support team via email or through our contact form.
                </p>
              </details>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Get help from our team</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Our support team is available 24/7 to help you with any questions or issues.</p>
            <div className="space-y-2">
              <p className="text-sm">Email: support@example.com</p>
              <p className="text-sm">Phone: 1-954-604-0909</p>
              <p className="text-sm">Hours: 24/7</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Forums</CardTitle>
            <CardDescription>Connect with other users</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Join our community to discuss tips, tricks, and get help from other users.</p>
            <button className="text-primary hover:underline">Visit Forums →</button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}