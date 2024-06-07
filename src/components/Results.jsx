import React from 'react'
import { calculateInvestmentResults } from '../util/investment'

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input)
    console.log('show data', resultsData)
    console.log(input)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>year</th>
                    <th>investment value</th>
                    <th>interest (year)</th>
                    <th>total interest</th>
                    <th>invested capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => {
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{yearData.valueEndOfYear}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
