import React, { createContext, useContext, useState } from 'react'
import AccordionItem from './AccordionItem'

const AccordionContext = createContext()
export function useAccordianContext() {
    const ctx = useContext(AccordionContext)
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
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>{children}</ul>
        </AccordionContext.Provider>
    )
}

Accordion.Item = AccordionItem
