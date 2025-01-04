import React from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

interface IndustrySelectorProps {
  businesses: string[];
  selectedBusiness: string;
}

export const IndustrySelector = ({ businesses, selectedBusiness }: IndustrySelectorProps) => {
  return (
    <TabsList className="w-full flex flex-col gap-4 bg-transparent p-0">
      {businesses.map(business => (
        <TabsTrigger 
          key={business} 
          value={business} 
          className={`
            w-full px-6 py-5 text-xl text-gray-600
            bg-white hover:bg-blue-50 
            data-[state=active]:bg-blue-100 
            data-[state=active]:text-blue-700
            shadow-sm border rounded-2xl 
            transition-all duration-200 
            font-medium
          `}
        >
          {business}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};