import React from 'react'

export default function Accordian({ className, children }) {
    return (
        <ul className={className}>
            <section>{children}</section>
        </ul>
    )
}
