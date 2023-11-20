"use strict";
// let hasDriverLicense = false;
// const passTest = true;
// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("he can drives");

// functions  //
//  reusable chunk of code => maintainable code
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice contain  ${apples} and ${oranges} oranges`;
  return juice;
}

//  calling /running /invoking functions
//  if we return =>  then  we have  to store  => then invoke
//  arguments => value
//  parameter  => reference
const appleJuice = fruitProcessor(2, 0);
console.log(appleJuice);
