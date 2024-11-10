//objects are a fundamental data type that allows you to store and organize data using a collection of key-value pairs.

// Objects should be use when elements are of string 

// array should be use when elements are of numbers 


const person = {
    name:"saqib",      // name is key or property and saqib is the value
    lname:"ahmed",
    age: 24,
    gender:"male"
};

console.log(person.name);

person.name = "sagheer";


// can modify like this 
console.log(person.name);

// difference between const let and var

// var is the functional scope meaning we can change the values with the functions and also we can re declare the values using var 

// with let we cannot redeclare the values 

// When you declare a variable with const and assign it an object[person], the variable holds a reference to that object, not the actual object itself.
// You cannot change that reference (i.e., point the variable to a completely different object), but you can modify the contents of the object (e.g., change its properties).

const person = { name: "Alice" };  // this object (person) has different memory location 
person.name = "Bob"; // No error, mutating the object
console.log(person.name); // Bob

person = { name: "Charlie" };  // this has different memory location 
  // Output : Error ---> Assignment to constant variable

// The above can be achieved using let and var 

// basic example with empty object 

const person3 ={};

person3.name = "sadiq";

person3.age = 23;

console.log(person3);


// calculator 

const calculator = {
    add:function(a,b){
        return (a+b);
    },
    sub:function(a,b){
        return (a-b);
    }
};

console.log(calculator.add(3,2));
console.log(calculator.sub(3,2));

// to print full name 

const human = {
    fname : "nyma",
    lname : "jain",
    fullName : function(){
        return(this.fname + " " + this.lname);  // this jaako ek object k function ka jo object ki property hai uska 
                                                // (eg : property yahan pe fullName hai so)
    }
}
console.log(human.fullName());






// Object Constructor

function admis(first,last,age){
    this.first = first;
    this.last = last;
    this.age = age;
}

const admi1 = new admis("saqib","ahmed",23);
const admi2 = new admis("sharif","baig",28);

console.log(admi1);
console.log(admi2);








// Object Destructing :  We may have an array or object that we are working with, but we only need some of the items contained in these.

const vehileSelect = {
    name: "fortuner",
    brandName: "toyota",
    type:"car",
    model : 2022
};

function myVehicle({name,brandName,model}){   // here i have not included type 
    console.log("My car name is " + name + "of " + model + " brand is " + brandName);
}

myVehicle(vehileSelect);











// the prototype :  is a mechanism that allows objects to inherit properties and methods from other objects

// Creating a prototype for Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // Creating instances of the Person object
  let person1 = new Person("Alice", 25);
  let person2 = new Person("Bob", 30);
  
  person1.greet();  // Output: Hello, my name is Alice and I am 25 years old.
  person2.greet();  // Output: Hello, my name is Bob and I am 30 years old.
  
