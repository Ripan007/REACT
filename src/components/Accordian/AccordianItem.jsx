import React from 'react'
import { useAccordianContext } from './Accordian'

export default function AccordianItem({ id, className, title, children }) {
    const { openItemId, openItem, closeItem } = useAccordianContext()
    const isOpen = openItemId === id
    return (
        <li className={className}>
            <h3>{title}</h3>
            <div className={isOpen ? 'open' : undefined}>{children}</div>
        </li>
    )
}
