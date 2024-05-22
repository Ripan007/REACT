import './index.css';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header';
import { CORE_CONCEPTS } from './data';
import CoreExample from './components/CoreExample';
export default function App() {
  return (
    <>
      <Header />
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <menu>
          <ul>
            {CORE_CONCEPTS.map(conceptItem => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </menu>
      </section>
      <section id="core-examples">
        <menu>
          <h2>examples</h2>
          <CoreExample>components</CoreExample>
          <CoreExample></CoreExample>
          <CoreExample>llllll</CoreExample>
          <CoreExample>llllll</CoreExample>
        </menu>
      </section>
    </>
  );
}
