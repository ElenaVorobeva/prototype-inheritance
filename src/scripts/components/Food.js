function Food(type) {
  this.type = type;
}

Food.prototype.getType = function () {
  return this.type;
};

module.exports = Food;
