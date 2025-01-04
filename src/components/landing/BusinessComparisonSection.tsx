import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import BusinessTypeSelector from './comparison/BusinessTypeSelector';
import CostComparisonChart from './comparison/CostComparisonChart';
import ProjectionChart from './comparison/ProjectionChart';
import SavingsSummary from './comparison/SavingsSummary';
import { businesses } from './comparison/types';

export default function BusinessComparisonSection() {
  const [selectedBusiness, setSelectedBusiness] = useState('Hospitals');
  const currentBusiness = businesses[selectedBusiness];

  const monthlyData = useMemo(() => {
    return Array.from({ length: 12 }, (_, month) => ({
      month: month + 1,
      noAI: currentBusiness.noAI * (month + 1),
      yourAI: currentBusiness.yourAI * (month + 1),
      competitors: currentBusiness.competitors * (month + 1),
    }));
  }, [currentBusiness]);

  const costComparisonData = [{
    name: 'Monthly Costs',
    noAI: currentBusiness.noAI,
    yourAI: currentBusiness.yourAI,
    competitors: currentBusiness.competitors,
  }];

  const formatDollar = (value: number) => `$${value.toLocaleString()}`;

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Compare Your Costs
        </h2>
        
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
          <CardContent className="p-6 sm:p-8">
            <BusinessTypeSelector 
              businesses={businesses}
              selectedBusiness={selectedBusiness}
              onSelect={setSelectedBusiness}
            />

            <CostComparisonChart 
              data={costComparisonData}
              formatDollar={formatDollar}
            />

            <ProjectionChart 
              data={monthlyData}
              formatDollar={formatDollar}
            />

            <SavingsSummary 
              monthlySavings={currentBusiness.monthlySavings}
              formatDollar={formatDollar}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}