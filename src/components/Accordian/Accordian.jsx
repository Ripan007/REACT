import React, { createContext, useState } from 'react'
const AccordianContext = createContext()

export default function Accordian({ className, children }) {
    const { openItemId, setOpenItemId } = useState()
    function openItem() {}
    function closedItem() {}
    const contextValue = {
        openItemId: null,
    }
    return (
        <AccordianContext.Provider>
            <ul className={className}>{children}</ul>
        </AccordianContext.Provider>
    )
}
