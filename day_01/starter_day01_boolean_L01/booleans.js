//======= Booleans & Dates lev 01 ========
//1----
let firstName = "greg";
let lastName = "techer";
let country = "";
let city = "";
let age = "";

//2--- verif de typeof 10
console.log(typeof 10);
console.log("10" === 10);
//3--- verif pasefloat 9,8
console.log(parseInt(9.8));
console.log("10" === 10);
//4--- valeur booleene
let true1 = 4 > 3;
let true2 = 4 > 1;
let true3 = 4 > 2;
console.log(true1);
console.log(true2);
console.log(true3);

let faux1 = 4 > 5;
let faux2 = 3 > 5;
let faux3 = 2 > 5;
console.log(faux1);
console.log(faux2);
console.log(faux3);

//5--- verif sans log et avec log
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
let pyth = "python";
console.log((pyth.length = 10));
let jar = "jargon";
console.log(jar.length);

let pj = pyth != jar;
console.log(pj);
//6---
console.log(4 > 3 && 10 < 12); //vrai
console.log(4 > 3 && 10 > 12); //faux
console.log(4 > 3 || 10 < 12); //vrai
console.log(4 > 3 || 10 > 12); //faux
console.log(!(4 > 3)); //faux
console.log(!(4 < 3)); //vrai
console.log(!false); //vrai
console.log(!(4 > 3 && 10 < 12)); //faux
console.log(!(4 > 3 && 10 > 12)); // vrai
console.log(!(4 === "4")); //faux
//7---date
const d = new Date();
let year = d.getFullYear();
console.log(year);
let mois = d.getMonth();
console.log(mois);
let jour = d.getDay();
console.log(jour);
//---
