export default function App() {
    return (
        <>
            <main>
                <section>
                    <Accordion className="accordion">
                        <Accordion.Item
                            id={'experience'}
                            className="accordion-item">
                            <Accordion.Title>
                                we got 20 years of experience
                            </Accordion.Title>
                            <Accordion.Content>
                                <article>
                                    <p>show experience data of the user</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Voluptas, eveniet.
                                    </p>
                                </article>
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordian.Item
                            id={'local-guides'}
                            className="accordion-item">
                            <Accordion.Title>
                                what you got from it ?
                            </Accordion.Title>
                            <Accordion.Content>
                                <article>
                                    <p>show accordion random data</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Voluptas, eveniet.
                                    </p>
                                </article>
                            </Accordion.Content>
                        </Accordian.Item>
                    </Accordion>
                </section>
            </main>
        </>
    )
}
