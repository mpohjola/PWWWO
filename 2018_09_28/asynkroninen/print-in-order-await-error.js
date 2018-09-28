/*
* Asynchronous function calls handled with async/await. Added error handling.
*/
function printString(str) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                if (Math.random() < 0.1) {
                    reject(new Error('Terrible error occurred while reading: ' + str));
                } else {
                    console.log(str);
                    resolve();
                }
            },
            Math.floor(Math.random() * 100) + 1
        );
    });
}

async function printAll() {
    try {
        await printString("A");
        await printString("B");
        await printString("C");
    } catch (err) {
        console.log(err);
    }
}

printAll();