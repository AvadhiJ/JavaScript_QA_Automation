/**Template literals= let key = event.key;

if (key == "a" || key == "A") {
  let text = "You pressed the 'A' key!";
} */

//   const name1= 'Avadhi';
//   console.log(`My name is ${name1}`);


  /**Object and Array Desctructuring */
  //Destructing in javascript basically means the breaking down of a complex structure(Objects or arrays) into simpler parts. With the destructing assignment, we can ‘unpack’ array objects into a bunch of variables.

  // Object Destructuring
const college = {
    name : 'DTU',
    est : '1941',
    isPvt : false
};
let {name, est, isPvt} = college;
console.log(name, est, isPvt);

// Array Destructuring
// const arr = ['lionel', 'messi', 'barcelona'];
// let[value1,value2,value3] = arr;
// console.log(value1, value2, value3);
