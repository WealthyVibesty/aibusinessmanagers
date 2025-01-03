import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormData } from "./types";

interface BusinessBasicsStepProps {
  form: UseFormReturn<ProfileFormData>;
}

export function BusinessBasicsStep({ form }: BusinessBasicsStepProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Business Name</FormLabel>
            <FormDescription>
              The official name of your business as it appears on legal documents and marketing materials.
            </FormDescription>
            <FormControl>
              <Input placeholder="e.g., Acme Solutions, The Coffee House" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="industry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Industry</FormLabel>
            <FormDescription>
              Select the primary industry that best describes your business activities.
            </FormDescription>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="technology">Technology & Software</SelectItem>
                <SelectItem value="retail">Retail & E-commerce</SelectItem>
                <SelectItem value="healthcare">Healthcare & Wellness</SelectItem>
                <SelectItem value="finance">Finance & Banking</SelectItem>
                <SelectItem value="education">Education & Training</SelectItem>
                <SelectItem value="hospitality">Hospitality & Tourism</SelectItem>
                <SelectItem value="manufacturing">Manufacturing & Industrial</SelectItem>
                <SelectItem value="services">Professional Services</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="companySize"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Size</FormLabel>
            <FormDescription>
              The total number of employees in your organization, including full-time and part-time staff.
            </FormDescription>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees (Startup/Small Business)</SelectItem>
                <SelectItem value="11-50">11-50 employees (Small-Medium Business)</SelectItem>
                <SelectItem value="51-200">51-200 employees (Medium Business)</SelectItem>
                <SelectItem value="201-500">201-500 employees (Large Business)</SelectItem>
                <SelectItem value="500+">500+ employees (Enterprise)</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormDescription>
              Your business website URL. This helps us analyze your online presence and provide better recommendations.
            </FormDescription>
            <FormControl>
              <Input placeholder="e.g., https://www.yourbusiness.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}