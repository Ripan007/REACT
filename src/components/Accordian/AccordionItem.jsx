export default function AccordionItem({ id, className, children }) {
   return (
      <AccordionItemContext.Provider>
         <li className={className}>{children}</li>
      </AccordionItemContext.Provider>
   )
}
