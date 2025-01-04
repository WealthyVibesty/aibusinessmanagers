import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from './CustomTooltip';

interface ProjectionChartProps {
  data: any[];
  formatDollar: (value: number) => string;
}

export default function ProjectionChart({ data, formatDollar }: ProjectionChartProps) {
  return (
    <Card className="p-8 hover:shadow-lg transition-shadow duration-300 mb-8">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
        12-Month Cost Projection
      </h3>
      <div className="aspect-[4/3] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="month" 
              label={{ value: 'Month', position: 'bottom', offset: 0, fill: '#4B5563' }}
              tick={{ fill: '#4B5563', fontSize: 14 }}
            />
            <YAxis 
              tickFormatter={formatDollar} 
              tick={{ fill: '#4B5563', fontSize: 14 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ 
                paddingTop: '20px',
                fontSize: '14px',
                fontWeight: 500
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="noAI" 
              name="Current Cost (No AI)" 
              stroke="#FF6B6B" 
              strokeWidth={3}
              dot={{ fill: '#FF6B6B', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8 }}
            />
            <Line 
              type="monotone" 
              dataKey="competitors" 
              name="Competitor" 
              stroke="#4ADE80" 
              strokeWidth={3}
              dot={{ fill: '#4ADE80', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8 }}
            />
            <Line 
              type="monotone" 
              dataKey="yourAI" 
              name="AI Marketing Profile" 
              stroke="#60A5FA" 
              strokeWidth={3}
              dot={{ fill: '#60A5FA', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}