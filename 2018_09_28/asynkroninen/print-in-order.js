/*
* Aynchronous demo. Run to see how it doesn't really print in order. :P
*/
function printString(str) {
    setTimeout(
        () => {
            console.log(str);
        },
        Math.floor(Math.random() * 100) + 1
    );
}

function printAll(){
    printString("A");
    printString("B");
    printString("C");
}

printAll();