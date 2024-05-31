import React from 'react'

export default function Login() {
    function handleSubmit(event) {
        event.preventDefault()
        console.log('submitted')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>login</h2>
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="control no-margin">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" />
                </div>
            </div>
            <p className="form-actions">
                <button className="button button-flat">reset</button>
                <button type="submit" className="button">
                    login
                </button>
            </p>
        </form>
    )
}
