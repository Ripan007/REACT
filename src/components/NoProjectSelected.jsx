import React from 'react'

export default function NoProjectSelected() {
    return (
        <div className="mt-24  text-center  w-2/3">
            <img
                src="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-empty-notebook-with-a-pencil-3d-rendering-png-image_9954855.png"
                alt="an empty task list"
                className="w-16 h-16 object-contain mx-auto"
            />
            <h2 className="text-xl font-bold  text-stone-500 my-4 ">
                no project selected
            </h2>
            <p className="text-stone-400 mb-4">
                select a project or get started with new one
            </p>
            <p className="mt-8">
                <button>create new project</button>
            </p>
        </div>
    )
}
