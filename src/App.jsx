import Accordian from './components/Accordian/Accordian'
import AccordianItem from './components/Accordian/AccordianItem'

export default function App() {
    return (
        <>
            <main>
                <section>
                    <Accordian className="accordion">
                        <AccordianItem
                            id={'experience'}
                            title="we got 20 years of experience"
                            className="accordion-item">
                            <article>
                                <p>show experience data of the user</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptas, eveniet.
                                </p>
                            </article>
                        </AccordianItem>
                        <AccordianItem
                            id={'local-guides'}
                            title="what you got from it ?"
                            className="accordion-item">
                            <article>
                                <p>show accordion random data</p>
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
