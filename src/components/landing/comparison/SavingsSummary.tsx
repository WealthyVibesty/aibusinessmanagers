import { Card, CardContent } from '@/components/ui/card';

interface SavingsSummaryProps {
  monthlySavings: number;
  formatDollar: (value: number) => string;
}

export default function SavingsSummary({ monthlySavings, formatDollar }: SavingsSummaryProps) {
  return (
    <Card className="bg-gradient-to-r from-primary to-primary/90 text-white overflow-hidden">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <p className="text-lg font-medium text-primary-foreground/90 mb-2">Monthly Savings</p>
            <p className="text-4xl font-bold animate-fadeIn">{formatDollar(monthlySavings)}</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-primary-foreground/90 mb-2">Annual Savings</p>
            <p className="text-4xl font-bold animate-fadeIn">{formatDollar(monthlySavings * 12)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}