//--ARRAYS : LEVEL 00
//---1
// let vide = [];
// console.log(vide); // ok
//---2
// let npk = ["aa", "bb", "cc", "dd", "ee"]; // ok
//----3
// console.log(npk.length); // ok
//---4
// console.log(npk.indexOf("aa")); // egale 0
// console.log(npk.indexOf("cc")); // egale 2
// console.log(npk.indexOf("ee")); // egale 4
//---5
let mixedDataTypes = ["a1", "b2", "c3", "d4", "e5", "f6"];
console.log(" mixedDataTypes", mixedDataTypes.length); // ok
//---6
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
]; // ok
//---7
// console.log(itCompanies); // ok
//---8
// console.log(itCompanies.length); // ok
//---9
// console.log(itCompanies[0], itCompanies[3], itCompanies[6]);
//---10""""""""""""" pas reussi
// console.log(itCompanies[(2, 5, 6)]);
// console.log(itCompanies);

//---11 a revoir
// console.log(itCompanies[0].toUpperCase()); // ok
// console.log(itCompanies[1].toUpperCase()); // ok
// console.log(itCompanies[2].toUpperCase()); // ok
// console.log(itCompanies[3].toUpperCase()); // ok
// console.log(itCompanies[4].toUpperCase()); // ok
// console.log(itCompanies[5].toUpperCase()); // ok

//---12
// let comp = itCompanies.join(",");
// console.log(comp);
//---13
//let verifComp = prompt("Entrez la compagnie").toUpperCase();
// function veri() {
//   if (
//     verifComp.match("FACEBOOK") ||
//     verifComp.match("GOOGLE") ||
//     verifComp.match("MICROSOFT") ||
//     verifComp.match("AMAZON") ||
//     verifComp.match("ORACLE") ||
//     verifComp.match("APPLE") ||
//     verifComp.match("IBM")
//   ) {
//     alert("Elle existe.");
//   } else {
//     alert("Elle n'existe pas!");
//   }
//} // ok
// console.log(veri());
//---15
// console.log(itCompanies.sort()); //ok
//---16
// console.log(itCompanies.reverse());
//----17
// console.log(itCompanies.slice(3));
//--- 18
// console.log(itCompanies.slice(0, -4));
//---19
// console.log(itCompanies.slice(-3));
//--- 20
// console.log(itCompanies.splice(0));
//----21
// console.log(itCompanies.splice(3, 1));
// console.log(itCompanies);
//---22
// console.log(itCompanies.splice(6, 1));
// console.log(itCompanies);
//---23
// console.log(itCompanies.splice(0, 6));// marche pas
// console.log(itCompanies);

//===============================================

//________ARRAY LEVEL 01 MAIN JS_______

//---1 et 2
// let text =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, VueJs, Laravel.";
// console.log(text.replace(",", ""));
// words = text.split(" ");
// console.log(words);
// console.log(words.length);

//---3
// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// console.log(shoppingCart.push("Meat"));
// console.log(shoppingCart);

// console.log(shoppingCart.push("Sugar"));
// console.log(shoppingCart);

// console.log(shoppingCart.pop());
// console.log(shoppingCart);

// console.log(shoppingCart.replace("Tea", "Green tea"));
// console.log(shoppingCart);

//--4
// let pays = prompt("Entrez la ville").toUpperCase();
// console.log(pays);
// function locat() {
//   if (pays.match("MORROCO")) {
//     alert("MORROCO");
//   }
// }

//---5
// let compa = prompt("Entrez l'entreprise'").toUpperCase();
// console.log(compa);
// function locat() {
//   if (compa.match("SASS")) {
//     alert("Sass est un preprocesseur CSS");
//   }
// }

//---6""""""""""""""""""AC
// const frontEnd = ["HTML", "CSS", "JS", "VueJs", "VueX"];
// const backEnd = ["Node", "Express", "MongoDB"];
// let fullStack = [frontEnd + backEnd];
// console.log(fullStack);

//===============================================
//---Loops: Level00

//----1
//--boucle while_________________
// let g = 0;
// while (g < 0) {
//   g += 1;
//   print("g devient" + g);
// }
// console.log(g);

//  boucle for__________________
// let boucle1 = "";
// for (let i = 0; i < 10; i++) {
//   boucle1 = boucle1 + i;
// }
// console.log("boucle for", boucle1);
//---boucle while_________________
// let whhile = 0;
// while (whhile < 3) {
//   whhile++;
// }
// console.log("while", whhile);
// boucle do while_________
// let dow = "";
// let i = 0;
// do {
//   i = i + 1;
//   dow = dow + i;
// } while (i < 5);

// console.log("dow", dow);
//---4-------
// function ffor() {
//   let retourLigne = "";
//   for (let i = 0; i < 10; i++) {
//     retourLigne += "#";
//     console.log("ex 4", retourLigne);
//   }
// }
// ffor();

//---5---------
// for (let x = 0; x <= 10; x++) {
//   console.log(x, " ", x + " = " + x * x);
// }

//------6---
// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log("i", i);
//   }
// }
//------7---------
// for (let i = 0; i < 100; i++) {
//   if (i % 3 == 0) {
//     console.log("i", i);
//   }
// }
//------8---------
//---(FACULTATIF)----
//------9---------

//===============================================
//~~~~~Loops: Level01
//-----1
// console.log(randString(7));
// function randString(str_length) {
//   let rstring = "";
//   let char = "ABZERTYUIOPMLKJHGFDSQWXCVNazertyuiopmlkjhgfdsqwxcvbn0123456789";
//   for (let i = 0; i < str_length; i++) {
//     rstring += char.charAt(Math.floor(Math.random() * char.length));
//   }
//   return rstring;
// }

//-----2
// let rcolor = "";
// let col = 0xffffff;
// for (let i = 0; i < col; i++) {
//   rcolor += ((Math.random() * col) << 0).toString(16);
//   console.log(rcolor);
//   break;
// }

//~~~~~Functions: Level01
//-----1

//-----2  ______________________AC
// function identité() {
//   let firstName = "gregory";
//   let lastName = "techer";
//   return firstName + " " + lastName;
// }
// console.log(identité());

//-----3
// let nbr = number(5, 4);

// function number(a, b) {
//   return a + b;
// }
// console.log(nbr);
//-----4
// let aire_rectangle = number(5, 4) + " metre carré";

// function number(a, b) {
//   return a * b;
// }
// console.log(aire_rectangle);

//-----5
// let perimetre = 2 * number(5, 4) + " metre carré";

// function number(a, b) {
//   return a * b;
// }
// console.log(perimetre);

//-----6
// let circle = 3.14 * number(5, 4) + " cent carré";

// function number(a, b) {
//   return a * b;
// }
// console.log(circle);

//-----7 et 8 FACULTATIF
//========================================

//---Objects: Level01
//--1
let chien = {};
//--2
console.log(chien);
//---3

//---4

//---5

//~~~~Objects: Level02
//---1 et 2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

console.log(Math.max.apply(points, users));

// console.log(users);
//---3

//---4
