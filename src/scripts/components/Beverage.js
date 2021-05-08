var Food = require("./Food");

function Beverage(type) {
  Food.call(this, type);
}

Beverage.prototype = Object.create(Food.prototype);

Beverage.prototype.calculatePrice = function () {
  return this.type.price;
};

Beverage.prototype.calculateCalories = function () {
  return this.type.calories;
};

module.exports = Beverage;
