import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormData } from "./types";

interface MarketingDetailsStepProps {
  form: UseFormReturn<ProfileFormData>;
}

export function MarketingDetailsStep({ form }: MarketingDetailsStepProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="currentChannels"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Marketing Channels</FormLabel>
            <FormDescription>
              List the marketing channels you currently use to reach customers. Separate multiple channels with commas.
            </FormDescription>
            <FormControl>
              <Input placeholder="e.g., Facebook Ads, Email Newsletter, Instagram, SEO" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="marketingBudget"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Monthly Marketing Budget</FormLabel>
            <FormDescription>
              Your approximate monthly budget for marketing activities. This helps us recommend suitable strategies.
            </FormDescription>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0-1000">$0 - $1,000 (Startup Budget)</SelectItem>
                <SelectItem value="1001-5000">$1,001 - $5,000 (Growth Budget)</SelectItem>
                <SelectItem value="5001-10000">$5,001 - $10,000 (Scaling Budget)</SelectItem>
                <SelectItem value="10001+">$10,001+ (Enterprise Budget)</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="marketingGoals"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Marketing Goals</FormLabel>
            <FormDescription>
              Your primary marketing objectives. What do you want to achieve? Be specific about your targets.
            </FormDescription>
            <FormControl>
              <Input placeholder="e.g., Increase website traffic by 50%, Generate 100 leads per month" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}