import { CORE_CONCEPTS } from '../data'
import CoreConcept from './CoreConcept'

export default function CoreConcepts() {
    return (
        <>
            <section id="core-concepts">
                <h2>time to get started</h2>
                <ul>
                    {CORE_CONCEPTS.map(coreItem => (
                        <CoreConcept {...coreItem} />
                    ))}
                </ul>
            </section>
        </>
    )
}
