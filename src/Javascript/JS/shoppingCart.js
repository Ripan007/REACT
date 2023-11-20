export const cart = [];

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`{product}${quantity}`);
}
