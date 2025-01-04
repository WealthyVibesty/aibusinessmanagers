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
        <div className="bg-white p-4 border rounded-lg shadow-lg">
          <p className="font-bold mb-2 text-gray-800">{typeof label === 'number' ? `Month ${label}` : label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm py-1 font-medium">
              {entry.name}: {formatDollar(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto"> {/* Removed max-w constraint */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center animate-fadeIn leading-tight mb-12 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          See How Much You Can Save
        </h2>
        
        <div className="w-full">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-6 sm:p-8">
              {/* Business Type Selector */}
              <div className="flex overflow-x-auto mb-8 gap-3 pb-2 scrollbar-hide">
                {Object.keys(businesses).map((business) => (
                  <Button
                    key={business}
                    variant={selectedBusiness === business ? "default" : "outline"}
                    className={`
                      whitespace-nowrap px-8 py-6 text-base font-medium rounded-xl transition-all duration-300
                      ${selectedBusiness === business ? 'shadow-lg scale-105' : 'hover:scale-105'}
                    `}
                    onClick={() => setSelectedBusiness(business)}
                  >
                    {business.replace(/([A-Z])/g, ' $1').trim()}
                  </Button>
                ))}
              </div>

              {/* Charts Grid */}
              <div className="space-y-8">
                {/* Cost Comparison Chart */}
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Cost Comparison</h3>
                  <div className="w-full h-[600px]"> {/* Increased height and made full width */}
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={costComparisonData} 
                        margin={{ top: 20, right: 30, left: 40, bottom: 20 }} // Adjusted margins
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis 
                          dataKey="name" 
                          tick={{ fill: '#4B5563', fontSize: 14 }} 
                          tickMargin={10}
                        />
                        <YAxis 
                          tickFormatter={formatDollar} 
                          tick={{ fill: '#4B5563', fontSize: 14 }}
                          tickMargin={10}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend 
                          wrapperStyle={{ 
                            paddingTop: '20px',
                            fontSize: '14px'
                          }} 
                        />
                        <Bar 
                          dataKey="noAI" 
                          name="Current Cost (No AI)" 
                          fill="#FF6B6B" 
                          radius={[4, 4, 0, 0]}
                          maxBarSize={120} // Control maximum bar width
                        />
                        <Bar 
                          dataKey="competitors" 
                          name="Competitor" 
                          fill="#4ADE80" 
                          radius={[4, 4, 0, 0]}
                          maxBarSize={120}
                        />
                        <Bar 
                          dataKey="yourAI" 
                          name="AI Marketing Profile" 
                          fill="#60A5FA" 
                          radius={[4, 4, 0, 0]}
                          maxBarSize={120}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                {/* 12-Month Projection Chart */}
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">12-Month Cost Projection</h3>
                  <div className="w-full h-[600px]"> {/* Increased height and made full width */}
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={monthlyData} 
                        margin={{ top: 20, right: 30, left: 40, bottom: 20 }} // Adjusted margins
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis 
                          dataKey="month" 
                          label={{ 
                            value: 'Month', 
                            position: 'bottom', 
                            offset: 0, 
                            fill: '#4B5563',
                            fontSize: 14
                          }}
                          tick={{ fill: '#4B5563', fontSize: 14 }}
                          tickMargin={10}
                        />
                        <YAxis 
                          tickFormatter={formatDollar} 
                          tick={{ fill: '#4B5563', fontSize: 14 }}
                          tickMargin={10}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend 
                          wrapperStyle={{ 
                            paddingTop: '20px',
                            fontSize: '14px'
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="noAI" 
                          name="Current Cost (No AI)" 
                          stroke="#FF6B6B" 
                          strokeWidth={3}
                          dot={{ fill: '#FF6B6B', strokeWidth: 2 }}
                          activeDot={{ r: 8 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="competitors" 
                          name="Competitor" 
                          stroke="#4ADE80" 
                          strokeWidth={3}
                          dot={{ fill: '#4ADE80', strokeWidth: 2 }}
                          activeDot={{ r: 8 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="yourAI" 
                          name="AI Marketing Profile" 
                          stroke="#60A5FA" 
                          strokeWidth={3}
                          dot={{ fill: '#60A5FA', strokeWidth: 2 }}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                {/* Savings Card */}
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-center">
                        <p className="text-lg font-medium text-blue-100 mb-2">Monthly Savings</p>
                        <p className="text-4xl font-bold">{formatDollar(currentBusiness.monthlySavings)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-medium text-blue-100 mb-2">Annual Savings</p>
                        <p className="text-4xl font-bold">{formatDollar(currentBusiness.monthlySavings * 12)}</p>
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