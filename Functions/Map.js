/**Map function = On iterating a map object returns the key, and value pair in the same order as inserted  */

// const arr= [2,4,6,8,10];

// function double(x){
//   return  x*2;                         //basic map syntax using function
// }

// const output = arr.map(double);
// console.log(output);

// const arr= [2,4,6,8,10];

//                                                //basic map syntax using arrowfunction  (binary of the arr map)
// const output = arr.map((x)=> x.toString(2));
// console.log(output);

/**filter */
// const arr = [1,3,5,6,8,9,11]
// const res = arr.filter((d)=> d%2);
// console.log(res);   // filter out the odd number, here we have used arrow function

/**reduce = used at a place where you have take all the elements of the array and come up with a single value */

//find the sum number inside the array
 
const arr = [1,5,3,6,90]
const res = arr.reduce(function(acc,curr ){
    acc=acc+curr;
    return acc;
},0);
console.log(res);