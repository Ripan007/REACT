import React, { createContext, useContext, useState } from 'react'
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

export default function Accordian({ className, children }) {
    const [openItemId, setOpenItemId] = useState('')

    function toggleItem(id) {
        setOpenItemId(prevId === id ? null : id)
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
