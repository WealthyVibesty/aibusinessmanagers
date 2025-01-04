export interface BusinessData {
  noAI: number;
  yourAI: number;
  monthlySavings: number;
  competitors: number;
}

export interface Businesses {
  [key: string]: BusinessData;
}