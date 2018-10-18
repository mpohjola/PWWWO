var fibonacci = exports.fibonacci = function(n) {
    if (n == 1)        return 1;
    else if (n == 2)   return 1;
    else                return fibonacci(n-1) + fibonacci(n-2);
}

var fibonacciLoop = exports.fibonacciLoop = function(n) {
    var fibos = [];
    fibos[0] = 0;
    fibos[1] = 1;
    fibos[2] = 1;
    for (var i = 3; i <= n; i++) {
        fibos[i] = fibos[i-2] + fibos[i-1];
    }
    return fibos[n];
}