exports.random1 = (a, b) => {
    return Math.floor(Math.random() * (b-a)) + a;
}

exports.random2 = (number) => {
    return Math.floor(Math.random() * Math.min(1, number));
}