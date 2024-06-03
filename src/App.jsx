import Accordion from './components/Accordian/Accordion'

export default function App() {
    return (
        <>
            <main>
                <section>
                    <Accordion className="accordion">
                        <Accordion.Item
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
                        </Accordion.Item>
                        <Accordion.Item
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
                        </Accordion.Item>
                    </Accordion>
                </section>
            </main>
        </>
    )
}
