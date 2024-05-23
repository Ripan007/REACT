import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment';

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
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{yearData.year}</td>
              <td>{yearData.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
