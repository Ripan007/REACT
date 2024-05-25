import React, { useState } from 'react';

export default function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });
  function handleAddItemToCart() {
    setShoppingCart(prevShoppingCart => {
      const updatedItems = [...prevShoppingCart.items];
      const existingCartItemIndex = updatedItems.findIndex(item.id);
      cartItem => cartItem.id === item;
    });
  }
  return <div>App</div>;
}
