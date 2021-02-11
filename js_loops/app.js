// for (let i=0; i<10; i++){
//   console.log(`hi ${i}`);
// }

// const person = [1,2,3,4,, "abc", null, undefined, 33.66]

// for(let i=0; i<person.length; i++){
//   console.log(person[i]);
// }

//for of loop

const names = ["abc", 'xyz', 'pqr'];
for(n of names){
  console.log(n);
}

// for in loop
const keyValue = { a : 12.44, "b": "xyz"};
for(x in keyValue){
  console.log(x);
  console.log(keyValue[x]);
}

//while loop

let i=0;
while(i<3){
  console.log(i);
  i++;
}

//do while loop
let o =0;

do{
  o++;
  console.log(o);
}while(o<3);

//if else
//if else if else
//switch
//break

//output
// abc
// app.js:15 xyz
// app.js:15 pqr
// app.js:21 a
// app.js:22 12.44
// app.js:21 b
// app.js:22 xyz
// app.js:29 0
// app.js:29 1
// app.js:29 2
// app.js:38 1
// app.js:38 2
// app.js:38 3
// index.html:40 Live reload enabled.