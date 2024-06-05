export default function Examples() {
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
