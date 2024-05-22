import CoreConcept from './components/CoreConcept';
import Header from './components/Header';
import { CORE_CONCEPTS } from './data';
export default function App() {
  return (
    <>
      <Header />
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <menu>
          <ul>
            {CORE_CONCEPTS.map(conceptItem => (
              <CoreConcept {...conceptItem} />
            ))}
          </ul>
        </menu>
      </section>
    </>
  );
}
