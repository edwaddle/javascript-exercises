const convertToCelsius = function(degreeInFarenHeit) {
  return Math.round((degreeInFarenHeit - 32)*(5.0/9)*10)/10;
};

const convertToFahrenheit = function(degreeInCelsius) {
  return Math.round((degreeInCelsius*(9.0/5) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
