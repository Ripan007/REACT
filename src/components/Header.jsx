import React, { useRef } from 'react';

export default function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();
  const cartQuantity = cart.items.length;
  function handleOpenCartClick() {
    modal.current.open();
  }
  return <div>Header</div>;
}
