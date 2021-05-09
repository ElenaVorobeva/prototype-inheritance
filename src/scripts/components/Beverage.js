var { Food, getType } = require("./Food");

function Beverage(type) {
  Food.call(this, type);
  this.getType = getType(this.type.typeName);
  this.calculatePrice = getType(this.type.price);
  this.calculateCalories = getType(this.type.calories);
}

module.exports = Beverage;
