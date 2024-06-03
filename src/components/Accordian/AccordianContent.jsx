export default function AccordionContent() {
    return (
        <div
            className={
                isOpen
                    ? 'accordion-item-content open'
                    : 'accordion-item-content'
            }>
            {children}
        </div>
    )
}
