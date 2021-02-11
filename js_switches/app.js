// const color = 'red';

// switch(color){
//   case 'red':
//     console.log('red color');
//     break;

//   case 'blue':
//     console.log('blue color');
//     break;

//     default:
//       console.log('invalid color');
    
// }

const dayNo = new Date().getDay();

switch(dayNo){
  case 0:
    console.log('sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
      console.log('Wednesday');
      break;
  case 4:
        console.log('Thursday');
        break;
  case 5:
          console.log('Friday');
          break;
  case 6:
            console.log('saturday');
            break;
  default:
          console.log('Invalid');
              break;
}

console.log(dayNo);