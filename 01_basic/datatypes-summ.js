// // primitive datatypes

// 7 types : string , number , boolean ,
// null , undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = true;
const outsidetemp = null;

let useEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false, because symbols are unique

const bigNumber = 355555887888444488n

const heros = ["shaktimsn", "superman", "batman"];
let myhero = {
    name: "batman",
    age: 30,

}

const myFunction = function () {

    console.log("hello world");
};

console.log(typeof BigInt);


// refrence type ( non primitive datatypes ) 
// object , array , function


