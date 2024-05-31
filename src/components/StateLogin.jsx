import React, { useState } from 'react'

export default function Login() {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    })

    function handleEnteredValues(identifier, value) {
        setEnteredValues(preValues => ({
            ...preValues,
            [identifier]: value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(enteredValues)
    }

    const emailIsInvalid =
        enteredValues.email !== '' && !enteredValues.email.includes('@')

    return (
        <form onSubmit={handleSubmit}>
            <h1>login</h1>
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={enteredValues.email}
                        onChange={event =>
                            handleEnteredValues('email', event.target.value)
                        }
                    />
                    <div className="control-error">
                        {emailIsInvalid && (
                            <p>the email which was assign is invalid</p>
                        )}
                    </div>
                </div>
                <div className="control no-margin">
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={enteredValues.password}
                        onChange={event =>
                            handleEnteredValues('password', event.target.value)
                        }
                    />
                </div>
                <p className="form-actions">
                    <button type="reset" className="button button-flat">
                        resest
                    </button>
                    <button type="submit" className="button">
                        submit
                    </button>
                </p>
            </div>
        </form>
    )
}
