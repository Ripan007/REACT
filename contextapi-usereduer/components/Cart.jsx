import React from 'react';

export default function Cart({ items, onUpdateItemQuantity }) {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
  return (
    <div>
      {items.cart === 0 && <p>no items in cart</p>}
      {items.length > 0 && (
        <ul>
          {items.map(item => {
            const formattedPrice = `$${item.price.toFixed(2)}`;
          })}
        </ul>
      )}
    </div>
  );
}
