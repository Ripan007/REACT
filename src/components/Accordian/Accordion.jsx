import React, { createContext, useContext, useState } from 'react'
import AccordianItem from './AccordionItem'
const AccordianContext = createContext()
export function useAccordianContext() {
    const ctx = useContext(AccordianContext)
    if (!ctx) {
        throw new Error(
            'Accordian related component must be wrapped  by <Accordian>.'
        )
    }
    return ctx
}

export default function Accordion({ className, children }) {
    const [openItemId, setOpenItemId] = useState('')

    function toggleItem(id) {
        setOpenItemId(prevId => (prevId === id ? null : id))
    }

    const contextValue = {
        openItemId: openItemId,
        toggleItem,
    }
    return (
        <AccordianContext.Provider value={contextValue}>
            <ul className={className}>{children}</ul>
        </AccordianContext.Provider>
    )
}

Accordian.Item = AccordianItem
