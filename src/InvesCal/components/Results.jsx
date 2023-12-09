import React from 'react';
import { calculateInvestmentResults } from '../Util/investment';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  return (
    <div>
      <p>results</p>
    </div>
  );
}
