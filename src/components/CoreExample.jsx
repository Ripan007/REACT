import React from 'react';

export default function CoreExample({ children, onSelect, onActive }) {
  return (
    <div>
      <button onClick={onSelect}>{children}</button>
    </div>
  );
}
