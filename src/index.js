/* REQUIRE */

var {
  SIZE_SMALL,
  SIZE_LARGE,
  STUFFING_CHEESE,
  STUFFING_SALAD,
  STUFFING_POTATO,
  CAESAR,
  OLIVIER,
  COLA,
  COFFEE,
} = require("./scripts/constants/variables");

var Hamburger = require("./scripts/components/Hamburger");
var Salad = require("./scripts/components/Salad");
var Beverage = require("./scripts/components/Beverage");

/* FUNCTIONS */

function reducer(total, num) {
  return total + num;
}

function calculateOrderPrice() {
  var values = Object.values(arguments);
  return `Итого тугриков: ${values.reduce(reducer)}`;
}

function calculateOrderCalories() {
  var values = Object.values(arguments);
  return `Итого калорий: ${values.reduce(reducer)}`;
}

/* INSTANCES */

var hamburger1 = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
var hamburger2 = new Hamburger(SIZE_SMALL, STUFFING_POTATO);
var hamburger3 = new Hamburger(SIZE_LARGE, STUFFING_SALAD);
var salad1 = new Salad(CAESAR, 500); //Вторая переменная - это пример выбранного кол-во салата пользователем.
var salad2 = new Salad(CAESAR, 50);
var beverage1 = new Beverage(COLA);
var beverage2 = new Beverage(COFFEE);

/* ORDER IMITATION */

var order1 = {
  price: calculateOrderPrice(
    hamburger1.calculatePrice,
    hamburger2.calculatePrice
  ),
  calories: calculateOrderCalories(
    hamburger1.calculateCalories,
    hamburger2.calculateCalories
  ),
};

var order2 = {
  price: calculateOrderPrice(
    hamburger3.calculatePrice,
    salad1.calculatePrice,
    beverage1.calculatePrice
  ),
  calories: calculateOrderCalories(
    hamburger3.calculateCalories,
    salad1.calculateCalories,
    beverage1.calculateCalories
  ),
};

var order3 = {
  price: calculateOrderPrice(salad2.calculatePrice, beverage2.calculatePrice),
  calories: calculateOrderCalories(
    salad2.calculateCalories,
    beverage2.calculateCalories
  ),
};

/* PAYMENT IMITATION */
function freezeOrders(order) {
  Object.freeze(order);
}

/* RESULTS */

console.log(order1); // {price: "Итого тугриков: 125", calories: "Итого калорий: 70"}
console.log(order2); // {price: "Итого тугриков: 670", calories: "Итого калорий: 185"}
console.log(order3); // {price: "Итого тугриков: 130", calories: "Итого калорий: 30"}

freezeOrders(order1);

console.log(
  (order1.price = calculateOrderPrice(
    hamburger1.calculatePrice,
    hamburger3.calculatePrice
  ))
); // TypeError: Attempted to assign to readonly property.
