var fs = require("fs")

fs.readFile('runo.txt', function(err, data){
	if (err) return console.error(err);
	console.log(data.toString());
	console.log('Program is really at the end now.');
});

console.log("Program ended, wohoo!?");
