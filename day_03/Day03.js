// --Higher Order Function
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Max", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// ---1
// console.log(products.map(getFullName));
//---2

//---3
// countries.forEach((element) => console.log(element));

//---4 et 5 FACULTATIf

//---6
// let majus = countries.map((el) => {
//   console.log(el.toUpperCase());
// });

//---7
let majus = countries.map((el) => {
  console.log(el.length);
});
