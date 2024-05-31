import React from 'react'

export default function Signup() {
    function handleSubmit(event) {
        event.preventDefault()
        const fd = new FormData(event.target)
        const acquisitionChannel = fd.getAll('acquisition')
        const data = fd.Object()
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>welcome on board</h2>
            <p>we just need little bit of data for you to get started</p>
            <div className="control">
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="control-row">
                <div className="control">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="control">
                    <label htmlFor="conform-password">conform password</label>
                    <input
                        type="password"
                        id="control-password"
                        name="conform-password"
                    />
                </div>
            </div>
            <hr />
            <div className="control-row">
                <div className="control">
                    <label htmlFor="first-name">first name</label>
                    <input type="text" id="first-name" name="first-name" />
                </div>
                <div className="control">
                    <label htmlFor="last-name">last name</label>
                    <input type="text" id="last-name" name="last-name" />
                </div>
            </div>
            <div className="control">
                <label htmlFor="role">what role best describe you</label>
                <select name="role" id="role">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="employee">Employee</option>
                    <option value="founder">Founder</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <fieldset>
                <legend>what do you find us ?</legend>
                <div className="control">
                    <input
                        type="checkbox"
                        id="google"
                        name="acquisition"
                        value="google"
                    />
                    <label htmlFor="google">google</label>
                </div>
                <div className="control">
                    <input
                        type="checkbox"
                        id="friend"
                        name="acquisition"
                        value={'friend'}
                    />
                    <label htmlFor="friend">refered by friends</label>
                </div>
                <div className="control">
                    <input type="checkbox" name="other" id="other" />
                    <label htmlFor="other">other</label>
                </div>
            </fieldset>
            <div className="control">
                <label htmlFor="terms-and-conditions">
                    <input
                        type="checkbox"
                        id="terms-and-conditions"
                        name="terms"
                    />
                    agree to the terms and conditions
                </label>
            </div>
            <p className="form-actions">
                <button type="reset" className="button button-flat">
                    reset
                </button>
                <button className="button" type="submit">
                    sign up
                </button>
            </p>
        </form>
    )
}
