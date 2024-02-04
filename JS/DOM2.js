// creating elements

// let createBtn = document.createElement("button");
// console.log(createBtn); // to print it should be linked to html file

// createBtn.innerText = "click me " //  here we are adding text 

// // inserting elements in an array 
// let div = document.querySelector("div");   // here we are accessing that div (pakadrin so use)

// div.append(createBtn);    // this will add createBtn in the last within div
// div.prepend(createBtn);   // this will add createBtn in the first within div 
// div.before(createBtn)  // this will add in the first ousite of the div 
// div.after(createBtn)  // this will add in the last ousite of the div 


// creating a heading H1 through javascript and checking through HTML page (browser)

let newHeading = document.createElement("h1");   
newHeading.innerHTML = "<i>Hi I have been created using js !</i>"     // yeh step tak hame banadale 
document.querySelector("body").prepend(newHeading);     // in this step we are adding in html 


// removing elements in html using javascript
let para = document.querySelector("p");   //  hame access kare so paragraph , p jaako tag html me hai
para.remove();      // removed

// appendChild  - HMW
// removeChild   - HMW

// to add classes in css via javascript 

// lets say i have a class = content1 and I want to add one more class using javascript assume content2 in that case i will be 
// using classList : its a collection of attributes 

// eg: para.classList.add("content2");

// this will create a new class content 2 in same para 

// to remove 

// eg: para.classList.remove("content2");






                                   

