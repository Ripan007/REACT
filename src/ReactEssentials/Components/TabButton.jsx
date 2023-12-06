import React from 'react';

function TabButton({ children, isSelected, ...props }) {
  return (
    <>
      <button className={isSelected ? 'active' : ''} {...props}>
        {children}
      </button>
    </>
  );
}

export default TabButton;
