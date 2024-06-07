import React from 'react'
import { calculateInvestmentResults } from '../util/investment'

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input)
    console.log('show data', resultsData)
    console.log(input)
    return <p>Results...</p>
}
