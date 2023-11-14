import React from "react";

export const CoreConcept = ({ title, description }) => {
  return (
    <li className="bg-emerald-600">
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
