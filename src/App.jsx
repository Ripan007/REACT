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
      return { items: updatedItems };
    });
  }
  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart(prevShoppingCart => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        item => item.id === productId
      );
      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };
      updatedItem.quantity += amount;
      if (updatedItem.quantity <= 0) {
        updatedItems.spice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
      };
    });
  }
  return (
    <>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop onAddItemToCart={handleAddItemToCart} />
    </>
  );
}
