//--ARRAYS : LEVEL 00
//---1
let vide = [];
console.log(vide); // ok
//---2
let npk = ["aa", "bb", "cc", "dd", "ee"]; // ok
//----3
console.log(npk.length); // ok
//---4
console.log(npk.indexOf("aa")); // egale 0
console.log(npk.indexOf("cc")); // egale 2
console.log(npk.indexOf("ee")); // egale 4
//---5
let mixedDataTypes = ["a1", "b2", "c3", "d4", "e5", "f6"];
console.log(mixedDataTypes.length); // ok
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
console.log(itCompanies); // ok
//---8
console.log(itCompanies.length); // ok
//---9
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);
//---10 pas reussi
console.log(itCompanies[(2, 5, 6)]);
console.log(itCompanies);

console.log();
//---11 a revoir
console.log(itCompanies[0].toUpperCase()); // ok
console.log(itCompanies[1].toUpperCase()); // ok
console.log(itCompanies[2].toUpperCase()); // ok
console.log(itCompanies[3].toUpperCase()); // ok
console.log(itCompanies[4].toUpperCase()); // ok
console.log(itCompanies[5].toUpperCase()); // ok

//---12
let comp =
  '"Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon sont de grandes entreprises d\'IT".';
console.log(comp);
//---13
//let verifComp = prompt("Entrez la compagnie").toUpperCase();
function veri() {
  if (
    verifComp.match("FACEBOOK") ||
    verifComp.match("GOOGLE") ||
    verifComp.match("MICROSOFT") ||
    verifComp.match("AMAZON") ||
    verifComp.match("ORACLE") ||
    verifComp.match("APPLE") ||
    verifComp.match("IBM")
  ) {
    alert("Elle existe.");
  } else {
    alert("Elle n'existe pas!");
  }
} // ok
// console.log(veri());
//---15
// console.log(itCompanies.sort()); //ok
//---16
// console.log(itCompanies.reverse());
//----17
// console.log(itCompanies.slice(4));
//--- 18

//---19
// console.log(itCompanies.slice(5, 6));
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
