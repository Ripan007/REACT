import React from 'react';
import { calculateInvestmentResults } from '../util/investment';

export default function Results({ input }) {
  const results = calculateInvestmentResults(input);
  console.log(results);
  return (
    <table id="" result>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
    </table>
  );
}
