import React from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';
import Product from './Product';

export default function Shop({ onAddItemToCart }) {
  return (
    <section id="shop">
      <h2>elegant shopping for everyone</h2>
      <ul id="products">
        {DUMMY_PRODUCTS.map(product => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}
