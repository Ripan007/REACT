import React from 'react'
import Input from './Input'

export default function NewProject() {
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">
                        cancel
                    </button>
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
