import { CORE_CONCEPTS } from './data'

const reactDescritption = ['fundamental', 'crucial', 'core']
function genRandomIndex(max) {
    return Math.floor(Math.random() * (max + 1))
}

function Header() {
    const description = reactDescritption[genRandomIndex(3)]
    return (
        <header>
            <img
                src="https://images.pexels.com/photos/21625359/pexels-photo-21625359/free-photo-of-bowl-of-soup.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="coffe-image"
            />
            <h1>react essentials</h1>
            <p>
                {description} react concept you will need for building any react
                app
            </p>
        </header>
    )
}
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
