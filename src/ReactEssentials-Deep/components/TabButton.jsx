import React from "react";

export const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li className="bg-red-700">
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};
