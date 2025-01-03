import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormData } from "./types";

interface TargetAudienceStepProps {
  form: UseFormReturn<ProfileFormData>;
}

export function TargetAudienceStep({ form }: TargetAudienceStepProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="targetAge"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Target Age Range</FormLabel>
            <FormDescription>
              The primary age group that your products or services are designed for. This helps in targeting marketing efforts effectively.
            </FormDescription>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select target age range" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="18-24">18-24 (Gen Z/Young Adults)</SelectItem>
                <SelectItem value="25-34">25-34 (Millennials)</SelectItem>
                <SelectItem value="35-44">35-44 (Gen X/Young Professionals)</SelectItem>
                <SelectItem value="45-54">45-54 (Gen X/Established Professionals)</SelectItem>
                <SelectItem value="55+">55+ (Baby Boomers/Seniors)</SelectItem>
                <SelectItem value="all">All Ages</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="targetLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Target Location</FormLabel>
            <FormDescription>
              The geographical areas where your target customers are located. Can be specific cities, regions, or countries.
            </FormDescription>
            <FormControl>
              <Input placeholder="e.g., New York City, Western Europe, Global" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="targetInterests"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Target Interests</FormLabel>
            <FormDescription>
              Key interests, hobbies, or characteristics of your ideal customers. Separate multiple interests with commas.
            </FormDescription>
            <FormControl>
              <Input placeholder="e.g., Fitness, Sustainable living, Technology enthusiasts" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}