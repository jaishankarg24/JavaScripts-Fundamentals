//Function Declaration

function names(firstName="jai"){
  return `Hello ${firstName}`;
};

console.log(names("shankar"));

//Function Expression

const nam = function(first="jai"){
  return `Name is ${first}`;
};

console.log(nam());

//Function inside Array

const namings ={
  firstname:function(n="jai"){
      return `Hi ${n} How Are You??`;
  },

  age:25,
  address: "bengaluru",
};

console.log(namings.firstname("shankar"));

//IIFE--> Immediately Invokable function Expression

(function(days){ console.log(`no of days ${days}`);})(1993);

