import React, { useState } from 'react';
import './App.css';
const content = [
  ['react is awesome'],
  ['react is declarative'],
  ['react composition'],
];
function TabContent() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div id="tabs">
      <menu>
        <button
          className={activeContentIndex === 0 ? 'active' : ''}
          onClick={() => setActiveContentIndex(0)}
        >
          awesome
        </button>
        <button
          className={activeContentIndex === 1 ? 'active' : ''}
          onClick={() => setActiveContentIndex(1)}
        >
          declarative
        </button>
        <button
          className={activeContentIndex === 2 ? 'active' : ''}
          onClick={() => setActiveContentIndex(2)}
        >
          composition
        </button>
      </menu>
      <div className="tab-contents">
        <ul>
          {content[activeContentIndex].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TabContent;
