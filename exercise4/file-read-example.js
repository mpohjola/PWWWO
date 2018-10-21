var fs = require("fs");

const fileToRead = 'exampleFile.txt';


var readExampleSync = (file) => {return fs.readFileSync(file)};

var readExampleAsync = (file, callback) => fs.readFile(file, (err, result) => {
    if (err) {
        console.log('Error occured while reading file syncronously!' + err);
    } else {
        callback(result);
    }
});

var readExampleAsyncWithPromise = (file) => {
    return new Promise((resolve, reject) =>{
        fs.readFile(file, (err, contents) => {
            if (err) {
                reject(err);
            } else {
                resolve(contents);
            }
        })
    })
};

console.log("Read file:");
console.log("1. sync:");
var syncContents = readExampleSync(fileToRead);
console.log(syncContents + "\n\n");

readExampleAsync(fileToRead, (contents) => {
    console.log("2. async:");
    console.log(contents + "\n\n");
});

readExampleAsyncWithPromise(fileToRead)
    .then(result => {
        console.log("3. async with Promise: ")
        console.log(result + "\n\n")})
    .catch(error => console.log("Promise rejected with: " + error));
