import React from 'react'

export default function NewProject() {
    return (
        <div>
            <menu>
                <li>
                    <button>cancel</button>
                </li>
                <li>
                    <button>save</button>
                </li>
            </menu>
            <div>
                <p>
                    <label htmlFor="">title</label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">description</label>
                    <textarea />
                </p>
                <p>
                    <label htmlFor="">due date</label>
                    <input type="text" />
                </p>
            </div>
        </div>
    )
}
