import React, { useState } from 'react';

export default function Main() {
  const [shoppingCart, setShoppingCart] = useState({ items: [] });

  function handleAddItemToCart() {
    setShoppingCart(prevShoppingCart => {
      const updatedItems = [...prevShoppingCart.items];
    });
    const existingCartItemIndex = updatedItems.findIndex(
      cartItem => cartItem === id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];
  }
  return <div>Main</div>;
}
