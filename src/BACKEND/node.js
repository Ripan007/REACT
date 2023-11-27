// write file
/*import fs from 'fs';

fs.writeFile('message.txt', 'welcome to node', err => {
  if (err) throw err;
  console.log('working');
});*/

// read file
import { log } from 'node:console';
import { open } from 'node:fs/promises';

const file = await open('./message.txt');

for await (const line of file.readLines()) {
  console.log(line);
}
