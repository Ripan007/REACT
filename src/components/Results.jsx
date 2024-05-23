import React from 'react';
import { calculateInvestmentResults } from '../util/investment';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  //   console.log(results);
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
      <tbody>
        {resultsData.map(yearData => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
