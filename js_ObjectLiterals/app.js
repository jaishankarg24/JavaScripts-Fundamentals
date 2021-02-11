//object literals

const person = {
  firstName : "jai",
  age : 23,

  hobbies:["code", "play", 'cook'],

  work: {
    a: "develop",
    b: "learn",
  },

  say :function(){
    return 2021-this.age;
  },


};

let val;

val= person;

console.log(val.firstName);
console.log(val.hobbies);
console.log(val.hobbies[2]);
console.log(val.work);
console.log(val.work.a);
console.log(val.say());


//Array of Objects

const pers = [ 
  {  fn:"jai", 
      ages:23,
  }, 
  {
    fn:"shiv",
     ages:24,
  },
];

console.log(pers);

console.log(pers[0].fn);

for(let i=0; i<pers.length; i++){
  console.log(pers[i].fn);
}

