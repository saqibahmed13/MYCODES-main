//events :  actions happening when we click on something
// eg: onclick , onmouseover


// Event Handling : Handling events using javascript.

// there are two types of Event handling
// 1. inline : that is writing within html eg: onclick
// 2. using javascript 
// eg:  let btn = document.querySelector("#btn");   // in html we should use id = btn 

// btn.onclick = () => {
//     console.log("btn was clicked!");
//     let a = 10;
//     a++;
//     console.log(a); // 11
// }

// Event Object : It is a special object that has details about the object denoted by e or evt

// evt.target = like target kya div k upper occur hua ki input k upper occur hua ki 
// evt.type = like mouseover, onlick;

eg: // btn.onclick = (evt) => {
        console.log(evt);
        console.log(evt.target);    // button
        console.log(evt.type);      // onlick
        console.log(evt.clientX, evt.clientY);   // client x is horizontally and y is vertically occur huwa
    // }


// Event Handler :- handling events 

// syntax : Node.addEventlistener(event,callback);   

// callback function is nothing but a function passed as an argument

eg: Btn.addEventListener("click",()=>{
    console.log("button was clicked")  // it will desplay in console of browser. 
})

// note to remove the eventlisterner the callback function should be same for both add and remove

eg: let handle  = () => {
    console.log("button was added")
};

Btn.addEventListener("click",handle);      // same call back function 
 
Btn.removeEventListener("click",handle);   // same call back function 

// reason to give same call back :  is when we call back differently for both add and remove it will allocate different 
// space for both respectivly hence we are assigning it to a variable(handle) first and then using as callback for both add 
// and remove






   
    
   
 
 