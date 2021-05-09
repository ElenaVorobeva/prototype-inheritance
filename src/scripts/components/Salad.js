var { Food, getType, calculateMul } = require("./Food");

function Salad(type, size) {
  Food.call(this, type);
  this.size = size;
  this.getType = getType(this.type.typeName);
  this.getSize = this.size;
  this.calculatePrice = calculateMul(this.type.price, this.size);
  this.calculateCalories = calculateMul(this.type.calories, this.size);
}

module.exports = Salad;
