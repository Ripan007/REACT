import React from 'react';

export default function Modal({children}) {
  return (
    <div>
      <dialog open={true}>{children}</dialog>
    </div>
  );
}
