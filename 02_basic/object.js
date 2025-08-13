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
