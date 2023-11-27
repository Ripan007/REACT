// write file
/*import fs from 'fs';

fs.writeFile('message.txt', 'welcome to node', err => {
  if (err) throw err;
  console.log('working');
});*/

// read file
/*import { open } from 'node:fs/promises';

const file = await open('./message.txt');

for await (const line of file.readLines()) {
  console.log(line);
}
*/

// reading ,coding , practice

/*
npm package
var generateName = require('sillyname');
import generateName from 'sillyname';
var sillyName = generateName();
console.log(`my name is ${sillyName}`);
*/

/*import superheroes from 'superheroes';
const superheroes = require('superheroes');
console.log(`i am ${superheroes.random()}`);
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{ message: 'Type in your URL:', name: 'URL' }])
  .then(answers => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
