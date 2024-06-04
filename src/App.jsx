import CoreConcept from './components/CoreConcept'
import Header from './components/Header/Header'
import TabButton from './components/TabButton'
import { CORE_CONCEPTS } from './data'

export default function App() {
    function handleSelect() {
        console.log('button got clicked')
    }
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
                        <TabButton onSelect={handleSelect}>
                            components
                        </TabButton>
                        <TabButton onSelect={handleSelect}>props</TabButton>
                        <TabButton onSelect={handleSelect}>jsx</TabButton>
                        <TabButton onSelect={handleSelect}>state</TabButton>
                    </menu>
                    dynamic content
                </section>
            </main>
        </>
    )
}
