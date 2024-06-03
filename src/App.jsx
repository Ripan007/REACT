import Accordion from './components/Accordian/Accordion'

export default function App() {
   return (
      <>
         <main>
            <section>
               <Accordion className="accordion">
                  <Accordion.Item className="accordion-item" id={'experience'}>
                     <Accordion.Title className="accordion-item-title">
                        we got 20 years of experience
                     </Accordion.Title>
                     <Accordion.Content className="accordion-item-content">
                        <article>
                           <p>show experience data of the user</p>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Voluptas, eveniet.
                           </p>
                        </article>
                     </Accordion.Content>
                  </Accordion.Item>
                  <Accordion.Item
                     id={'local-guides'}
                     className="accordion-item">
                     <Accordion.Title className="accordion-item-title">
                        what you got from it ?
                     </Accordion.Title>
                     <Accordion.Content className="accordion-item-content">
                        <article>
                           <p>show accordion random data</p>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Voluptas, eveniet.
                           </p>
                        </article>
                     </Accordion.Content>
                  </Accordion.Item>
               </Accordion>
            </section>
         </main>
      </>
   )
}
