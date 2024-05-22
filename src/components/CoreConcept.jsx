import React from 'react';

export default function CoreConcept({ title, description }) {
  return (
    <div style={{ border: '1px solid black', display: 'flex' }}>
      <h2>{title}</h2>
      <pre>
        <code>{description}</code>
      </pre>
    </div>
  );
}
