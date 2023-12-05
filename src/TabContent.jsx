import React, { useState } from 'react';

function TabContent() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div id="tabs">
      <menu>
        <button></button>
        <button></button>
        <button></button>
      </menu>
      <div className="tab-contents"></div>
    </div>
  );
}

export default TabContent;
