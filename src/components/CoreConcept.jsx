import React from 'react';

export default function CoreConcept({ title, description }) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '20px',
        margin: '10px',
        borderRadius: '10px',
      }}
    >
      <h2>{title}</h2>
      <pre>
        <code>{description}</code>
      </pre>
    </div>
  );
}
