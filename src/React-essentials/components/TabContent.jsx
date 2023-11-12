import React from "react";

export const TabContent = ({ children, onSelect, isSelected }) => {
  //   console.log("tab content");
  return (
    <button className={isSelected ? "active" : undefined} onClick={onSelect}>
      {children}
    </button>
  );
};
