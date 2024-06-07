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
        </table>
    )
}
