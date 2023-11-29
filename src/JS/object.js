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

/*const interested = prompt(
  'what  are things  , you want to know what the random bio'
);
if (bio[interested]) {
  console.log(bio[interested]);
} else {
  console.log('the output is wrong');
}

bio.location = 'portblair';
bio['twitter'] = '@randomBuster';
console.log(bio);
*/

//  mohit has 3 friends,and his best friend is called rajvir
console.log(`${bio.firstName} has ${bio.friends.length}`);
