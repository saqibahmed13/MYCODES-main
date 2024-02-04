// Q.1: you are creating a college website for your college. Create a class User with 2 properties, name and email
        // it also has a method called viewData() that allows user a view website data.

const DATA = "www.viatris.com"   // for example we are using this as data

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data =", DATA);
    }
}

let student1 = new User("saqib", "saqib@gmail.com");
let student2 = new User("saqib2", "saqib2@gmail.com");

let teacher = new User("sadiq","sadiq@gmail.com");



