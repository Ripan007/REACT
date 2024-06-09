import React from 'react'
import NewTask from './NewTask'

export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl  font-bold text-stone-700 mb-4">task</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && (
                <p className="text-stone-800 my-4">
                    this projects does not have any tasks yet
                </p>
            )}
            {tasks.length > 0 && <ul>{tasks.}</ul>}
        </section>
    )
}
