/*
* Asynchronous function calls handled with async/await. Beautiful.
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

async function printAll() {
    await printString("A");
    await printString("B");
    await printString("C");   
}

printAll();