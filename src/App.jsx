import CoreConcept from './components/CoreConcept'
import Header from './components/Header/Header'
import TabButton from './components/TabButton'
import { CORE_CONCEPTS } from './data'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>time to get started</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h3>examples</h3>
                    <menu>
                        <TabButton>components</TabButton>
                        <TabButton>props</TabButton>
                        <TabButton>jsx</TabButton>
                        <TabButton>state</TabButton>
                    </menu>
                </section>
            </main>
        </>
    )
}
