const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(sumArray) {
  let init = 0;
  const sumTotal = sumArray.reduce(
    (accum, current) => accum + current,
    init,
  );

	return sumTotal;
};

const multiply = function(mulArray) {
  let init = 1;
  const mulTotal = mulArray.reduce(
    (accum, current) => accum * current,
    init,
  );

	return mulTotal;
};

const power = function(num, powerNum) {
	let powerResult = 1;
  if (powerNum === 0){
    return powerResult;
  }

  for (let i = 0; i<powerNum; i++){
    powerResult = powerResult * num;
  }

  return powerResult;
};

const factorial = function(num) {
	let result = 1;

  for(let i = num; i >0; i--){
    result = result * i;
  }

  return result;
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
