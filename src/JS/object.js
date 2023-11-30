/*
console.log(bio);
console.log(bio.firstName);
console.log(bio['lastName']);
exact Value
computed value
const nameKey = 'Name';
console.log(bio['first' + nameKey]);
console.log(bio['last' + nameKey]);*/

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
  mohit has 3 friends,and his best friend is called rajvir
opearator precedence
console.log(
  `${bio.firstName} has ${bio.friends.length} friends, and his best friend is called ${bio.friends[0]}`
);

/*
const bio = {
  firstName: 'mohit',
  lastName: 'yogi',
  birthYear: 1995,
  job: 'teacher',
  friends: ['rajvir', 'karishma', 'mohit'],
  hasDriverLicense: false,
  calAge: function (birthYear) {
    return 2024 - birthYear;
  },
  statement: function () {
    console.log(
      `${this.firstName} is a ${this.calAge(1995)}-year old ${
        this.job
      } ,and he has ${this.hasDriverLicense ? 'a' : 'not'}  driver license `
    );
  },
};

console.log(bio.statement());
*/

// write a method
// jonas is a 46-year old teacher , and  he has a  driver license

//  bmi = mass / (height * height)  / mass /(height ** 2)

/* const miller = {
  fullName: 'miller john',
  mass: 78,
  height: 1.69,
  calBmi: function () {
    return this.mass / this.height ** 2;
  },
};

const smith = {
  fullName: 'smith josh',
  mass: 92,
  height: 1.99,
  calBmi: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(miller.calBmi(), smith.calBmi());
"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!";

console.log(
  `${miller.fullName}'s BMI (${miller.calBmi()} is higher than ${
    smith.fullName
  }'s (${smith.calBmi()}))`
);*/

const prabhu = {
  firstName: 'prabhu',
  weight: 66,
  height: 1.4,
  calBmi: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};
const rajiv = {
  firstName: 'rajiv',
  weight: 55,
  height: 1.7,
  calBmi: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

prabhu.calBmi();
rajiv.calBmi();
console.log(prabhu.bmi);
console.log(rajiv.bmi);

if()