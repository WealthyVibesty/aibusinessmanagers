import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

interface BusinessData {
  noAI: number;
  yourAI: number;
  monthlySavings: number;
  competitors: number;
}

interface Businesses {
  [key: string]: BusinessData;
}

interface TooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

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

  const generateMonthlyData = (business: string) => {
    return Array.from({ length: 12 }, (_, month) => ({
      month: month + 1,
      noAI: businesses[business].noAI * (month + 1),
      yourAI: businesses[business].yourAI * (month + 1),
      competitors: businesses[business].competitors * (month + 1),
      savings: businesses[business].monthlySavings * (month + 1)
    }));
  };

  const formatDollar = (value: number) => `$${value.toLocaleString()}`;

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 text-sm md:p-4 md:text-base border rounded shadow-lg">
          <p className="font-bold">Month {label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {formatDollar(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center animate-fadeIn leading-tight mb-12">
          See How Much You Can Save
        </h2>
        <div className="w-full max-w-6xl mx-auto p-2 md:p-4">
          <Card className="mb-4 md:mb-8">
            <CardHeader className="p-3 md:p-6 bg-white relative z-10">
              <CardTitle className="text-xl md:text-2xl text-center">Select Your Industry</CardTitle>
            </CardHeader>
            <CardContent className="p-2 md:p-6">
              <Tabs value={selectedBusiness} onValueChange={setSelectedBusiness} className="w-full">
                <TabsList className="grid grid-cols-2 sm:grid-cols-3 gap-2 relative z-10 bg-gray-50 p-2">
                  {Object.keys(businesses).map(business => (
                    <TabsTrigger 
                      key={business} 
                      value={business} 
                      className="p-2 md:p-3 text-sm md:text-base bg-white hover:bg-blue-50 data-[state=active]:bg-blue-100 shadow-sm border rounded-lg transition-all duration-200 font-medium"
                    >
                      {business}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(businesses).map(([business, data]) => (
                  <TabsContent key={business} value={business} className="mt-2 md:mt-6">
                    <div className="grid gap-3 md:gap-6">
                      <Card className="w-full overflow-hidden">
                        <CardHeader className="p-3 md:p-6 bg-white relative z-10 border-b">
                          <CardTitle className="text-lg md:text-2xl text-center">Cost Comparison - {business}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-2 md:p-6 pt-4">
                          <div className="h-48 md:h-72">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={[
                                { name: 'Monthly Costs', noAI: data.noAI, yourAI: data.yourAI, competitors: data.competitors }
                              ]} margin={{ top: 20, right: 5, left: 5, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                <YAxis tickFormatter={formatDollar} tick={{ fontSize: 12 }} />
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

                      <Card className="w-full overflow-hidden">
                        <CardHeader className="p-3 md:p-6 bg-white relative z-10 border-b">
                          <CardTitle className="text-lg md:text-2xl text-center">12-Month Cost Projection</CardTitle>
                        </CardHeader>
                        <CardContent className="p-2 md:p-6 pt-4">
                          <div className="h-48 md:h-72">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart 
                                data={generateMonthlyData(business)} 
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
                                <YAxis tickFormatter={formatDollar} tick={{ fontSize: 12 }} />
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

                      <Card className="bg-blue-50 w-full">
                        <CardContent className="p-4 md:py-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="text-center">
                              <p className="text-base md:text-lg font-semibold">Monthly Savings with AI Marketing Profile</p>
                              <p className="text-2xl md:text-3xl font-bold text-blue-600">{formatDollar(data.monthlySavings)}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-base md:text-lg font-semibold">Annual Savings with AI Marketing Profile</p>
                              <p className="text-2xl md:text-3xl font-bold text-blue-600">{formatDollar(data.monthlySavings * 12)}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
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