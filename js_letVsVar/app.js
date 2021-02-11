//let vs var

//var--> functional scope 
//let--> block scope

// function abc(){
//   for(var i =0;i<5;i++){
//     console.log(i);
//   }
//   console.log(i);

//   if(1){
//     let color= 'blue';
//     console.log(color);
//      color= 'green';
//     console.log(color);

//     const colour = 'red';
//     console.log(colour);

//     var colore = 'pink';
//   }

//   console.log(i);
//   console.log(colore);
// }

// abc();

var age=24; // var append our age property to the javascript's global object and also the existed properties of window       object can be override by var 
let age1=23;// let will not append
console.log(2+2);

// 0
// app.js:5 1
// app.js:5 2
// app.js:5 3
// app.js:5 4
// app.js:7 5
// app.js:11 blue
// app.js:13 green
// app.js:16 red
// app.js:21 5
// app.js:22 pink