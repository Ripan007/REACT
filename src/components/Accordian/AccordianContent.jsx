import { useAccordianContext } from './Accordion'

export default function AccordionContent({ id, children }) {
    const { openItemId } = useAccordianContext()
    const isOpen = openItemId === id
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
