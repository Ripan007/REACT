import React, { useRef } from 'react';
import CartModal from './CartModal';

export default function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();
  const cartQuantity = cart.items.length;
  function handleOpenCartClick() {
    modal.current.open();
  }
  let modalActions = <button>close</button>;
  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>close</button>
        <button>checkout</button>
      </>
    );
  }
  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title=""
      />
    </>
  );
}
