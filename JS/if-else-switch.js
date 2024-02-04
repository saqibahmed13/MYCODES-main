// let x = prompt("enter the number "); // this will not work in node.js it will be working on browser

let x =5;
let y =11;
if(x>10){
    console.log(x, " number is larger than 10")
 }
 else{
    console.log(x, " number is smaller than 10")
 }

//or 

y>10? console.log(y,"number is larger than 10"): console.log(y,"smaller than 10");



//switch statement 

let day = "Monday";

switch(day){
    case "Sunday":
        console.log(" Its Sunday");
        break;
    case "Monday":
        console.log(" Its Monday");
        break;
    case "Tuesday":
        console.log(" Its Tuesday");
        break;
    case "Wedneday":
        console.log(" Its Wedneday");
        break;
    case "Thursday":
        console.log(" Its Thursday");
        break;
    case "Friday":
        console.log(" Its Friday");
        break;
    default:
        console.log("weekend chill");
}
