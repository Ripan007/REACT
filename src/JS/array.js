/*rajiv', 'gopi', 'kamla'];
 accessing the  value
console.log(friends[0]);

const years = new Array('2000', '2001');
console.log(years[0]);

 mutating the value

friends[0] = 'chanda';
console.log(friends);

console.log(friends[friends.length - 2]);*/

const calAge = function (birthyear) {
  return 2024 - birthyear;
};

const years = [2000, 2001, 1995, 1994];
console.log(calAge(years[1]));
const age1 = calAge(years[0]);
console.log(age1);
