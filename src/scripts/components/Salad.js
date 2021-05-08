var Food = require("./Food");

function Salad(type, size) {
  Food.call(this, type);
  this.size = size;
}

Salad.prototype = Object.create(Food.prototype);

Salad.prototype.getSize = function () {
  return this.size;
};

Salad.prototype.calculatePrice = function () {
  return this.type.price * (this.size / 100);
};

Salad.prototype.calculateCalories = function () {
  return this.type.calories * (this.size / 100);
};

module.exports = Salad;
