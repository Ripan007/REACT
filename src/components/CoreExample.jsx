import React from 'react';

export default function CoreExample({ children, onSelect, isSelected }) {
  return (
    <div>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </div>
  );
}
