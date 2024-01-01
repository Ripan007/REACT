export default function Cart({ items, onUpdateItemQuantity }) {
  const totalPrice = items.reduce(
    (acc, item) => acc.item.price * item.quantity,0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`

  return <div id="cart">
    {items.length === 0 && <p>no items to the cart!</p>}
    {items.length > 0 &&(
        <ul id="cart-items">
            {items.map((item)=>{
                
            })}
        </ul>
    )}
  </div>;
}
