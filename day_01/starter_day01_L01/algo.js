let defi = "Pratiquer les algorythmes en JavaScript";

console.log(defi);
let upper = defi.toUpperCase();
console.log(upper);

let low = defi.toLowerCase();
console.log(low);
// utiliser substring
console.log(defi.substring(-1, 9));
// utiliser includes
console.log(defi.includes("Script"));

//----utiliser split
let string = "string";
console.log(string.split(""));
let phrase = "10 jour en JavaScript";
console.log(phrase.split(" "));
let site = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(site.split(","));
//----utiliser replace
console.log(phrase.replace("JavaScript", "PHP"));
//----utiliser charAt
console.log(phrase.charAt(15));
//----charCodeAt
console.log(phrase.charCodeAt("J"));
//-----indexOf
console.log(phrase.indexOf("a"));
//-----lastIndexOf
console.log(phrase.lastIndexOf("a"));
//=========================
let conj =
  "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
console.log(conj.search("parceque"));
//----trim()
console.log(conj.trim());
//----startsWith
console.log(conj.startsWith("Vous"));
//----endsWith
console.log(conj.endsWith("tion"));
//----match
console.log(conj.match(/a/));
//----concat
let java1 = "10 jour en";
let java2 = "JavaScript";
let java3 = java1.concat(" ", java2);
console.log(java3);
//----repeat
console.log(phrase.repeat(2));
