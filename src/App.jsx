import React, { useState } from 'react';

export default function App() {
  const [shoppingCart,setShopppingCart] = useState({
    items:[]
  })

   function handleAddItemToCart(id){
    setShopppingCart((prevShoppingCart)=>{
      const updatedItems =  [...prevShoppingCart.items]
    })

   }
  return (
    <>

    </>
  );
}

