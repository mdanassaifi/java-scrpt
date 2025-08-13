// singleton  

// object literal

const mySym = Symbol("mySymbol")

const JsUser ={
    name: "Anas",
    [mySym]: "mySymbolValue",
    age: 30,
    Location: "New York",
    email: "john@example.com",
    isLoggedIn: false,
    lastLoginDay: ["friday", "sunday"]
}

console.log(JsUser);
console.log(JsUser[mySym]);

JsUser.email = "newemail@example.com";
// Object.freeze(JsUser)
JsUser.email = "anotheremail@example.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}


console.log(JsUser.greeting());
