import React from 'react'

export default function SelectedProject({ project }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString(
        'en-US',
        { year: 'numeric', month: 'short', day: 'numeric' }
    )
    return (
        <div>
            <header>
                <div>
                    <h1>{project.title}</h1>
                    <button>delete</button>
                </div>
                <p>date</p>
                <p>description</p>
            </header>
            task
        </div>
    )
}
