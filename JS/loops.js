// 1. For loop

for (let i = 0; i < 5; i++) {
    console.log(i);
  }

// 2. For in : it iterates over the properties of the object (key value pair)
// objects rahe to mostly for in use hota key value pair na

const person = {
    name:"Saqib",
    age:"24",
    job:"software engineer"
};

for(const key in person){
    console.log(`${key}: ${person[key]}`);
}

const state = {
    state1: "karnataka",
    state2: "andra",
    state3: "kerala",
    state4: "telangana"
};

const city = {
    city1: "bangalore",
    city2: "mumbai",
    city3: "pune",
    city4: "hydrabad"
};

// Loop through states and print state: city pairs

for(const key in state){
    let stateName = state[key];   // state ka city konsa  
    let cityKey = key.replace('state','city');
    let cityName  = city[cityKey];
    console.log(`${stateName}: ${cityName}`);

    //state[key]: This expression is used to access the value associated with the current key in the state object. 
    //For example, if key is "state1", then state[key] is equivalent to state["state1"], 
    //which retrieves the value "karnataka".
}

// For of loop : It iterates (looping over the sequence of elements) 
// over the values of the objects eg : arrays , strings

const colors = ["red","green", "yellow"];

for(const select of colors){
    console.log(select);   
}

const sentence = 'Hello, World!';
for (const char of sentence) {
  console.log(char);
}

// forEach loop takes function as an argument and each time to iterate it calls the function,
//  we cannot use break and continue statement in forEach.
//  both for of and forEach iterates over the values of an objects but for of loop is a normal loop where we can 
//  use break and continue and for Each it takes a function so we cannot use break and continue. 


// forEach is only used for arrays not for objects 
const numbers = [1,2,3,4,5,6,7];
numbers.forEach(function(output){
    console.log(output);
});

const personality = ["saqib","26","saqibcode@gmail.com"];
personality.forEach( (output) => {
console.log(output)
});


const fruits = ["apple","orange","pineapple"];
fruits.forEach((fruit ,index,array )=>{ //there is an order in forEach first should be the element, then index and 3rd is an array
    console.log(`Index ${index}: ${fruit}`);    
    console.log(`Full Array: ${array}`);
});

// while loop
let i =0;
while(i<=10){
    console.log(i);
    i++;
}

//dowhile loop

let n=0;
do{
console.log(n);
n++;
}while(n<6);