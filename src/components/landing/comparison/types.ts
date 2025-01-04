export const businesses = {
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
} as const;

export type Business = keyof typeof businesses;