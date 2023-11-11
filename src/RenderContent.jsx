import { useState } from "react";

const content = [
  ["show content first"],
  ["show content second"],
  ["show content third"],
];

function RenderContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <header>
        <h1>render content</h1>
      </header>
      <menu>
        <div id="tabs">
          <button onClick={() => setActiveIndex(0)}>first</button>
          <button onClick={() => setActiveIndex(1)}>second</button>
          <button onClick={() => setActiveIndex(2)}>third</button>
        </div>
      </menu>
      <div className="tab-content">
        <ul>
          {content[activeIndex].map((items) => (
            <li key={items}>{items}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default RenderContent;
