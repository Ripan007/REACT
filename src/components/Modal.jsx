import React from 'react';

export default function Modal({onClose ,children}) {
  return (
    <div onClick={onClose}>
      <form>
        <dialog open>{children}</dialog>
      </form>
    </div>
  );
}
