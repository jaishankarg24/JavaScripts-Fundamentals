//creating an Array

const num = [1, 2, 3, 4, 5];

const num1 = new Array(1, 2, 3, 4 ,6);

const stng = ["abc", 22, true, 3.5, undefined, null];
console.log(num1);

console.log(num);
console.log(stng[3]);

let val;

val= num.length;
val = Array.isArray(stng);
console.log(val);

num[2]="jai";
console.log(num);

val = stng.indexOf(undefined);
console.log(val);

stng.push(88);
console.log(stng);

stng.unshift(33.33);
console.log(stng);

stng.pop();
console.log(stng);

stng.shift();
console.log(stng);

stng.splice(2, 3);//splice(start position, no of elements to delete)
console.log(stng);

stng.reverse();
console.log(stng);

val = num.concat(num1);
console.log(val);

val= num.sort();
console.log(val);

const num2  = [5, 23, 65, 34, 44, 52];
val= num2.sort();
console.log(val);
num2.sort(function(x,y){
  return x-y;
});

console.log(num2);//Ascending

num2.sort(function(x,y){
  return y-x;
});

console.log(num2);//Descending

// (5) [1, 2, 3, 4, 6]
// app.js:10 (5) [1, 2, 3, 4, 5]
// app.js:11 3.5
// app.js:17 true
// app.js:20 (5) [1, 2, "jai", 4, 5]
// app.js:23 4
// app.js:26 (7) ["abc", 22, true, 3.5, undefined, null, 88]
// app.js:29 (8) [33.33, "abc", 22, true, 3.5, undefined, null, 88]
// app.js:32 (7) [33.33, "abc", 22, true, 3.5, undefined, null]
// app.js:35 (6) ["abc", 22, true, 3.5, undefined, null]
// app.js:38 (3) ["abc", 22, null]
// app.js:41 (3) [null, 22, "abc"]
// app.js:44 (10) [1, 2, "jai", 4, 5, 1, 2, 3, 4, 6]
// app.js:47 (5) [1, 2, 4, 5, "jai"]
// app.js:51 (6) [23, 34, 44, 5, 52, 65]
// app.js:56 (6) [5, 23, 34, 44, 52, 65]
