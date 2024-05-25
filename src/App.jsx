import React, { useState } from 'react';

export default function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });
  function handleAddItemToCart() {
    setShoppingCart(prevShoppingCart => {
      const updatedItems = [...prevShoppingCart.items];
    });
  }
  return <div>App</div>;
}
