//local scope

// {
//   const message = "hello"; //local

// }
// console.log(message);//can not access local variable outside curly braces

// function abc(){
//   const message='hi';
//   console.log(message);//message local to abc()

// }

// abc();

// function xyz(){
//   const message = 'hello';
//   console.log(message);//message local to xyz()
// }

// xyz();

//global Scope

const color = 'red';//global

function col(){
  console.log(color);//red
  //const color='blue';
  //console.log(color);
}

col();