import React, { useState } from 'react'

export default function AccordianItem({ className, title, children }) {
    const { openItemId, openItem, closeItem } = useAccordianContext()
    return (
        <li className={className}>
            <h3>{title}</h3>
            <div>{children}</div>
        </li>
    )
}
