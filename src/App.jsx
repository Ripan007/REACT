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
      <h1>welcome to react ,lets have all the fun</h1>
    </>
  );
}
