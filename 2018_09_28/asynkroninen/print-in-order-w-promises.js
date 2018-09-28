/*
* Asynchronous function calls handled with chained promises. A lot better than callbacks
*/
function printString(str) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(str);
                resolve();
            },
            Math.floor(Math.random() * 100) + 1
        );
    });
}

function printAll() {
    printString("A")
    .then(()=> { return printString("B")})
    .then(()=> { return printString("C")})
    .catch(() => {});    
}

printAll();