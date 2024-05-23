import React from 'react';
import { calculateInvestmentResults } from '../util/investment';

export default function Results({ input }) {
  const results = calculateInvestmentResults(input);
  console.log(results);
  return <div>Results</div>;
}
