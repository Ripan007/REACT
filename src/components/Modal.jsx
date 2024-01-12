import React from 'react';

export default function Modal({onClose ,children}) {
  return (
    <div>
      <dialog onClick={onClose} open>
        {children}
      </dialog>
    </div>
  );
}
