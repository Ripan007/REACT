import React from "react";
import { CORE_CONCEPTS } from "./data";
import { CoreConcept } from "./CoreConcept";

export const CoreConcepts = () => {
  return (
    <div>
      <section id="core-concepts">
        <h2>core concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((coreItem) => (
            <CoreConcept key={coreItem.title} {...coreItem} />
          ))}
        </ul>
      </section>
    </div>
  );
};
