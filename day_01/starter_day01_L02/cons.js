let sentence =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(sentence);
let sent2 =
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"";
console.log(sent2);
//--- verif de typeof 10
console.log(typeof 10);
console.log("10" === 10);
//--- verif pasefloat 9,8
console.log(parseFloat(9.8));
console.log("10" === 10);
//---- verifier "on"
let conc = "python, jargon";
console.log(conc.includes("on"));
//--- verif jargon
let phrase = "I hope this course is not full of jargon.";
console.log(phrase.includes("jargon"));
//--- generer un nombre
function aleat(min, max) {
  return Math.random() * (max - min);
}

console.log(aleat(0, 100));
function aleat2(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(aleat2(50, 100));
console.log(aleat2(0, 255));
//----utiliser substring
let sent3 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sent3.indexOf("because"));
console.log(sent3.lastIndexOf("because"));

console.log(sent3.substring(31, 55));

//----
