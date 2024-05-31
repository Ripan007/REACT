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
            <div className="control-row">
                <div className="control">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="control">
                    <label htmlFor="control-password">control password</label>
                    <input
                        type="password"
                        id="control-password"
                        name="control-password"
                    />
                </div>
            </div>
            <hr />
        </form>
    )
}
