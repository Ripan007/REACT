import React from 'react'
import { useAccordianContext } from './Accordion'

export default function AccordionItem({ id, className, title, children }) {
    const { openItemId, toggleItem } = useAccordianContext()
    const isOpen = openItemId === id

    return <li className={className}></li>
}
