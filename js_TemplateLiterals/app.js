// Template Literals from ES6

const name = "shankar g";
const age = 23;
const address = "bengaluru";

let html;
 

//html= '<ul><li>Name: '+ name +'</li><li>Age: '+ age +'</li><li>Address: '+ address +'</li></ul>';

//document.body.innerHTML = html;

function hello(){
  return 'Hi';
}
html = `<ul><li>Name: ${name}</li><li>Age: ${age}</li><li>Address: ${address}</li><li>function: ${hello()}</li></ul>`;

document.body.innerHTML = html;