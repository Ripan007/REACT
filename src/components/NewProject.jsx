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
                <Input label="" />
                <Input label="" />
                <Input label="" />
            </div>
        </div>
    )
}
