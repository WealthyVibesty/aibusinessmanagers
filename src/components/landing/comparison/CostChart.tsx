import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from './CustomTooltip';
import { BusinessData } from './types';

interface CostChartProps {
  business: string;
  data: BusinessData;
}

export const CostChart = ({ business, data }: CostChartProps) => {
  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="p-4 sm:p-6 bg-white relative z-10 border-b">
        <CardTitle className="text-lg sm:text-xl lg:text-2xl text-center">Cost Comparison - {business}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="h-48 sm:h-64 lg:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[
              { name: 'Monthly Costs', noAI: data.noAI, yourAI: data.yourAI, competitors: data.competitors }
            ]} margin={{ top: 20, right: 5, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="noAI" name="Current Cost (No AI)" fill="#ff4444" />
              <Bar dataKey="competitors" name="Competitor" fill="#4CAF50" />
              <Bar dataKey="yourAI" name="AI Marketing Profile" fill="#2196F3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};