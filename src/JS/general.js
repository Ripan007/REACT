/*original array mutted
const arr = [1, 4, 3];
const newArr = arr.sort();
console.log(arr);
console.log(newArr);
*/

/* !mutated
const arr = [1, 5, 2];
const newArr = arr.toSorted();
console.log(newArr);
console.log(arr);
*/

/* toSpliced , toReversed*/
/*const arr = [1, 2, 3];
const newArr = arr.toReversed();
const newArr = arr.toSpliced(1, 1);
console.log(newArr);*/
/*const arr = ['a', 'b', 'c', 'd', 'e'];
console.log('🚀 ~ file: general.js:22 ~ arr:', arr);
const newArr = arr.slice(-1);
console.log('🚀 ~ file: general.js:23 ~ newArr:', newArr);

const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

console.log(arr1.reverse());

const combine = arr1.concat(arr2);
console.log(combine);

console.log([...arr1, ...arr2]);

console.log(combine.join('-'));
console.log(combine.join(','));
*/

/*const arr = [1, 2, 3];
console.log('ripan'.at(1));
console.log(arr.at(0));
console.log(arr.slice(-1)[0]);
console.log('general', arr[arr.length - 1]);
*/

const movements = [100, 45, 35, 78];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else {
//     console.log(`you withdraw ${Math.abs(movement)}`);
//   }
// }

/*movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdraw ${Math.abs(movement)}`);
  }
});*/

/*const currencies = new Map([
  ['US', 'united state dollar'],
  ['EUR ', 'europe'],
]);

currencies.forEach(function (value, key) {
  console.log(`${key}: ${value}`);
});

const uniqueCurrencies = new Set(['us', 'us', 'gbp']);
console.log('🚀 ~ file: general.js:77 ~ uniqueCurrencies:', uniqueCurrencies);
uniqueCurrencies.forEach(function (value, key) {
  console.log(`${key}:${value}`);
});
*/
