import React, { useState } from 'react'

export default function Player() {
    const [enteredPlayerName, setEnteredPlayerName] = useState('')
    const [submitted, setSubmitted] = useState(false)
    function handleChange(event) {
        setEnteredPlayerName(event.target.value)
    }
    function handleSubmitted() {
        setSubmitted(true)
    }
    return (
        <section id="player">
            <h2>welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
            <p>
                <input
                    type="text"
                    value={enteredPlayerName}
                    onChange={handleChange}
                />
                <button onClick={handleSubmitted}>set name</button>
            </p>
        </section>
    )
}
