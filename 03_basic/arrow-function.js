const user ={
    username: "Anas",
    price: "999",

    WelcomeMessage: function() {
        console.log(`Welcome ${this.username}, your price is ${this.price}`);
    }
}

// user.WelcomeMessage();

// function anas(){
//     console.log(this);
// }

// anas()

// const anas = () => {
//     let username = "Anas"
//     console.log(this);
    
// }

// anas()

const addtwo = (num1 , num2) => {
    return num1 + num2;
}