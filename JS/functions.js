// Basic Function 

function add(a,b){
    console.log(a+b);
}

add(3,2);


// function with parameters

function greet(name){
   return ("my name is "+ name)
}

let result = greet("saqib");
console.log(result);

// function as expression 

const multiply = function(a,b){
    return a*b;
}

let answer = multiply(5,5);
console.log(answer);

// Arrow function  : for single expression no need write { } 

subtract =  (a,b) => {
return a-b;
}   

//OR 

// subtract =  (a,b) => a-b; 
    

let subAns = subtract(10,3);

console.log(subAns);



// function with default parameters

function math(base, exponent=2){
    let result = Math.pow(base,exponent);
    return result;
}

let mathAns = math(3);

console.log(mathAns);




// rest parameters function  : these are the parameters accept infinite number of parameters in function represented
// by 3dots ...

function sum(firstpara,secondpara,...restpara){
    result = firstpara + secondpara;

    for(let num of restpara){
        result = result + num;
    }
    return result;
}

let x = sum(10,20);  // here i am using two arguments
console.log(x);

let y = sum(10,20,40,50); // here more than two i am using as arguments
console.log(y);



//higher order function : these are the functions that operates on other function either by taking them as argument or returning them

function applyFunction(x,y,operation){    // here operation will be replaced by add or multi function 
    return operation(x,y);               // eg : add(x,y)
}

function add(x,y){
    return x + y;
}

function multi(x,y){
    return x * y;
}

console.log(applyFunction(2,4,add));   

console.log(applyFunction(2,2,multi));

// returning function

function multiplyBy(factor) {
    // This function returns another function (anonymous function)
    return function (number) {
      return number * factor;   // 2 and 3 will be there as factor once we call double and triple it will multiply respectivly
    };
  }
  
    // Create functions with specific factors
  const double = multiplyBy(2);
  const triple = multiplyBy(3);
  
    // Use the generated functions
  console.log(double(5));  // Outputs: 10
  console.log(triple(5));  // Outputs: 15
  


  // call back function

  function processData(data, callback) {
    // Process the data
    const result = data * 2;
  
    // Call the callback function
    callback(result);
  }
  
  function displayResult(result) {
    console.log("Result is: " + result);
  }
  
  processData(5, displayResult);  // Outputs: Result is: 10
  

//closure function : closures function is where an innerFunction can access the outerFunction even after outerFunction has 
                       // finished the execution


function outerFunction(){
    let outerValue = " Hi I am from outerFunction";

    function innerFunction(){
        console.log(outerValue);
    }

    return innerFunction;
}

const result2 = outerFunction();    // we should assigned the outerFunction to the variable then only we can able to print innerFunction
// with out variable reference it is not possible to access the innerFunction
result2();

// closures with parameters

function createMultiplier(factor){   //   createMultiplier returns an anonymous function with parameter number 
    return function(number){
        return number * factor;
    }
}

const doubleMulti = createMultiplier(2);  
// this is closure so here doubleMulti be pointing to anonymous function that is innerFunction the factor value will be 2 

console.log(doubleMulti(5));  
 




// self Invoked function 

(function(){
    let vi = "Hi i am invoked";
    console.log(vi);
    })();       


// if we use console.log(vi) outside of the function it will through an error 