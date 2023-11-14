import React from "react";
const reactDescription = ["important", "crucial", "core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export const Header = () => {
  const description = reactDescription[genRandomInt(2)];
  return (
    <div className="bg-slate-400">
      <h1>react essentials</h1>
      <p>{description} react concepts will need for building a app</p>
    </div>
  );
};
