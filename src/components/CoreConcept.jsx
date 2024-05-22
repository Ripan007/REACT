import React from 'react';

export default function CoreConcept({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <pre>
        <code>{description}</code>
      </pre>
    </div>
  );
}
