const fs = require('fs');
fs.writeFile('message.txt', 'welcome node', err => {
  if (err) throw err;
  console.log('welcome');
});
