import { useAccordianContext } from './Accordion'

export default function AccordionContent({ id, className, children }) {
    const { openItemId } = useAccordianContext()
    const isOpen = openItemId === id
    return <div className={className}>{children}</div>
}
