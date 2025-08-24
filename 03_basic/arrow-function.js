const user ={
    username: "Anas",
    price: "999",

    WelcomeMessage: function() {
        console.log(`Welcome ${this.username}, your price is ${this.price}`);
    }
}

// user.WelcomeMessage();

function anas(){
    console.log(this);
}

anas()