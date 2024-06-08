import React from 'react'
import Input from './Input'

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
                <Input label="title" />
                <Input label="description" textarea />
                <Input label="due date" />
            </div>
        </div>
    )
}
