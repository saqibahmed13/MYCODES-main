// synchronous : where data is printing in sequence order

console.log("first");
console.log("second");
console.log("third");

//aysnchronous : where the data is getting printed randomly by not waiting for other data if its taking time
// in aysnc the data which is taking more time will execute later and the data taking less time will execute 

console.log("printing first");

setTimeout(()=>{
console.log("last printing")
},2000);;

console.log("printing second");

//callback : functions passing as an argumnent

function sum(a,b){
    return a+b;
}


function calculator(a,b,callback){
    let result = callback(a,b);       // in callback return statement is there you need use 
    console.log(result)
}

 calculator(5,6,sum);


// real callback some example

// suppose we data 1 to execute first and then data 2
   
function getData(dataId, getNextData){
    setTimeout(()=>{
    console.log("data", dataId);
    if(getNextData){
        getNextData()
    }
    },2000)
}

// getData(1, getData(2));    // this will through error callback cannot be passed like this argument

getData(1, ()=>{              // we should passed in an argument then it will wait
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4);
        });          
    });
});

// the above call back is known is callback Hell : callback with in a callback i can say nested callbacks 
// to overcome this complex code we have promises 

// Promises : these are the objects of javascript which has 3 states pending, fullfilled(resolve) and reject . 
// is has two handlers resolve and reject which are default ly created by javascript

// pending : result is undefined
// resolved : result is  fulfilled
// reject : result is an error 

// to resolve will write resolve(result)
// to reject will write reject(error message)

// syntax with example 

let promise = new Promise( (resolve,reject)=>{
console.log("promise resolve hoga");
resolve();
// reject("error ba");
});

// usually we will not write promises like this we will get promises from API and we will be handling it
// now to handle we have then and catch method

// syntax for .then and .catch promise
// promise.then((res)=>{...})    for resolving 
// promise.catch((err)=>{...})   for error

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        resolve("success");
        //or
        // reject("there is some error");
    });
}

let hamPromise = getPromise();

hamPromise.then((res)=>{                          // will use .then to handle fulfilled
    console.log("promise is fulfilled",res);
});

// hamPromise.catch((err)=>{
//     console.log("error due to catch",err);         // will use .catch to handle error
// })




// promisechain  : collection of nested .then within .then 

// lets take callback hell example
function getData2(dataId2){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data", dataId2);
            resolve("success");
        },2000)
    }) 
}

// this is promise chaining compare to callback hell it is less back

getData2(1)
.then((res)=>{  
    return getData2(2);
}).then((res)=>{
    return getData2(3);
}).then((res)=>{
    console.log(res);
});


// this is promise chaining compare to callback hell it is less complex we have one more best method i.e async-await

// async-await : 

// async function always returns a promise 
// await will wait until promise is executed
// will take same example 

async function getAllData() {
    await getData2(1);   // will wait for this to get over
    await getData2(2);
    await getData2(3);
    await getData2(4);
}
