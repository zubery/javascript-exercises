const sumAll = function(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    const first = Math.min(num1, num2);
    const last = Math.max(num1, num2);
    const totalInts = last - first + 1;
    const sum = ((first + last) * totalInts) / 2;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
