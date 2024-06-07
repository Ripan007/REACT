import React, { useState } from 'react'

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expecetdReturn: 6,
        duration: 10,
    })
    function handleChange() {}
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">initial investment</label>
                    <input type="number" required />
                </p>
                <p>
                    <label htmlFor="">annual investment</label>
                    <input type="number" required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">expected return</label>
                    <input type="number" required />
                </p>
                <p>
                    <label htmlFor="">duration</label>
                    <input type="number" required />
                </p>
            </div>
        </section>
    )
}
