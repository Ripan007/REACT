import React from 'react';
import { calculateInvestmentResults, formatter } from '../Util/investment';

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
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
