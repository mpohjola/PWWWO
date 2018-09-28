/*
* Asynchronous function calls handled with chained callbacks. Not pretty but gets the job done.
*/
function printString(str, callback) {
    setTimeout(
        () => {
            console.log(str);
            callback();
        },
        Math.floor(Math.random() * 100) + 1
    );
}

function printAll(){
    printString("A", () => {
        printString("B", () => {
            printString("C", () => {});
        });
    });    
}

printAll();