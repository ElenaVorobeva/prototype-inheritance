var { Food, getType, calculateSum } = require("./Food");

function Hamburger(type, stuffing) {
  Food.call(this, type);
  this.stuffing = stuffing;
  this.getSize = getType(this.type.typeName);
  this.getStuffing = getType(this.stuffing.typeName);
  this.calculatePrice = calculateSum(this.type.price, this.stuffing.price);
  this.calculateCalories = calculateSum(
    this.type.calories,
    this.stuffing.calories
  );
}

module.exports = Hamburger;
