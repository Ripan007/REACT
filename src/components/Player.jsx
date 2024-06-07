import React, { useState } from 'react'

export default function Player() {
    const [enteredPlayerName, setEnteredPlayerName] = useState('')
    const [submitted, setSubmitted] = useState(false)
    function handleChange(event) {
        setSubmitted(false)
        setEnteredPlayerName(event.target.value)
    }
    function handleClick() {
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
                <button onClick={handleClick}>set name</button>
            </p>
        </section>
    )
}
