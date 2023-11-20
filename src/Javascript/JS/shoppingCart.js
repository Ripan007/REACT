export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product}${quantity}`);
};

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`{product}${quantity}`);
}
