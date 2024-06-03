import Place from './Place'
import Accordion from './components/Accordian/Accordion'
import SearchableList from './components/SearchableList/SearchableList'

const PLACES = [
    { id: 'african', title: 'african', description: 'it is a deserted area' },
    { id: 'india', title: 'india', description: 'india is wonderfull' },
    {
        id: 'andaman',
        title: 'andaman',
        description: 'andaman is my homeland territory',
    },
]

export default function App() {
    return (
        <>
            <main>
                <section>
                    <Accordion className="accordion">
                        <Accordion.Item
                            className="accordion-item"
                            id={'experience'}>
                            <Accordion.Title className="accordion-item-title">
                                we got 20 years of experience
                            </Accordion.Title>
                            <Accordion.Content className="accordion-item-content">
                                <article>
                                    <p>show experience data of the user</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Voluptas, eveniet.
                                    </p>
                                </article>
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item
                            id={'local-guides'}
                            className="accordion-item">
                            <Accordion.Title className="accordion-item-title">
                                what you got from it ?
                            </Accordion.Title>
                            <Accordion.Content className="accordion-item-content">
                                <article>
                                    <p>show accordion random data</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Voluptas, eveniet.
                                    </p>
                                </article>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion>
                </section>
                <section>
                    <SearchableList items={PLACES} itemKeyFun={item => item.id}>
                        {item => <Place item={item} />}
                    </SearchableList>
                    <SearchableList
                        items={['item 1', 'item 2']}
                        itemKeyFun={item => item}>
                        {item => item}
                    </SearchableList>
                </section>
            </main>
        </>
    )
}

//  working with debouncng
