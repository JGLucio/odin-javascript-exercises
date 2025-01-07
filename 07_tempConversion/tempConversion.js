const convertToCelsius = function(far) {
  let celsius = 0;

  celsius = (far - 32) * (5/9);

  if(celsius%1 != 0){
    celsius = celsius.toFixed(1);
  }

  return Number(celsius);
};

const convertToFahrenheit = function(celsius) {
  let far = 0;

  far = celsius * (9/5) + 32;

  if(far%1 != 0){
    far = far.toFixed(1);
  }

  return Number(far);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
