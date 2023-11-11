import React from "react";

const reactDescription = ["important", "crucial", "core"];

function genRandomInd(max) {
  console.log(
    "🚀 ~ file: DynamicOutput.jsx:6 ~ genRandomInd ~ genRandomInd:",
    genRandomInd
  );
  return Math.floor(Math.random() * (max + 1));
}

export const DynamicOutput = () => {
  const description = reactDescription[genRandomInd(2)];
  return (
    <div>
      DynamicOutput
      <h1>{description}</h1>
    </div>
  );
};
