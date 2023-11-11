import React from "react";

const reactDescription = ["important", "crucial", "core"];

function genRandomInd(max) {
  return Math.floor(Math.random() * (max + 1));
}

export const Header = () => {
  const description = reactDescription[genRandomInd(2)];
  return (
    <div>
      <h1>react essentials</h1>
      <p>{description}</p>
    </div>
  );
};
