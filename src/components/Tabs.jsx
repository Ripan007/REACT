import React from 'react'

export default function Tabs({ buttons, children, ButtonsContainer }) {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}
