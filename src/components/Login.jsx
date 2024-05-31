import React, { useState } from 'react'

export default function Login() {
    function handleSubmit(event) {
        event.preventDefault()
        console.log(enteredValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>login</h1>
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="control no-margin">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <p className="form-actions">
                    <button className="button button-flat">resest</button>
                    <button type="submit" className="button">
                        submit
                    </button>
                </p>
            </div>
        </form>
    )
}
