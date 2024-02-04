// Classes and Objects 

// Objects : A Javascript Object is an entity with properties ( like variables) and behaviour(like function)

// Prototypes : these are the special default objects within the objects ( jab hame object banati tabbich ino default banjate so)
// student.toString (. k baad jo aaya wo prototype)
// prototypes are used to provide inheritance and share properties and methods between objects
// we can also make our own prototype


// USE CONSOLE FOR OUTPUT

const employee = {
    calTax(){
        console.log("tax is deducted");
    },
    // both are same 
    calTax2 : function(){
        console.log("tax is deducted");
    }
}

// creating our own prototype

const ashiq = {

salary:26000

};

ashiq.__prototype__ = employee;    // prototype has been created 

// in this way we dont have to create functions all the type we can create that as prototype and use it

console.log(ashiq);

// note : if prototype and object has same method then object method will be used 

// Assume ashiq(object) has 20% tax and employee(prototype) has 10% than 20% will be used 


// classes : it is a code template for creating objects 

class toyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand = brand;    // this.brand is the property of an object(setBrand) where as brand is a function argument 
    }
}

let fortuner = new toyotaCar();     // here we created an object using class
console.log(fortuner);
fortuner.setBrand("fortuner")


// Constructor : It is used to initialize the objects and it will be invoked automatically even if its not created

class RaceCar{
    constructor(brand,mileage){      // here only we are using setBrand method instead of creating separtely
        console.log("Creating a new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let ferrari = new RaceCar("ferrari enzo", 23);

console.log(ferrari);


// Inheritance in js 

// passing properties and methods from parent class to child class

class Parent{
    hello(){
        console.log("I am parent")
    }
}

class child extends Parent{}    // syntax to create a class

let obj = new child()


class Person{                      //  normal class and this is a parent class
    eat(){
        console.log("I Eat");
    }
    sleep(){
        console.log("I sleep")
    }
}


class Engineer extends Person{                         // this is also a normal class by using extends Person(parent) now its a child
    work(){
        console.log("solving problems");
    }
}

let saqib_Obj1 = new Engineer();

console.log(saqib_Obj.eat());
console.log(saqib_Obj.work());


// super() : used to invoke parent constructor from child class



class Parent2{
    hello(){
        console.log("I am parent")
    }
}

class child extends Parent{}    // syntax to create a class

let obj2 = new child()


class Person2{                      //  normal class and this is a parent class
    eat(){
        console.log("I Eat");
    }
    sleep(){
        console.log("I sleep")
    }
}


class Engineer extends Person2{  
    constructor(name){
        
     super(name)                             // it will invoke parent class constructor

// when we create a constructor in child class and we must call the constructor of parent class in case super has to be used

    }                    
    work(){
        console.log("solving problems");
    }
}

let saqib_Obj2 = new Engineer("saqib");

console.log(saqib_Obj2.eat());

console.log(saqib_Obj2.work());
