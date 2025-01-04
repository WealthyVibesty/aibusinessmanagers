import { Button } from '@/components/ui/button';

interface BusinessTypeSelectorProps {
  businesses: Record<string, any>;
  selectedBusiness: string;
  onSelect: (business: string) => void;
}

export default function BusinessTypeSelector({ businesses, selectedBusiness, onSelect }: BusinessTypeSelectorProps) {
  return (
    <div className="flex overflow-x-auto gap-3 pb-4 mb-8 scrollbar-hide">
      {Object.keys(businesses).map((business) => (
        <Button
          key={business}
          variant={selectedBusiness === business ? "default" : "outline"}
          className={`
            whitespace-nowrap px-6 py-4 text-base font-medium rounded-xl transition-all duration-300
            ${selectedBusiness === business ? 
              'bg-primary text-white shadow-lg scale-105' : 
              'hover:bg-primary/5 hover:scale-105'}
          `}
          onClick={() => onSelect(business)}
        >
          {business.replace(/([A-Z])/g, ' $1').trim()}
        </Button>
      ))}
    </div>
  );
}