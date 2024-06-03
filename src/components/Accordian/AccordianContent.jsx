import { useAccordianContext } from './Accordion'
import { useAccordionItemContext } from './AccordionItem'

export default function AccordionContent({ className, children }) {
   const { openItemId } = useAccordianContext()
   const id = useAccordionItemContext()
   const isOpen = openItemId === id
   return (
      <div
         className={
            isOpen ? `${className ?? ''}open ` : `${className ?? ''} close`
         }>
         {children}
      </div>
   )
}
