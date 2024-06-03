import React, { createContext, useState } from 'react'
const AccordianContext = createContext()

export default function Accordian({ className, children }) {
    const { openItemId, setOpenItemId } = useState()
    function openItem(id) {
        setOpenItemId(id)
    }
    function closedItem() {
        setOpenItemId(null)
    }
    const contextValue = {
        openItemId: openItemId,
        openItem,
        closedItem,
    }
    return (
        <AccordianContext.Provider value={contextValue}>
            <ul className={className}>{children}</ul>
        </AccordianContext.Provider>
    )
}
