import React from 'react'

export default function Signup() {
    return (
        <form>
            <h2>welcome on board</h2>
            <p>we just need little bit of data for you to get started</p>
            <div className="control">
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" />
            </div>
        </form>
    )
}
