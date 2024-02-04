// window object: it represents an open window in a browser,its a browsers object not javascript object and its a global 
// object created automatically by browser with lots of properties.

console.log("hello");

// both are same 

window.console.log("hello2"); // to use this link the js to html and see in the console

// DOM :  HTML can be accessed in javascript which is known as document and these document will be appear in window object (browser)

//document.querySelector("idvalue or class or tags (p) ") : this will return the value of 1st elemnent of class or tag or id 

eg : document.querySelector(".classname for classes" , "#id for ids")

//document.querySelectorAll : this will return all the values of tags or classes  ( it returns nodelist)

// note : document.querySelectorAll() cannot be used for ids because id is unique

//<img class = "link">
// <p class = "para"></p>


// link para are the attributes

let para = document.getAttribute('class');   // output para

// we can also change the attribute

let changeAttribute = para.setAttribute("class", "new para");  // it will set the class to newpara


// css using javascript 

eg: div.style.backgroundColor = "blue" 

// in css we write with "-" eg background-color. javascript will be in camelcasing for the css properties eg: backgroundColor 
