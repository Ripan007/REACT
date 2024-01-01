import React, { useState } from 'react';

export default function App() {
  const [shoppingCart, setShopppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShopppingCart(prevShoppingCart => {
      const updatedItems = [...prevShoppingCart.items];
      const existingCartItemIndex = updatedItems.findIndex(
        cartItem => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(product => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }
      return{
        items:updatedItems
      }
    });
  }
  return <></>;
}
