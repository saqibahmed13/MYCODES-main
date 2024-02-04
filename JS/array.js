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

array.push(9);             // push will add the element in the last 

array.unshift(1);          // unshift adds the element in the first

array.shift();             // shift removes the element in the first

array.pop();               // pop will removes the element in the last

// splice method will be used to add and remove the elements

array.splice(1,0,444);    // position, item to be deleted(0) which means you are adding , element to be added 

array.splice(1,1);

console.log(array.slice(2));  // slice means cutting the array (start, end);

            


