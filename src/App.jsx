import './index.css';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header';
import { CORE_CONCEPTS } from './data';
import CoreExample from './components/CoreExample';
import { useState } from 'react';
export default function App() {
  const [activeTabContent, setActiveTabContent] = useState();
  function handleClick(event) {
    setActiveTabContent(event);
  }

  let tabContent = <></>;
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
          <CoreExample onSelect={() => handleClick('components')}>
            components
          </CoreExample>
          <CoreExample onSelect={() => handleClick('jsx')}>jsx</CoreExample>
          <CoreExample onSelect={() => handleClick('props')}>props</CoreExample>
          <CoreExample onSelect={() => handleClick('state')}>state</CoreExample>
        </menu>
      </section>
    </>
  );
}
