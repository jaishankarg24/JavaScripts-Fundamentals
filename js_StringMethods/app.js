//concatination

const fn = "jai";
const ln = "shankar";

const full = fn + " " + ln;
console.log(full)

// Append
fl = "jai";
fl += "shankar g";
console.log(fl);

sentence = "hi" +" "+ fn + " " + ln + " good morning";
console.log(sentence)

//length
len = sentence.length;
console.log(len);

//concat()
var conc = fn.concat(' ', ln);
console.log(conc);

//Change case
var upp = sentence.toUpperCase();
console.log(upp)
var upp = sentence.toLowerCase();
console.log(upp)

//Access
var upp = sentence[4];
console.log(upp)

//indexOf()
var upp = sentence.indexOf("a");
console.log(upp)

var upp = sentence.lastIndexOf("a");
console.log(upp)

//charAt()
var upp = sentence.charAt(3);
console.log(upp)

//substring()
var upp = sentence.substring(0, 4);
console.log(upp)

//slice()
var upp = sentence.slice(0,5);
console.log(upp)

//split()
var upp = sentence.split(" ");
console.log(upp)

//replace()
var upp = sentence.replace("jai", "shiv");
console.log(upp)

//includes()
var upp = sentence.includes("hi");
console.log(upp)


// jai shankar
// app.js:12 jaishankar g
// app.js:15 hi jai shankar good morning
// app.js:19 27
// app.js:23 jai shankar
// app.js:27 HI JAI SHANKAR GOOD MORNING
// app.js:29 hi jai shankar good morning
// app.js:33 a
// app.js:37 4
// app.js:40 12
// app.js:44 j
// app.js:48 hi j
// app.js:52 hi ja
// app.js:56 (5) ["hi", "jai", "shankar", "good", "morning"]
// app.js:60 hi shiv shankar good morning
// app.js:64 true

