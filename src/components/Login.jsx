import React from 'react'

export default function Login() {
    return (
        <form>
            <h2>login</h2>
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" />
                </div>
            </div>
        </form>
    )
}
