const fibonacci = function(inputNum) {
    const num = Number(inputNum);
    if(num < 1) {
        return 'OOPS';
    } else if(num === 1 || num === 2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
