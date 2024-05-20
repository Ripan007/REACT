import React, { useState } from 'react';

const content = [
  [
    'React is extremely popular',
    'It makes building complex, interactive UIs a breeze',
    "It's powerful & flexible",
    'It has a very active and versatile ecosystem',
  ],
  [
    'Components, JSX & Props',
    'State',
    'Hooks (e.g., useEffect())',
    'Dynamic rendering',
  ],
  [
    'Official web page (react.dev)',
    'Next.js (Fullstack framework)',
    'React Native (build native mobile apps with React)',
  ],
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <>
      <div id="tabs">
        <menu>
          <button onClick={() => setActiveContentIndex(0)}>why react ?</button>
          <button onClick={() => setActiveContentIndex(1)}>
            core features
          </button>
          <button onClick={() => setActiveContentIndex(2)}>
            related resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map(item => {
              <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <h1>welcome to react ,lets have all the fun</h1>
    </>
  );
}
