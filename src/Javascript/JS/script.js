"use strict";
// let hasDriverLicense = false;
// const passTest = true;
// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("he can drives");

// functions  //
//  reusable chunk of code => maintainable code
//  dry principle => clean code
/*function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice contain  ${apples} and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(2, 0);
console.log(appleJuice);
*/

//  calling /running /invoking functions
//  if we return =>  then  we have  to store  => then invoke
//  arguments => value
//  parameter  => reference

// function declaration //
//  the difference =>  function declaration called before defining the function (hoisting)
/*function calAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calAge1(1995);*/

// function expressions
/*const calAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calAge2(1994);
console.log(age1, age2);*/

// function expressions  //
//  my own prefer choice is function expression => structured way of code
//  arrow functions  //
//  does not have this keyword
//  one liner  function

/*const calAge3 = (birthYear) => 2024 - birthYear;
const age3 = calAge3(1995);
console.log(age3);*/

/*const ageUntilRetirement = (birthYear, name) => {
  const age = 2024 - birthYear;
  const retirement = 80 - age;
  return `${name} retires  at  the age of ${retirement}`;
};
const calRetirement = ageUntilRetirement(1995, "mohit");
console.log(calRetirement);*/

// functions calling other functions  //
