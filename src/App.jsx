import CoreConcept from './components/CoreConcept'
import Header from './components/Header/Header'
import TabButton from './components/TabButton'
import { CORE_CONCEPTS } from './data'
let tabContent = 'please select a button'
export default function App() {
    function handleSelect(selectedButton) {
        tabContent = selectedButton
        console.log(selectedButton)
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
                        <TabButton onSelect={() => handleSelect('components')}>
                            Components
                        </TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>
                            Props
                        </TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>
                            Jsx
                        </TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>
                            State
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </>
    )
}
