import React from 'react';

export default function Product({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
}) {
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => onAddToCart(id)}>add to cart</button>
        </p>
      </div>
    </article>
  );
}
