import { forwardRef, useImperaiveHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const CartModal = forwardRef(function Modal(
  { cartItems, onUpdateCartItemQuantity, title, actions },
  ref
) {
  const dialog = useRef();
  useImperaiveHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>title</h2>
      <Cart
        items={cartItems}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
      />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('dialog')
  );
});

export default CartModal