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

const arr = ['a', 'b', 'c', 'd', 'e'];
console.log('🚀 ~ file: general.js:22 ~ arr:', arr);
const newArr = arr.slice(-1);
console.log('🚀 ~ file: general.js:23 ~ newArr:', newArr);
