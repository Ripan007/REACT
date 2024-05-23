import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

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
              <td>{formatter.format(yearData.totalInterest)}</td>
              <td>{formatter.format(yearData.totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

//  this way i could not able to achieve what i want
