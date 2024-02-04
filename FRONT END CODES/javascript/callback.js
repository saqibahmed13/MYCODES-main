function display(x){
    console.log(x);
}

function mycalci(num1,num2,myCallback){
    let sum  = num1 + num2;
    myCallback(sum);
}

mycalci(5,5, display);