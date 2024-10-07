/**Arithmetic operators + - * / % ** ++ -- */

let s= 78, y =89;
console.log(s+y);
console.log(y-s);
console.log(s*y);
console.log(s/y);
console.log(s%y);
console.log(s**y);

/**increment operator */
s++ //post increment
//++s //pre increment
console.log(s);
/**Decrement operator */
y--;  //post 
--y;  //pre


/**Assignment Opertors   */

 s= 37;
 y= 90;
 console.log(s); 

 s= s+y;
 console.log(s);

 console.log(s-=y); // s=s-y
 console.log(s*=y); //s= s*y
 console.log(s/=y); //s= s/y
 console.log(s%=y); //s= s%y


 /**Rational/Comparison operators */
 //always returns a boolean value either true/false
 //< > <= >= !=
  s=8;
  y=98;

  console.log(s>y);
  console.log(s<y); 
  console.log(s<=y); 
  console.log(s>=y);

 //ternary operator
 console.log(s<y?s:y);
  /**Logical operators  && || ! */

  let a = false , b = true;
  console.log(a&&b);
  console.log(a||b);
  console.log(!b);