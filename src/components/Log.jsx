import React from 'react'

export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map(turn => (
                <li key={``}></li>
            ))}
        </ol>
    )
}
