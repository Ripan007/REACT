import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

export default function NewProject({ onAdd }) {
    const modal = useRef()
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    function handleSave() {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value
        //  validate...
        if (
            enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            //  show the  error modal
            modal.current.open()
            return
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })
    }
    return (
        <>
            <Modal ref={modal} buttonCaption="okay">
                <h2 className="text-xl  font-bold text-stone-500 my-4">
                    invalid input
                </h2>
                <p className="text-stone-400  mb-4">
                    opp.. you forget to entered invalid value
                </p>
                <p className="text-stone-400 mb-4">
                    please make sure you provide a valid input for every input
                    value
                </p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950">
                            cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}>
                            save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="title" />
                    <Input ref={description} label="description" textarea />
                    <Input type="date" ref={dueDate} label="due date" />
                </div>
            </div>
        </>
    )
}
