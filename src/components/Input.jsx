import React from 'react'

export default function Input({ label, textarea }) {
    return (
        <p>
            <label htmlFor="">{label}</label>
            {textarea ? <textarea /> : <input />}
        </p>
    )
}
