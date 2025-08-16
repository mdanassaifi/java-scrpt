
function myname() {
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("S");
}

myname();


// function addtwonumber(num1, num2){
//     console.log(num1 + num2);
// }

function addtwonumber(num1, num2){
    let result = num1 + num2
    return result
}

const result = addtwonumber(5, 10);
console.log("Result: " + result);