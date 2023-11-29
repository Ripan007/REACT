/*rajiv', 'gopi', 'kamla'];
 accessing the  value
console.log(friends[0]);

const years = new Array('2000', '2001');
console.log(years[0]);

 mutating the value

friends[0] = 'chanda';
console.log(friends);

console.log(friends[friends.length - 2]);*/

/*const calAge = function (birthyear) {
  return 2024 - birthyear;
};

const years = [2000, 2001, 1995, 1994];
console.log(calAge(years[0]));
const age1 = calAge(years[1]);
const age2 = calAge(years[2]);
const age3 = calAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calAge(years[0]),
  calAge(years[1]),
  calAge(years[2]),
  calAge(years[3]),
];
console.log(ages);*/

/* function methods*/

/*const friends = ['mohit', 'gopi', 'jyoti', 'sarvana'];
friends.push('raj');
friends.unshift('kabita');
friends.pop();
friends.shift();

console.log(friends.indexOf('gopi'));
console.log(friends.includes('rajvir'));*/

// 50-300 => 15%
// different => 20%
const calTip = function (bills, tips) {
  return bills * tips;
};

const bills = [125, 555, 44];
const tips = [0.15, 0.2];
const firstCus = calTip(bills[0], tips[0]);
console.log(firstCus);
const totals = bills + tips;
console.log(totals);
