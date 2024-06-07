import React, { useRef, useState } from 'react'

export default function PlayerRef() {
    const PlayerName = useRef()
    const [enteredPlayerName, setEnteredPlayerName] = useState(null)

    function handleClick() {
        setEnteredPlayerName(PlayerName.current.value)
    }

    return (
        <section id="player">
            <h2>welcome {enteredPlayerName ?? 'unknown entity'} </h2>
            <p>
                <input ref={PlayerName} type="text" value={enteredPlayerName} />
                <button onClick={handleClick}>set name</button>
            </p>
        </section>
    )
}
