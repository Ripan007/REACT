import React, { useState } from "react";
import { Header } from "./Header";
import { Card } from "./Card";
import { cardData } from "./data";
import { TabContent } from "./TabContent";
import { tabContents } from "./datas";
//  name export name should be same as mentioned

export const Main = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  //   let tabContent = "please select a button";
  function handleClick(selectedButton) {
    // console.log(selectedButton);
    // tabContent = selectedButton;
    // console.log(tabContent);
    setSelectedTopic(selectedButton);
  }
  //   console.log("main component");

  let tabContent = <p>select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div className="tab-content">
        <h1>{tabContents[selectedTopic].title}</h1>
        <p>{tabContents[selectedTopic].description}</p>
      </div>
    );
  }
  return (
    <>
      <Header />
      {/*  better way to access data */}
      {/* old way   <Card title = {cardData[0].title}/> */}
      <section>
        <Card {...cardData[0]} />
        <Card {...cardData[1]} />
        <Card {...cardData[2]} />
      </section>
      <section>
        {/* attribute way */}
        {/* <TabContent label="components"></TabContent>
        <TabContent label="jsx"></TabContent>
        <TabContent label="props"></TabContent>
        <TabContent label="state"></TabContent> */}
        <menu>
          <TabContent onSelect={() => handleClick("components")}>
            components
          </TabContent>
          <TabContent onSelect={() => handleClick("jsx")}>jsx</TabContent>
          <TabContent onSelect={() => handleClick("props")}>props</TabContent>
          <TabContent onSelect={() => handleClick("state")}>state</TabContent>
        </menu>
        {/* dynamic content */}
        {/* {!selectedTopic && <p>select a topic</p>}
        {selectedTopic && (
          <div className="tab-content">
            <h1>{tabContents[selectedTopic].title}</h1>
            <p>{tabContents[selectedTopic].description}</p>
          </div>
        )} */}
        {tabContent}
      </section>
    </>
  );
};
