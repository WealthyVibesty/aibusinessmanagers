import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockData = [
  { month: "Jan", engagement: 65 },
  { month: "Feb", engagement: 75 },
  { month: "Mar", engagement: 85 },
  { month: "Apr", engagement: 78 },
  { month: "May", engagement: 90 },
  { month: "Jun", engagement: 95 },
];

const progressData = [
  { label: "Social Media Growth", progress: 75 },
  { label: "Email Campaign", progress: 60 },
  { label: "Content Creation", progress: 85 },
  { label: "Lead Generation", progress: 45 },
];

export function AnalyticsDashboard() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <h3 className="text-sm font-medium text-secondary mb-2">Total Reach</h3>
          <p className="text-2xl font-bold">24.5K</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-secondary mb-2">Engagement Rate</h3>
          <p className="text-2xl font-bold">4.2%</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-secondary mb-2">Conversions</h3>
          <p className="text-2xl font-bold">312</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-secondary mb-2">ROI</h3>
          <p className="text-2xl font-bold">185%</p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Progress Tracking</h3>
        <div className="space-y-6">
          {progressData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-secondary-foreground">{item.label}</span>
                <span className="text-secondary">{item.progress}%</span>
              </div>
              <Progress value={item.progress} className="h-2" />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Audience Engagement</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="engagement" stroke="#2563EB" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}