import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IndustrySelector } from './comparison/IndustrySelector';
import { CostChart } from './comparison/CostChart';
import { ProjectionChart } from './comparison/ProjectionChart';
import { SavingsDisplay } from './comparison/SavingsDisplay';
import { Businesses } from './comparison/types';

export default function BusinessComparisonSection() {
  const businesses: Businesses = {
    'Hospitals': {
      noAI: 35500,
      yourAI: 18997,
      monthlySavings: 16503,
      competitors: 24500,
    },
    'Universities': {
      noAI: 49000,
      yourAI: 25747,
      monthlySavings: 23253,
      competitors: 33500,
    },
    'Real Estate': {
      noAI: 22000,
      yourAI: 12247,
      monthlySavings: 9753,
      competitors: 15500,
    },
    'Hotels': {
      noAI: 95000,
      yourAI: 58747,
      monthlySavings: 36253,
      competitors: 70000,
    },
    'Doctors': {
      noAI: 7100,
      yourAI: 3997,
      monthlySavings: 3103,
      competitors: 4800,
    },
    'Med Spa': {
      noAI: 11900,
      yourAI: 6397,
      monthlySavings: 5503,
      competitors: 8000,
    }
  };

  const [selectedBusiness, setSelectedBusiness] = useState('Hospitals');
  const [selectedView, setSelectedView] = useState('costs');

  return (
    <section className="relative py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center animate-fadeIn leading-tight mb-8 sm:mb-12">
          See How Much You Can Save
        </h2>
        <div className="w-full max-w-3xl mx-auto">
          <Card className="mb-4 md:mb-8">
            <CardHeader className="p-6 bg-white relative z-10 border-b">
              <CardTitle className="text-2xl text-center">Select Your Industry</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs value={selectedBusiness} onValueChange={setSelectedBusiness} className="w-full">
                <div className="relative z-10 bg-gray-50 p-6 rounded-xl">
                  <IndustrySelector 
                    businesses={Object.keys(businesses)} 
                    selectedBusiness={selectedBusiness} 
                  />
                </div>

                {Object.entries(businesses).map(([business, data]) => (
                  <TabsContent key={business} value={business} className="mt-6">
                    <Tabs value={selectedView} onValueChange={setSelectedView} className="w-full">
                      <TabsList className="w-full justify-center mb-6">
                        <TabsTrigger 
                          value="costs" 
                          className="px-6 py-2 text-lg"
                        >
                          Monthly Costs
                        </TabsTrigger>
                        <TabsTrigger 
                          value="projection" 
                          className="px-6 py-2 text-lg"
                        >
                          12-Month Projection
                        </TabsTrigger>
                        <TabsTrigger 
                          value="savings" 
                          className="px-6 py-2 text-lg"
                        >
                          Savings
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="costs" className="mt-0">
                        <CostChart business={business} data={data} />
                      </TabsContent>

                      <TabsContent value="projection" className="mt-0">
                        <ProjectionChart business={business} data={data} />
                      </TabsContent>

                      <TabsContent value="savings" className="mt-0">
                        <SavingsDisplay data={data} />
                      </TabsContent>
                    </Tabs>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}