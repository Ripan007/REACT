import React from 'react';
import { calculateInvestmentResults } from '../util/investment';

export default function Results({ input }) {
  const results = calculateInvestmentResults(input);
  console.log(results);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>Investment value</th>
          <th>interest(year)</th>
          <th>total interest</th>
          <th>invested capital</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
