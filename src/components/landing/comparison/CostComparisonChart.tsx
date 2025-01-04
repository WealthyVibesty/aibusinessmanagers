import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from './CustomTooltip';

interface CostComparisonChartProps {
  data: any[];
  formatDollar: (value: number) => string;
}

export default function CostComparisonChart({ data, formatDollar }: CostComparisonChartProps) {
  return (
    <Card className="p-8 hover:shadow-lg transition-shadow duration-300 mb-8">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Cost Comparison
      </h3>
      <div className="aspect-[4/3] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="name" tick={{ fill: '#4B5563', fontSize: 14 }} />
            <YAxis tickFormatter={formatDollar} tick={{ fill: '#4B5563', fontSize: 14 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ 
                paddingTop: '20px',
                fontSize: '14px',
                fontWeight: 500
              }} 
            />
            <Bar 
              dataKey="noAI" 
              name="Current Cost (No AI)" 
              fill="#FF6B6B" 
              radius={[8, 8, 0, 0]}
            />
            <Bar 
              dataKey="competitors" 
              name="Competitor" 
              fill="#4ADE80" 
              radius={[8, 8, 0, 0]}
            />
            <Bar 
              dataKey="yourAI" 
              name="AI Marketing Profile" 
              fill="#60A5FA" 
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}