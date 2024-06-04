import { CORE_CONCEPTS } from './data'

function CoreConcepts({ title, description }) {
    return (
        <>
            <li>
                <h3>{title}</h3>
                <p>{description}</p>
            </li>
        </>
    )
}

export default function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>time to get started</h2>
                    <ul>
                        <CoreConcepts {...CORE_CONCEPTS[0]} />
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>
    )
}
