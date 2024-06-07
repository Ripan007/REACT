import React, { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'

export default function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })
    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return { ...prevUserInput, [inputIdentifier]: newValue }
        })
    }
    return (
        <>
            <Header />
            <UserInput userInput={userInput} onChange={handleChange} />
        </>
    )
}
