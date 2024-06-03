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
    }
    return (
        <AccordianContext.Provider>
            <ul className={className}>{children}</ul>
        </AccordianContext.Provider>
    )
}
