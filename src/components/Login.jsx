import React, { useState } from 'react'

export default function Login() {
    const [enteredvalues, setEnteredValues] = useState({
        email: '',
        pasword: '',
    })

    function handleInputChange(identifier, value) {
        setEnteredValues(preValues => ({
            ...preValues,
            [identifier]: value,
        }))
    }
    function handleSubmit(event) {
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>login</h2>
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={event =>
                            handleInputChange('email', event.target)
                        }
                    />
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
