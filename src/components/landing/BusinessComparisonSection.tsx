import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function BusinessComparisonSection() {
  const businesses = {
    Hospitals: {
      noAI: 35500,
      yourAI: 18997,
      monthlySavings: 16503,
      competitors: 24500,
    },
    Universities: {
      noAI: 49000,
      yourAI: 25747,
      monthlySavings: 23253,
      competitors: 33500,
    },
    RealEstate: {
      noAI: 22000,
      yourAI: 12247,
      monthlySavings: 9753,
      competitors: 15500,
    },
    Hotels: {
      noAI: 95000,
      yourAI: 58747,
      monthlySavings: 36253,
      competitors: 70000,
    },
    Doctors: {
      noAI: 7100,
      yourAI: 3997,
      monthlySavings: 3103,
      competitors: 4800,
    },
    MedSpa: {
      noAI: 11900,
      yourAI: 6397,
      monthlySavings: 5503,
      competitors: 8000,
    },
  };

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

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border rounded shadow-lg">
          <p className="font-bold mb-2">{typeof label === 'number' ? `Month ${label}` : label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {formatDollar(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="relative py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center animate-fadeIn leading-tight mb-8 sm:mb-12">
          See How Much You Can Save
        </h2>
        
        <div className="w-full max-w-6xl mx-auto">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              {/* Tabs */}
              <div className="flex overflow-x-auto mb-4 gap-2 pb-2">
                {Object.keys(businesses).map((business) => (
                  <Button
                    key={business}
                    variant={selectedBusiness === business ? "default" : "outline"}
                    className="min-w-[120px] whitespace-nowrap"
                    onClick={() => setSelectedBusiness(business)}
                  >
                    {business.replace(/([A-Z])/g, ' $1').trim()}
                  </Button>
                ))}
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Cost Comparison Chart */}
                <Card className="p-4">
                  <h3 className="text-lg font-semibold text-center mb-4">Cost Comparison</h3>
                  <div className="h-48 md:h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={costComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
                </Card>

                {/* 12-Month Projection Chart */}
                <Card className="p-4">
                  <h3 className="text-lg font-semibold text-center mb-4">12-Month Cost Projection</h3>
                  <div className="h-48 md:h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="month" 
                          label={{ value: 'Month', position: 'bottom', offset: 0 }}
                        />
                        <YAxis tickFormatter={formatDollar} />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Line type="monotone" dataKey="noAI" name="Current Cost (No AI)" stroke="#ff4444" strokeWidth={2} />
                        <Line type="monotone" dataKey="competitors" name="Competitor" stroke="#4CAF50" strokeWidth={2} />
                        <Line type="monotone" dataKey="yourAI" name="AI Marketing Profile" stroke="#2196F3" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                {/* Savings Card */}
                <Card className="bg-blue-50">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-sm font-semibold">Monthly Savings</p>
                        <p className="text-xl font-bold text-blue-600">
                          ${currentBusiness.monthlySavings.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold">Annual Savings</p>
                        <p className="text-xl font-bold text-blue-600">
                          ${(currentBusiness.monthlySavings * 12).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}