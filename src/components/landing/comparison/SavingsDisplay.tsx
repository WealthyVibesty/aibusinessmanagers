import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BusinessData } from './types';

interface SavingsDisplayProps {
  data: BusinessData;
}

export const SavingsDisplay = ({ data }: SavingsDisplayProps) => {
  const formatDollar = (value: number) => `$${value.toLocaleString()}`;

  return (
    <Card className="bg-blue-50 w-full">
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold">Monthly Savings with AI Marketing Profile</p>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">{formatDollar(data.monthlySavings)}</p>
          </div>
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold">Annual Savings with AI Marketing Profile</p>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">{formatDollar(data.monthlySavings * 12)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};