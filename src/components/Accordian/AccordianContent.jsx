import { useAccordianContext } from './Accordion'

export default function AccordionContent({ className, children }) {
   const { openItemId } = useAccordianContext()
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
