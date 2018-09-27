var fs = require('fs');

var fileContents = fs.readFileSync('runo.txt');
console.log(fileContents.toString());
console.log('Yeay, program ended. :P');