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
      updatedItems.push({
        id: id,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }
    return { items: updatedItems };
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart({});
  }
  return <div>Main</div>;
}
