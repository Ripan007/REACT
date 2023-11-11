import React from "react";

export const TabContent = ({ children, onSelect }) => {
  //   console.log("tab content");
  return <button onClick={onSelect}>{children}</button>;
};
