// --Higher Order Function
// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// const names = ["Max", "Mathias", "Elias", "Brook"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];
//---4, 5, 8, 11, 14, 16 FACULTATIf
// ----1
// console.log(products.map(getFullName));
//-----2

//-----3
// countries.forEach((element) => console.log(element));

//-----6
// let majus = countries.map((el) => {
//   console.log(el.toUpperCase());
// });

//-----7
// let countriesLength = countries.map((el) => {
//   console.log(el.length);
// });

//-----9
// let nameMaj = names.map((el) => {
//   console.log(el.toUpperCase());
// });

//-----10
// const result = countries.filter((laland) => laland.includes("land"));
// console.log(result);

//-----12
// const long_pays = countries.filter((long) => long.length > 6);
// console.log(long_pays);
//-----13

//-----15
// let acc = 0;
// let redd = numbers.reduce((acc, x) => {
//   return acc + x;
// });
// console.log(redd);

//-----17
// explication

//-----18
// let verif = names.some(sup7);
// function sup7(item) {
//   return item > 7;
// }
// console.log(verif);

//-----19
// let lala = countries.every(checkLand);
// function checkLand(item) {
//   return item.includes("land");
// }
// console.log(lala);

//-----20
//--la difference entre find et finindex est que find renvoie comme resultat l'élémentet findindex renvoie l'index

//-----21
// const found = countries.find((element) => (element.length = 6));
// console.log(found);

//----22
// const found = countries.findIndex((element) => (element.length = 6));
// console.log(found);
//=============================================

//___Sets and Maps
// Exercises:Level 1

// const a = {4, 5, 8, 9};
// const b = {3, 4, 5, 7}
// const countries = ["Finland", "Sweden", "Norway"];

//-----1
// const vide = new Set();

//-----2
// vide.add(1);
// vide.add(2);
// vide.add(3);
// vide.add(4);
// vide.add(5);
// vide.add(6);
// vide.add(7);
// vide.add(8);
// vide.add(9);
// vide.add(10);

// for (const item of vide) {
// console.log(item);
// }
// console.log(vide);

//-----3
// vide.delete(6);
// console.log(vide);

//-----4
// vide.clear();
// console.log(vide);
//----6

//___Exercises:Level 2
const a = new Set([4, 5, 8, 9]);
const b = new Set([3, 4, 5, 7]);
//--1
let intersection = new Set([...a].filter((x) => b.has(x)));
// console.log(intersection);

//--2
let union = new Set([...new Set([...a, ...b])]);
// console.log(union);

//--Destructuring and Spreading
//--Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60,
// };

//-----1
// const [e, pi, gravity, humanBodyTemp, waterBooilingTemp] = constants;
// console.log(constants);

// //----2
let fin = countries[0];
console.log(fin);
let est = countries[1];
let sw = countries[2];
let den = countries[3];
let nor = countries[4];
console.log(countries);
// countries.length = 0;
// countries.splice(-1, 0, "fin", "est", "sw", "den", "nor");
// console.log(countries);

//--Exercises: Level 2
// const constants = [2.72, 3.14, 9.81, 37, 100];
// const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//-----1

//----2
