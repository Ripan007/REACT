import { useState } from 'react'
import { EXAMPLES } from '../data'
import TabButton from './TabButton'

export default function Examples() {
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
            <section id="examples">
                <h3>examples</h3>
                <menu>
                    <TabButton
                        isSelected={selectedTopic === 'components'}
                        onSelect={() => handleSelect('components')}>
                        Components
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'props'}
                        onSelect={() => handleSelect('props')}>
                        Props
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'jsx'}
                        onSelect={() => handleSelect('jsx')}>
                        Jsx
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'state'}
                        onSelect={() => handleSelect('state')}>
                        State
                    </TabButton>
                </menu>
                {tabContent}
            </section>
        </>
    )
}
