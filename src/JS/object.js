const bio = {
  firstName: 'mohit',
  lastName: 'yogi',
  age: 2024 - 1995,
  job: 'teacher',
  friends: ['rajvir', 'karishma', 'mohit'],
};

// console.log(bio);
// console.log(bio.firstName);
// console.log(bio['lastName']);
// exact Value
// computed value
// const nameKey = 'Name';
// console.log(bio['first' + nameKey]);
// console.log(bio['last' + nameKey]);

const interested = prompt(
  'what  are things  , you want to know what the random bio'
);
if (bio[interested]) {
  console.log(bio[interested]);
} else {
  console.log('the output is wrong');
}
