// maps are the higher order functions which operates on arrays 
// maps creates an array by performing some operations on each element 

const numbers = [1,2,3,4,5];

// using normal function 
const doubleNumber = numbers.map(function(num){
    console.log(num * 2);
});
 
// using arrow functions

const doubleNumber2 = numbers.map((num1)=>num1*2);

console.log(doubleNumber2);



const map1 = new Map();             //  creation of a map
// set expects two pairs one is value another one is a key 
map1.set('a',1);                    //  adding values to a map
map1.set('b',2);
map1.set('c',4);

console.log(map1);

console.log(map1.get('a'));         // for output i.e 1

map1.set('a', 13);                 //  changing the value 

console.log(map1.get('a'));        //  for output i.e 13

console.log(map1.size);            // 3 

map1.delete('c');

console.log(map1.size);            // 2


// objects to array 
const user = [
    {name:"saqib", id: 23},
    {name: "ahmed", id:24}
];

const names = user.map((us)=>us.name);
console.log(names);

const ids = user.map(function(usId){
    return usId.id;
});

console.log(ids);


//maps 

const num = [23,24,25];
const a =num.map((value,index)=>{
    console.log(value,index,num);
    return value;
});


// filter : filters an array with values that passes a condition and then creates a new array.


// here filtering an array which gives the values less than 10

// Note : original array will not be modified in map filter and reduce

const arr2 = [2,3,15,9,23,34,8];

const arr2Filter = arr2.filter((valueArr2)=>{
    return valueArr2<10;
});

console.log(arr2Filter);


// reduce : basically it reduces an array into a single value 

//syntax :         array.reduce(callback, initialValue);


const arr3 = [2,3,4,7,9];

const arr3Reduce = arr3.reduce((h1,h2)=>{
    console.log( h1+h2);    
    return h1+h2;
})

// dry run : here 2+3(h1+h2) will be added which is 5 then 5 will act as h1 and adds  4 in it and so on 
//  h1 + h2 
    // 2 + 3 = 5
    // 5 + 4 = 9
    // 9 + 7 = 16
    // 16 + 9 = 25

console.log(arr3Reduce);



