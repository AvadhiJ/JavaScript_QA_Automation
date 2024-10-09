/**Creating objects in JavaScript */

// Simple function
// function vehicle(name, maker, engine) {
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
// }
// // New keyword to create an object
// let car = new vehicle('GT', 'Merc', '1998cc');
// // Property accessors
// console.log(car.name);
// console.log(car.maker);
// console.log(car.engine);

// Adding methods to the car object
// let truck = {
//     name : 'Tata',
//     maker : 'Tata',
//     start : function(){
//         console.log('Starting the engine...');
//     }
// };
// truck.start();
// // Adding method stop() later to the object
// truck.stop = function() {
//     console.log('Applying Brake...');  
// }
// truck.stop();

/**Creating object with Object.create() Method =  This approach allows the new object to inherit properties and methods from the prototype object, enabling inheritance-like behavior */

// const coder = {
//     isStudying : false,
//     printIntroduction : function(){
//         console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
//     }
// };
// const me = Object.create(coder);
// me.name = 'Mukul';
// // me.isStudying = '';
// me.printIntroduction();
