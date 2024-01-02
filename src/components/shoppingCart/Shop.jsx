export default function Shop({ onAddItemToCart }) {
  return (
    <section id=" shop">
      <h2>elegant clothing for every one</h2>
      <ul id="products">
        {DUMMUY_PRODUCTS.map(product => (
          <li key={product.id}>
            <Product {...product} onAddItemToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}
