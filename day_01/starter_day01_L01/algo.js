//---1
let defi = "Pratiquer les algorythmes en JavaScript";
//---2
console.log(defi);
//---3
console.log(defi.length);
//---4
let upper = defi.toUpperCase();
console.log(upper);
//---5
let low = defi.toLowerCase();
console.log(low);
//----6 utiliser substring
console.log(defi.substring(-1, 9));
//---7
//---8 utiliser includes
console.log(defi.includes("Script"));
//----9 utiliser split
let string = "string";
console.log(string.split(""));
//---10
let phrase = "10 jour en JavaScript";
console.log(phrase.split(" "));
//---11
let site = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(site.split(","));
//----12 utiliser replace
console.log(phrase.replace("JavaScript", "PHP"));
//----13 utiliser charAt
console.log(phrase.charAt(15));
//----14 charCodeAt
console.log(phrase.charCodeAt("J"));
//-----15 indexOf
console.log(phrase.indexOf("a"));
//-----16 lastIndexOf
console.log(phrase.lastIndexOf("a"));
let conj =
  "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
//---17
console.log(conj.indexOf("parceque"));

//---18
console.log(conj.lastIndexOf("parceque"));
//---19
console.log(conj.search("parceque"));
//----20 trim()
console.log(conj.trim());
//----21 startsWith
console.log(conj.startsWith("Vous"));
//----22 endsWith
console.log(conj.endsWith("tion"));
//----23 match
console.log(conj.match(/a/));
//----24 concat
let java1 = "10 jour en";
let java2 = "JavaScript";
let java3 = java1.concat(" ", java2);
console.log(java3);
//----25 repeat
console.log(phrase.repeat(2));
