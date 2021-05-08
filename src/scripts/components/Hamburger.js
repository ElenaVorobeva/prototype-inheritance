var Food = require("./Food");

function Hamburger(type, stuffing) {
  Food.call(this, type);
  this.stuffing = stuffing;
}

Hamburger.prototype = Object.create(Food.prototype);

Hamburger.prototype.getStuffing = function () {
  return this.stuffing;
};

Hamburger.prototype.calculatePrice = function () {
  return this.type.price + this.stuffing.price;
};

Hamburger.prototype.calculateCalories = function () {
  return this.type.calories + this.stuffing.calories;
};

module.exports = Hamburger;
