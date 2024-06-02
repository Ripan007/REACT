import Accordian from './components/Accordian/Accordian'
import AccordianItem from './components/Accordian/AccordianItem'

export default function App() {
    return (
        <>
            <main>
                <section>
                    <Accordian className="accordion">
                        <AccordianItem title="first" className="accordion-item">
                            <article>
                                <p>show first some randon data</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptas, eveniet.
                                </p>
                            </article>
                        </AccordianItem>
                        <AccordianItem
                            title="second"
                            className="accordion-item">
                            <article>
                                <p>show first some randon data</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptas, eveniet.
                                </p>
                            </article>
                        </AccordianItem>
                    </Accordian>
                </section>
            </main>
        </>
    )
}

//
