// two methods to create arrays 
 
let arr1 = ["saqib", 24, true];  // 1st 
console.log(arr1);

let arr2 = new Array("ahmed", 23, false); // 2nd 
console.log(arr2);

// to check whether the given is array or not 

let checkArray = Array.isArray(arr1);
console.log(checkArray);

// adding and removing elements 

let array = [2,3,4,5,7];

array.push(9);             // push will add the element in the last index

array.unshift(1);          // unshift adds the element in the first index

array.shift();             // shift removes the element in the first

array.pop();               // pop will removes the element in the last

// splice method will be used to add and remove the elements

array.splice(1,0,444);    // position, item to be deleted(0) which means you are adding , element to be added 
// Removing 
let fruits = ['apple', 'banana', 'cherry', 'date'];

// Remove 2 elements starting from index 1
let removedFruits = fruits.splice(1, 2);

console.log(fruits); // ["apple", "date"]
console.log(removedFruits); // ["banana", "cherry"]

// Adding
let fruit = ['apple', 'banana', 'cherry', 'date'];


// Add 'orange' at index 2, without removing any elements
fruits.splice(2, 0, 'orange');

console.log(fruit); // ["apple", "banana", "orange", "cherry", "date"]


//Replacing 
let frui = ['apple', 'banana', 'cherry', 'date'];

// Replace 2 elements starting from index 1 with 'orange' and 'grape'
fruits.splice(1, 2, 'orange', 'grape');

console.log(frui); // ["apple", "orange", "grape", "date"]




console.log(array.slice(2));  // slice means cutting the array (start, end);  2 is the index 

            


