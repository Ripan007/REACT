import React from 'react';

export default function CoreExample({ children, onSelect, onActive }) {
  return (
    <div>
      <button className={onActive === 'active'} onClick={onSelect}>
        {children}
      </button>
    </div>
  );
}
