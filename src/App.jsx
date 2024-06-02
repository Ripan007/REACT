import React from 'react'
import Accordian from './components/Accordian/Accordian'
import AccordianItem from './components/Accordian/AccordianItem'

export default function App() {
    return (
        <>
            <main>
                <section>
                    <h2>why work with us ?</h2>
                    <Accordian className="accordian">
                        <AccordianItem
                            className="accordian-item"
                            tille="first item">
                            <article>
                                <p>shows the first item</p>
                                <p>show some duplicate item</p>
                            </article>
                        </AccordianItem>
                        <AccordianItem tille="first item">
                            <article>
                                <p>shows the first item</p>
                                <p>show some duplicate item</p>
                            </article>
                        </AccordianItem>
                    </Accordian>
                </section>
            </main>
        </>
    )
}
