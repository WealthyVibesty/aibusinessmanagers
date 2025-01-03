import { useState } from "react";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpRight, ArrowDownRight, Users, Target, DollarSign } from "lucide-react";

const mockData = [
  { month: "Jan", engagement: 4000 },
  { month: "Feb", engagement: 3000 },
  { month: "Mar", engagement: 5000 },
  { month: "Apr", engagement: 4600 },
  { month: "May", engagement: 6000 },
  { month: "Jun", engagement: 5400 },
];

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, change, icon }: MetricCardProps) => (
  <Card className="p-6">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <h3 className="text-2xl font-bold mt-2">{value}</h3>
      </div>
      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div className="flex items-center mt-4">
      {change >= 0 ? (
        <ArrowUpRight className="h-4 w-4 text-green-500" />
      ) : (
        <ArrowDownRight className="h-4 w-4 text-red-500" />
      )}
      <span className={`text-sm font-medium ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
        {Math.abs(change)}%
      </span>
      <span className="text-sm text-muted-foreground ml-1">vs last month</span>
    </div>
  </Card>
);

export function AnalyticsDashboard() {
  const [metrics] = useState([
    {
      title: "Total Audience",
      value: "24.8K",
      change: 12,
      icon: <Users className="h-4 w-4 text-primary" />,
    },
    {
      title: "Engagement Rate",
      value: "5.2%",
      change: -2.1,
      icon: <Target className="h-4 w-4 text-primary" />,
    },
    {
      title: "Marketing ROI",
      value: "$12.4K",
      change: 8.3,
      icon: <DollarSign className="h-4 w-4 text-primary" />,
    },
  ]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Audience Engagement Trends</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              />
              <Bar
                dataKey="engagement"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}