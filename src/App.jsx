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
function CoreConcepts(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
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
                    <CoreConcepts
                        title="react"
                        description="react is a awesome library"
                    />
                </section>
            </main>
        </div>
    )
}
