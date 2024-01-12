import React from 'react';

export default function Modal({onClose ,children}) {
  return (
    <div onClick={onClose}>
      <dialog open>{children}</dialog>
    </div>
  );
}
