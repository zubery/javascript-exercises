const add = function(operandL, operandR) {
	return operandL + operandR;
};

const subtract = function(operandL, operandR) {
	return operandL - operandR;
};

const sum = function(operands) {
	return operands.reduce((total, current) => total + current, 0);
};

const multiply = function(operands) {
  return operands.reduce((total, current) => total * current, 1);
};

const power = function(base, power) {
	let total = 1;
  for(let i = 0; i < power; i++) {
    total *= base;
  }
  return total;
};

const factorial = function(num) {
	if(num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
