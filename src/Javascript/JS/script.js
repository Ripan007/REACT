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
// when we require  small pieces to process the juice
/*const cutPieces = function (fruit) {
  return fruit * 3;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `juice contains ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
};

console.log(fruitProcessor(2, 4));*/

// reviewing functions //
/*const calAge = function (birthYear) {
  return 2034 - birthYear;
};

const yearsUntilRetirement = function (birthYear, name) {
  const age = calAge(birthYear);
  const retirement = 80 - age;
  if (retirement > 0) {
    console.log(`${name} retires at the age  of ${retirement} 😆 `);
    return retirement;
  } else {
    console.log(`${name} already retires 🎃`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1995, "mohit"));
console.log(yearsUntilRetirement(1395, "mohit"));
*/

const calcAverage = (score1, score2, score3) => score1 + score2 + score3 / 3;
const scoreDolphins = (score1, score2, score3) =>
  calcAverage(score1, score2, score3);
const scoreKoalas = (score1, score2, score3) =>
  calcAverage(score1, score2, score3);
const avgDolphins = Math.floor(scoreDolphins(200, 220, 100));
const avgKoalas = Math.floor(scoreKoalas(65, 54, 49));
console.log(avgDolphins, avgKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins wins (${avgDolphins} vs${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`koalas wins (${avgDolphins} vs${avgKoalas})`);
  } else {
    console.log(`no teams wins 🙂`);
  }
};

checkWinner();

//  a team only when  if it  has the average score of the  double team
