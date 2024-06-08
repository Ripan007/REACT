import React from 'react'

export default function NoProjectSelected() {
    return (
        <div className="mt-24  text-center  w-2/3">
            <img
                src="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-empty-notebook-with-a-pencil-3d-rendering-png-image_9954855.png"
                alt="an empty task list"
            />
            <h2>no project selected</h2>
            <p>select a project or get started with new one</p>
            <p>
                <button>create new project</button>
            </p>
        </div>
    )
}
