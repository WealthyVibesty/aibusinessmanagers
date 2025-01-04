import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from './CustomTooltip';
import { BusinessData } from './types';

interface ProjectionChartProps {
  business: string;
  data: BusinessData;
}

export const ProjectionChart = ({ business, data }: ProjectionChartProps) => {
  const generateMonthlyData = () => {
    return Array.from({ length: 12 }, (_, month) => ({
      month: month + 1,
      noAI: data.noAI * (month + 1),
      yourAI: data.yourAI * (month + 1),
      competitors: data.competitors * (month + 1),
      savings: data.monthlySavings * (month + 1)
    }));
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="p-4 sm:p-6 bg-white relative z-10 border-b">
        <CardTitle className="text-lg sm:text-xl lg:text-2xl text-center">12-Month Cost Projection</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="h-48 sm:h-64 lg:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={generateMonthlyData()} 
              margin={{ top: 20, right: 5, left: 5, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                label={{ 
                  value: 'Month', 
                  position: 'bottom', 
                  offset: 10,
                  fontSize: 12
                }} 
              />
              <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line type="monotone" dataKey="noAI" name="Current Cost (No AI)" stroke="#ff4444" strokeWidth={2} />
              <Line type="monotone" dataKey="competitors" name="Competitor" stroke="#4CAF50" strokeWidth={2} />
              <Line type="monotone" dataKey="yourAI" name="AI Marketing Profile" stroke="#2196F3" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};