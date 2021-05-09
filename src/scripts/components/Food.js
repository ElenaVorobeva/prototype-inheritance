var { SALAD_SIZE, INITIAL_RESULT } = require("../constants/variables");

function Food(type) {
  this.type = type;
}

function getType(name) {
  return name;
}

function calculateSum() {
  var result = INITIAL_RESULT;
  for (var i in arguments) {
    result = result + arguments[i];
  }
  return result;
}

function calculateMul(type, size) {
  return type * (size / SALAD_SIZE);
}

module.exports = {
  Food,
  getType,
  calculateSum,
  calculateMul,
};
