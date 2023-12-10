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
    if (existingCartItem) {
      const updatedItems = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItems;
    } else {
      const product = DUMMY_PRODUCTS.find(product => product.id === id);
    }
  }
  return <div>Main</div>;
}
