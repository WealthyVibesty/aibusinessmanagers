import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ContentLibrary() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Content Library</h1>
      
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input 
          className="pl-10" 
          placeholder="Search resources..." 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Guides */}
        <Card>
          <CardHeader>
            <CardTitle>Getting Started Guides</CardTitle>
            <CardDescription>Essential guides for new users</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0">Platform Overview</Button>
              </li>
              <li>
                <Button variant="link" className="p-0">User Onboarding Guide</Button>
              </li>
              <li>
                <Button variant="link" className="p-0">Best Practices</Button>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Tutorials */}
        <Card>
          <CardHeader>
            <CardTitle>Video Tutorials</CardTitle>
            <CardDescription>Step-by-step video guides</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0">Basic Features Tutorial</Button>
              </li>
              <li>
                <Button variant="link" className="p-0">Advanced Tips & Tricks</Button>
              </li>
              <li>
                <Button variant="link" className="p-0">Integration Guides</Button>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Documentation */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Documentation</CardTitle>
            <CardDescription>Detailed technical resources</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0">API Documentation</Button>
              </li>
              <li>
                <Button variant="link" className="p-0">Integration Guide</Button>
              </li>
              <li>
                <Button variant="link" className="p-0">Release Notes</Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}