import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, Users, PhoneCall } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ROICalculatorDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ROICalculatorDialog({ isOpen, onClose }: ROICalculatorDialogProps) {
  const [monthlyCallVolume, setMonthlyCallVolume] = useState("");
  const [agentCount, setAgentCount] = useState("");
  const [averageHourlyCost, setAverageHourlyCost] = useState("");
  const [savings, setSavings] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateSavings = () => {
    if (!monthlyCallVolume || !agentCount || !averageHourlyCost) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate potential savings.",
        variant: "destructive",
      });
      return;
    }

    const volume = parseFloat(monthlyCallVolume);
    const agents = parseFloat(agentCount);
    const hourlyRate = parseFloat(averageHourlyCost);

    // Basic ROI calculation
    const monthlyHours = agents * 160; // Assuming 160 working hours per month
    const currentMonthlyCost = monthlyHours * hourlyRate;
    const estimatedAISavings = currentMonthlyCost * 0.7; // Assuming 70% cost reduction

    setSavings(estimatedAISavings);
    
    console.log("ROI Calculator - Calculated savings:", estimatedAISavings);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            ROI Calculator
          </DialogTitle>
          <DialogDescription>
            Calculate your potential savings with AI-powered call handling
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <div className="relative">
              <PhoneCall className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                className="pl-9"
                type="number"
                placeholder="Monthly Call Volume"
                value={monthlyCallVolume}
                onChange={(e) => setMonthlyCallVolume(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                className="pl-9"
                type="number"
                placeholder="Number of Agents"
                value={agentCount}
                onChange={(e) => setAgentCount(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                className="pl-9"
                type="number"
                placeholder="Average Hourly Cost per Agent"
                value={averageHourlyCost}
                onChange={(e) => setAverageHourlyCost(e.target.value)}
              />
            </div>
          </div>

          {savings !== null && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700">
                Estimated Monthly Savings
              </h3>
              <p className="text-2xl font-bold text-green-800">
                ${savings.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-green-600 mt-2">
                Based on an average 70% reduction in call handling costs
              </p>
            </div>
          )}

          <Button onClick={calculateSavings} className="w-full mt-4">
            Calculate Savings
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}