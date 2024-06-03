import { useAccordianContext } from './Accordion'

export default function AccordionTitle({ id, children }) {
    const { toggleItem } = useAccordianContext()
    return <h3 onClick={() => toggleItem(id)}>{children}</h3>
}
