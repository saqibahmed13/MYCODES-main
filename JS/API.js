// API :  basically its an interface for sending and recieving data 

// API k wajah se softwares (eg : backend and frontend ) will communicate

// API fetch : basically by using fetch we can send / recieve the data 

// status:200 means successful 

// syntax to fetch : let response = fetch(URl,[option]);


const URL = "https://cat-fact.herokuapp.com/facts";

let para = document.querySelector(".fact")


let getData = async () =>{
console.log("getting data....")
let response = await fetch(URL);       // we are fetching a data this is also known as GET 
console.log(response.text);           // JSON format
let data = await response.json();

// console.log(data[0].text)

para.innerHTML = data[0].text;
}

// AJAX : Asynchronous JS and XML 
// AJAJ : Asynchronous JS and JSON or JSON 

// AJAX is replaced by AJAJ or JSON both are same 

// Basically this is a format what we get when we call an API(JSON) will convert this JSOn into JS Objects

//Json.method : basically this gives us Js Object as output [return a second parse first parse is fetching]


// we can also do this using promises
function getDataPromise(){
    fetch(URL).then((response) =>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        para.innerHTML = data[0].text;
    })
}

