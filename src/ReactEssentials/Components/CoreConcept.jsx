import React from 'react';

function CoreConcept({ ...concept }) {
  console.log(concept);
  return <div>{concept.title}</div>;
}

export default CoreConcept;
