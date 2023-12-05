import React, { useState } from 'react';

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
        <button onClick={() => setActiveContentIndex(0)}>awesome</button>
        <button onClick={() => setActiveContentIndex(1)}>declarative</button>
        <button onClick={() => setActiveContentIndex(2)}>composition</button>
      </menu>
      <div className="tab-contents"></div>
    </div>
  );
}

export default TabContent;
