import { useState } from 'react'
import CoreConcept from './components/CoreConcept'
import Header from './components/Header/Header'
import TabButton from './components/TabButton'
import { CORE_CONCEPTS, EXAMPLES } from './data'

export default function App() {
    const [selectedTopic, setSelectedTopic] = useState('')
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log(selectedTopic)
    }

    let tabContent = <p>please select a topic</p>
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
            </div>
        )
    }

    return (
        <>
            <Header />
            <main></main>
        </>
    )
}
