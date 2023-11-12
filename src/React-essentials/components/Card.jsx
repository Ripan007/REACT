import React from "react";

export const Card = ({ title, description }) => {
  return (
    <div className="bg-slate-500 m-1 max-w-fit p-2 rounded">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
