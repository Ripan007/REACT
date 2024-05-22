import './index.css';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header';
import { CORE_CONCEPTS } from './data';
import CoreExample from './components/CoreExample';
import { useState } from 'react';
export default function App() {
  const [activeTabContent, setActiveTabContent] = useState();
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
        <menu style={{ display: 'flex', gap: '20px' }}>
          <h2>examples</h2>
          <CoreExample>components</CoreExample>
          <CoreExample>jsx</CoreExample>
          <CoreExample>props</CoreExample>
          <CoreExample>state</CoreExample>
        </menu>
      </section>
    </>
  );
}
