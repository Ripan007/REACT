import fs from 'fs';
import { open } from 'node:fs/promises';
fs.writeFile('message.txt', 'welcome node', err => {
  if (err) throw err;
  console.log('welcome');
});

const file = await open('./message.txt');
for await (const line of file.readLines(){
    console.log(line);

})
