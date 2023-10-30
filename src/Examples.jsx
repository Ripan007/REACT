import { useState } from "react";
import { EXAMPLES } from "./data";
import TabButton from "./TabButton";
import Wrapper from "./Wrapper";
import "./App.css";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div className="show">
        <h1>{EXAMPLES[selectedTopic].title}</h1>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <p>{EXAMPLES[selectedTopic].code}</p>
      </div>
    );
  }
  return (
    <Wrapper title="examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              jsx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              state
            </TabButton>
          </>
        }
      ></Tabs>
      {tabContent}
    </Wrapper>
  );
}
