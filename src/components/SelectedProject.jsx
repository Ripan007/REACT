import React from 'react'

export default function SelectedProject({ project }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString(
        'en-US',
        { year: 'numeric', month: 'short', day: 'numeric' }
    )
    return (
        <div className="w-[35rem] mt-16 ">
            <header className="pb-4 mb-4  border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl ">{project.title}</h1>
                    <button>delete</button>
                </div>
                <p>{formattedDate}</p>
                <p>{project.description}</p>
            </header>
            task
        </div>
    )
}
