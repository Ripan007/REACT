import React from 'react';
import { calculateInvestmentResults } from '../Util/investment';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>year</th>
            <th>investmentValue</th>
            <th>interest(year)</th>
            <th>total interest</th>
            <th>invested capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map(yearData => {
            return (
              <tr key={yearData.year}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
