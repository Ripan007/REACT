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

function calAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calAge1(1995);

// function expressions
const calAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calAge2(1994);
console.log(age1, age2);

// function expressions  //
