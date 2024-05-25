import React, { useState } from 'react';
import { DUMMY_PRODUCTS } from './dummy-products';

export default function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });
  function handleAddItemToCart() {
    setShoppingCart(prevShoppingCart => {
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
        updatedItem[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(product => product.id === id);

        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }
    });
  }
  return <div>App</div>;
}
