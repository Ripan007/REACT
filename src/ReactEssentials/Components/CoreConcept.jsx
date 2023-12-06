import React from 'react';

function CoreConcept({ ...concept }) {
  const { title } = concept;
  console.log(title);
  return <div></div>;
}

export default CoreConcept;
