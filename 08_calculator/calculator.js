const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(array) {
  let total = 0;
  for (num of array){
    total += num;
  }
  return total;
  
};

const multiply = function(array) {
  let total = 1;
  for (num of array){
    total *= num;
  }
  return total;
};

const power = function(num1, num2) {
  let total = num1;
  while (num2 > 1){
    total *= num1;
    num2--;
  }
  return total;
};

const factorial = function(num) {
	let total = 1;
  if (num === 1 || num === 0){
    return total;
  }
  else{
    for (let i = 1; i <= num; i++){
      total *= i;
    }
  }
  return total;
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
