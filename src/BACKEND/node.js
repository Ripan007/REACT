// write file
import fs from 'fs';
fs.writeFile('message.txt', 'welcome to node', err => {
  if (err) throw err;
  console.log('working');
});
