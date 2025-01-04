import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const businesses = {
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

export default function BusinessComparisonSection() {
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

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border rounded shadow-lg">
          <p className="font-bold">{label}</p>
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
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center animate-fadeIn leading-tight">
            See How Much You Can Save
          </h2>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Select Your Industry</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedBusiness} onValueChange={setSelectedBusiness} className="w-full">
                <TabsList className="flex flex-wrap justify-center gap-2">
                  {Object.keys(businesses).map(business => (
                    <TabsTrigger 
                      key={business} 
                      value={business} 
                      className="min-w-[150px] p-3 bg-white hover:bg-blue-50 data-[state=active]:bg-blue-100 shadow-sm border rounded-lg transition-all duration-200 font-medium"
                    >
                      {business}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(businesses).map(([business, data]) => (
                  <TabsContent key={business} value={business}>
                    <div className="grid gap-6 mt-6">
                      <Card className="w-full">
                        <CardHeader>
                          <CardTitle className="text-xl md:text-2xl text-center">Cost Comparison - {business}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64 md:h-72">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={[
                                { name: 'Monthly Costs', noAI: data.noAI, yourAI: data.yourAI, competitors: data.competitors }
                              ]}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis tickFormatter={formatDollar} />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Bar dataKey="noAI" name="Current Cost (No AI)" fill="#ff4444" />
                                <Bar dataKey="competitors" name="Competitor" fill="#4CAF50" />
                                <Bar dataKey="yourAI" name="AI Marketing Profile" fill="#2196F3" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="w-full">
                        <CardHeader>
                          <CardTitle className="text-xl md:text-2xl text-center">12-Month Cost Projection</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64 md:h-72">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={generateMonthlyData(business)}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" label={{ value: 'Month', position: 'bottom' }} />
                                <YAxis tickFormatter={formatDollar} />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Line type="monotone" dataKey="noAI" name="Current Cost (No AI)" stroke="#ff4444" strokeWidth={2} />
                                <Line type="monotone" dataKey="competitors" name="Competitor" stroke="#4CAF50" strokeWidth={2} />
                                <Line type="monotone" dataKey="yourAI" name="AI Marketing Profile" stroke="#2196F3" strokeWidth={2} />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-blue-50 w-full">
                        <CardContent className="py-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="text-center">
                              <p className="text-lg font-semibold">Monthly Savings with AI Marketing Profile</p>
                              <p className="text-3xl font-bold text-blue-600">{formatDollar(data.monthlySavings)}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-semibold">Annual Savings with AI Marketing Profile</p>
                              <p className="text-3xl font-bold text-blue-600">{formatDollar(data.monthlySavings * 12)}</p>
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