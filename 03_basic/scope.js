// Global and local scope in javascript 

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("inner: ", a);
}

let a = 100

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "anas"
    
    function two(){
        const website = "youtube"
        console.log(username);   
    }
    // console.log(website);
    
    two()
    
    
} 

one()

if (true){
    const username = "anas"
    if (username === "anas"){
        const website = "youtube"
        console.log(username + " ", website);
    }
}
// console.log(website);

// console.log(username);


function addtone(num){
    return num + 1
}
console.log(addtone(5));

