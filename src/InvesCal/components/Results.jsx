import React from 'react';
import { calculateInvestmentResults } from '../Util/investment';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults();
  console.log(input);
  return (
    <div>
      <p>results</p>
    </div>
  );
}
