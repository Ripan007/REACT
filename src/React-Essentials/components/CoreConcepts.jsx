import React from 'react'
import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts() {
  return (
    <div>
      <section id="core-concepts">
        {CORE_CONCEPTS.map(conceptItem => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
        <CoreConcept {...CORE_CONCEPTS[1]} />
        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </section>
    </div>
  );
}
