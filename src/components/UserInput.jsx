import React from 'react'

export default function UserInput() {
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
