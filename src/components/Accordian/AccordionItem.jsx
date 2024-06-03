import { createContext, useContext } from 'react'

const AccordionItemContext = createContext()
export function useAccordionItemContext() {
   const ctx = useContext(AccordionItemContext)
   if (!ctx) {
      throw new Error(
         'AccordianItem-related component  must be wrapped by <Accordion.Item> '
      )
   }
}
export default function AccordionItem({ id, className, children }) {
   return (
      <AccordionItemContext.Provider value={id}>
         <li className={className}>{children}</li>
      </AccordionItemContext.Provider>
   )
}
