/**Arrow function= Arrow functions allow us to write shorter function syntax:*/
hello = () => {
    return "Hello World!";
   
  }
  //Arrow Function With Parameters:
  const square = x => x*x;
  console.log(square(4));

  //Arrow Function with Multiple Parameters
  const go = ( x, y, z ) => {
    console.log( x + y + z )
}

go( 10, 20, 30 );

  //Arrow Function with Default Parameters
  const gg = ( x, y, z = 30 ) => {
    console.log( x + " " + y + " " + z);
}

gg( 10, 20 );

  /**this function */
 