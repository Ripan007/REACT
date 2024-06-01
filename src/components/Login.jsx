import { useRef, useState } from 'react'

export default function Login() {
    const [emailIsInvalid, setEmailIsInvalid] = useState(false)
    const email = useRef()
    console.log('email data', email)
    const password = useRef()

    function handleSubmit(event) {
        event.preventDefault()
        const enteredEmail = email.current.value
        const eneteredPassword = password.current.value
        console.log(enteredEmail, eneteredPassword)
        email.current.value = ''
        password.current.value = ''
    }

    const emailIsValid = enteredEmail.includes('@')
    if (!emailIsValid) {
        setEmailIsInvalid(true)
        return
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>login</h1>
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" ref={email} />
                    {emailIsInvalid && (
                        <p>email is empty , enter valid email</p>
                    )}
                </div>
                <div className="control no-margin">
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={password}
                    />
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
