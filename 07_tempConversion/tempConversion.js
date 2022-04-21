const roundToOneDecimal = function(number) {
  return Math.round(number * 10) / 10;
}

const ftoc = function(fahrenheit) {
  const celcius = (fahrenheit - 32) * (5/9);
  return roundToOneDecimal(celcius);
};

const ctof = function(celcius) {
  const fahrenheit = (celcius * (9/5)) + 32;
  return roundToOneDecimal(fahrenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
