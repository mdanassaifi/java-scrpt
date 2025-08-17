
function myname() {
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("S");
}

// myname();


// function addtwonumber(num1, num2){
//     console.log(num1 + num2);
// }

function addtwonumber(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2;
}

const result = addtwonumber(5, 10);
// console.log("Result: " + result);

function LoginUserMessage(username){
    return `${username} has logged in.`
}

// console.log(LoginUserMessage("Anas"));

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 500, 600))


const newArray = [200, 500, 600]

function returnsecoundvalue(getArray){
    return getArray[0]; 
}

// console.log(newArray);
console.log(returnsecoundvalue(newArray));
