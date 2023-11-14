import React from "react";

export const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <li className="bg-red-700">
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};
